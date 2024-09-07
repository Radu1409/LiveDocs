'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
  
import Image from 'next/image'
import UserTypeSelector from "./UserTypeSelector";
import Collaborator from "./Collaborator";
import React, { useState } from 'react'
import { useSelf } from '@liveblocks/react/suspense';
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { updateDocumentAccess } from "@/lib/actions/room.actions";

const SharedModal = ({ roomId, collaborators, creatorId, currentUserType }: ShareDocumentDialogProps) => {
  const user = useSelf();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingCopy, setLoadingCopy] = useState(false);
  const [copied, setCopied] = useState(false);
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState<UserType>('viewer');
  const [linkType, setLinkType] = useState<UserType>('viewer');
  const [link, setLink] = useState('');

  const generateRandomId = () => {
    return Math.random().toString(36).slice(2, 8); // Generăm un ID aleatoriu de 8 caractere
  };

  const handleCopyLink = () => {
    setLoadingCopy(true);
    const linkToCopy = generateAccessLink();
    navigator.clipboard.writeText(linkToCopy);
    setLink(linkToCopy);
    setLoadingCopy(false);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
  };

  const generateAccessLink = () => {
    const baseUrl = `${window.location.origin}/documents/${roomId}`;
    const accessParam = `access=${linkType}`;
    const randomId = generateRandomId(); // Generăm ID-ul aleatoriu
    return `${baseUrl}?${accessParam}&id=${randomId}`; // ID-ul aleatoriu după parametrii de acces
  };

  const shareDocumentHandler = async () => {
    setLoading(true);

    await updateDocumentAccess( { 
      roomId, 
      email, 
      userType: userType as UserType, 
      updatedBy: user.info
    });

    setLoading(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button className="gradient-blue flex h-9 gap-1 px-4" disabled={currentUserType !== 'editor'}>
          <Image 
            src='/assets/icons/share.svg'
            alt='share'
            width={20}
            height={20}
            className='min-w-4 md:size-5'
          />
          <p className="mr-1 hidden sm:block">Share</p>
        </Button>
      </DialogTrigger>
      <DialogContent className="shad-dialog">
        <DialogHeader>
          <DialogTitle>Manage who can view this project</DialogTitle>
          <DialogDescription>
            Select which users can view and edit this document
          </DialogDescription>
        </DialogHeader>
        <Label htmlFor='email' className="mt-6 text-blue-100">
          Email address
        </Label>
        <div className="flex items-center gap-3">
          <div className="flex flex-1 rounded-md bg-dark-400">
            <Input 
              id='email'
              placeholder='Enter email address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="share-input"
            />
            <UserTypeSelector 
              userType={userType}
              setUserType={setUserType}
            />
          </div>
          <Button type='submit' onClick={shareDocumentHandler} 
            className="gradient-blue flex h-full gap-1 px-5"
            disabled={loading}>
            {loading ? 'Sending...' : 'Invite'}
          </Button>
        </div>
        <div className="my-2 space-y-2">
          <ul className="flex flex-col">
            {collaborators.slice().reverse().map((collaborator) => (
              <Collaborator 
                key={collaborator.id}
                roomId={roomId}
                creatorId={creatorId}
                email={collaborator.email}
                collaborator={collaborator}
                user={user.info}
              />
            ))}
          </ul>
          <div className="flex items-center justify-between bg-slate-900 py-3 px-3 rounded-md">
            <div className="flex items-center gap-3">
              <Image 
                src='/assets/icons/icon.svg'
                alt='icon'
                width={20}
                height={20}
                className='min-w-4 md:size-5'
              />
              <p>Anyone with the link</p>
            </div>
            <div className="flex items-center">
              <UserTypeSelector 
                userType={linkType}
                setUserType={setLinkType}
              />
              {/* TODO: Implement access control based on user's selection (viewer/editor mode) */}
              <Button 
                className={`bg-gray-700 hover:bg-gray-800 shadow-xl flex h-full 
                  gap-1 px-4 ${copied ? 'text-green-500 bg-gray-800' : 'text-white'}`}
                onClick={handleCopyLink}
                disabled={loadingCopy || copied}>
                {copied ? 'Link copied!' : loadingCopy ? 'Copying...' : 'Copy link'}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default SharedModal
