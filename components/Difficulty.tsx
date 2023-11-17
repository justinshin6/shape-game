import React from 'react';


interface DifficultyProps {
  mode: number;
}

const getDifficultyMode = (num: number): string => {
    const difficultyModes = ["Easy", "Medium", "Hard"];
    const index = num >= 0 && num < difficultyModes.length ? num : -1;
    return index !== -1 ? difficultyModes[index] : "Invalid";
  };
  

const Difficulty = ({mode}: DifficultyProps) => {
  return (
    <>
      <button className="py-2 px-4 mr-10 bg-green-500 text-white rounded cursor-pointer">
      {getDifficultyMode(mode)}
    </button>
    </>
  );
};

export default Difficulty;
