import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const GamePlay = () => {
  const router = useRouter();
  const { mode } = router.query;

  return (
    <div>
      {mode}
    </div>
  );
};

export default GamePlay;
