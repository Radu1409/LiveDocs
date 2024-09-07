'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const SearchBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const inputRef = useRef(null);
  
  const toggleSearchBar = () => {
    setIsVisible(true);
  };
  
  const handleClickOutside = (e) => {
    if (inputRef.current && !inputRef.current.contains(e.target)) {
      setIsVisible(false);
    }
  };
  
  useEffect(() => {
    if (isVisible) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }
  
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isVisible]);

  return (
    <div className="relative flex items-center p-2 rounded-full">
      {/* Când input-ul este vizibil */}
      {isVisible && (
        <div className="relative flex items-center bg-slate-700 rounded-full w-full pl-4 pr-12">
          <input
            ref={inputRef}
            type="text"
            placeholder="Search..."
            className="w-full p-2 bg-transparent rounded-full text-white focus:outline-none"
          />
          {/* Iconița pentru Search */}
          <div 
            className="absolute right-2 flex items-center justify-center bg-slate-900 cursor-pointer rounded-full"
            onClick={toggleSearchBar}
            style={{ height: '32px', width: '32px' }}
          >
            <Image
              src="/assets/icons/searchbar.svg" // Imaginea ta; asigură-te că ai un fișier imagine valid în folderul public.
              alt="Search"
              className="w-8 h-8"
              width={32}
              height={32}
            />
          </div>
        </div>
      )}
      {/* Iconița pentru Search când input-ul nu este vizibil */}
      {!isVisible && (
        <div 
          onClick={toggleSearchBar} 
          className="rounded-full cursor-pointer hover:bg-slate-800 p-2"
        >
          <Image
            src="/assets/icons/searchbar.svg" // Imaginea ta; asigură-te că ai un fișier imagine valid în folderul public.
            alt="Search"
            className="w-8 h-8"
            width={32}
            height={32}
          />
        </div>
      )}
    </div>
  );
}

export default SearchBar