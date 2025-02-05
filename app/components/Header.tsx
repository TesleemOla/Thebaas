import Link from 'next/link';
import React from 'react'


const Header = () => {
  return (
    <div className="h-[95px] flex items-center">
      <nav className="flex justify-between items-center ">
        <Link
          href="/"
          className="mb-2 lg:mt-5 text-[#0166FF] text-2xl font-extrabold"
        >
          SHARP EVENT
        </Link>
        <Link href="#" className="hidden lg:block font-bold">List your space</Link>
        <div className="gap-[10px] font-semibold text-xs hidden lg:flex">
          <button className="border-[#0166FF] text-[#0166FF] border-2 w-[129px] h-[42px] rounded-xl">
            Log In
          </button>
          <button className="bg-[#0166FF] w-[129px] h-[42px] text-white rounded-xl">
            Sign Up
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Header