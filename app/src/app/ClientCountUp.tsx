'use client';

import { useState } from 'react';

export function ClientCountUp() {
  const [count, setCount] = useState(0);
  function countUp() {
    console.log("count Up!")
    setCount(count + 1);
  }

  return (
    <button onClick={countUp}>{count}</button>
  );
}