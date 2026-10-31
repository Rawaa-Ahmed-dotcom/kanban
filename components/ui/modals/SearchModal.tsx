'use client';

import { useState } from 'react';
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react';
import { Fragment } from 'react';
import { IoMdSearch, IoMdClose } from 'react-icons/io';
import SearchInput from '../navbar/SearchInput';

const SearchModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        aria-label="Open Search"
        className="block sm:hidden p-2 rounded-full hover:bg-black/5 active:scale-95 transition-all" 
        onClick={() => setIsOpen(true)}
      >
        <IoMdSearch className="text-(--gray-600) hover:text-(--gray-900)" size={24} />
      </button>

      <Transition show={isOpen} as={Fragment}>
        <Dialog onClose={() => setIsOpen(false)} className="relative z-50 block sm:hidden">
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/40 backdrop-blur-xs" aria-hidden="true" />
          </TransitionChild>

          <div className="fixed inset-0 flex items-start justify-center p-4 pt-16">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0 -translate-y-4 scale-95"
              enterTo="opacity-100 translate-y-0 scale-100"
              leave="ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0 scale-100"
              leaveTo="opacity-0 -translate-y-4 scale-95"
            >
              <DialogPanel className="w-full max-w-lg rounded-2xl bg-(--bg-card) p-4 shadow-xl border border-black/5">
                <div className="flex items-center gap-2">
                  <div className="flex-1">
                    <SearchInput autoFocus = {true}/>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-(--gray-500) hover:text-(--gray-800) rounded-full hover:bg-(--gray-50) transition-colors"
                  >
                    <IoMdClose size={22} />
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default SearchModal;