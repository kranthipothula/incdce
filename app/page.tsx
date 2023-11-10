"use client"
import { useState } from 'react';



const Counter = () => {
  const [count, setCount] = useState(0);

  const handleUp = () => {
    setCount(count + 1);
  };

  const handleDown = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };
  

  return (
      
      <main className="flex min-h -screen flex-col items-center justify-between p-24">
      
    <div className='row mt-0'> 
      <button className="bg-gray-500 text-white font-semibold rounded p-1 cursor-pointer" onClick={handleUp}>+</button>
      <p>{count}</p> 
      <button className="bg-gray-500 text-white font-semibold rounded p-1 cursor-pointer"onClick={handleDown}>-</button> 
      <span style={{ margin: '1 8px' }}></span>
      <button className="bg-white-500 text-black font-semibold rounded p-1 cursor-pointer" onClick={handleReset}>Reset</button>
    </div>
    
    </main>
  );
};
 export default Counter

