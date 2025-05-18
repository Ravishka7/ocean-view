import { Link } from "react-router";
import { useState } from 'react';
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";


export default function Navigations() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-[#f4f8f9]">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-1 lg:px-2">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.8"> 
            <img
              alt=""
              src="/assets/navigation/logo_5.png"
              className="h-18 w-40"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">

          <Link to="/" className="text-sm/6 font-semibold text-blue-900 hover:bg-gray-200">
            Home
          </Link>
          <Link to="/rooms" className="text-sm/6 font-semibold text-blue-900 hover:bg-gray-200">
            Accomodations
          </Link>
          <Link to="/tours" className="text-sm/6 font-semibold text-blue-900 hover:bg-gray-200">
            Our Tours
          </Link>

          <SignedIn>
          <Link to="/admin" className="text-sm/6 font-semibold text-blue-900 hover:bg-gray-200">
            Admin
          </Link>
          </SignedIn>

        </PopoverGroup>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end space-x-4">
          <SignedIn>
            <UserButton />
            <Link to="/" className="text-sm/6 font-semibold text-blue-900 hover:bg-gray-200">
              My Bookings <span aria-hidden="true">&rarr;</span>
            </Link>
          </SignedIn>
          
          <SignedOut>
            <Link to="/sign-in" className="text-sm/6 font-semibold text-blue-900 hover:bg-gray-200">
              Sign in <span aria-hidden="true">&rarr;</span>
            </Link>
            <Link to="/sign-up" className="text-sm/6 font-semibold text-blue-900 hover:bg-gray-200">
              Sign up <span aria-hidden="true">&rarr;</span>
            </Link>
          </SignedOut>
          
        </div>
        
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="/assets/navigation/logo_5.png"
                className="h-8 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">             
                <Link
                to="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-blue-900 hover:bg-gray-50"
                >
                  Home
                </Link>
                <Link
                  to="/rooms"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-blue-900 hover:bg-gray-50"
                >
                  Accomodations
                </Link>
                <Link
                  to="/tours"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-blue-900 hover:bg-gray-50"
                >
                  Our Tours
                </Link>
                <SignedIn>
                <Link
                  to="/admin"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-blue-900 hover:bg-gray-50"
                >
                  Admin
                </Link>
                </SignedIn>
              </div>
              <div className="py-6">
                <SignedIn>
                  <UserButton />
                  <Link
                    to="/"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-blue-900 hover:bg-gray-50"
                  >
                    My Bookings
                  </Link>
                </SignedIn>

                <SignedOut>
                  <Link
                    to="/sign-in"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-blue-900 hover:bg-gray-50"
                  >
                    Sign in
                  </Link>
                  <Link
                    to="/sign-up"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-blue-900 hover:bg-gray-50"
                  >
                    Sign up
                  </Link>
                </SignedOut>
                
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}