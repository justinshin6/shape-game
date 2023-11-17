import React from 'react';
import Link from "next/link";

function PlayGuest() {
  return (
    <button className="py-2 px-4 mr-10 bg-green-500 text-white rounded cursor-pointer">
      <Link href={"/GameSetup"} as="/setup">Play As Guest</Link>
    </button>
  );
}

export default PlayGuest;
