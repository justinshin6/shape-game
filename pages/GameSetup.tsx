import React from 'react';
import Navbar from "@/components/Navbar";
import Difficulty from "@/components/Difficulty";
import Link from "next/link";

const GameSetup = () => {
  return (
    <main className="flex items-center justify-center h-screen">
      <Navbar />

      <div className="text-center">
        <Link href="/GamePlay?mode=0"><Difficulty mode={0} /></Link>
        <Link href="/GamePlay?mode=1"><Difficulty mode={1} /></Link>
        <Link href="/GamePlay?mode=2"><Difficulty mode={2} /></Link>
      </div>
    </main>
  );
};

export default GameSetup;
