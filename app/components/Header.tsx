import Link from 'next/link';
import React from 'react'


const Header = () => {
  return (
    <div>
      <nav className="flex justify-between items-center ">
        <Link
          href="/"
          className="mb-2 lg:mt-5 text-[#0166FF] text-2xl font-extrabold"
        >
          SHARP EVENT
        </Link>
        <Link href="#">List your space</Link>
        <div className="flex gap-[10px] font-semibold text-xs">
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