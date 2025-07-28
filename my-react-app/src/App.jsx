import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10)
      }, 10);
  } else if(!isRunning) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);},[isRunning]);

  return (
    <>
    <div className='max-w-md flex flex-col items-center justify-center'>
     <h1 className='text-2xl font-bold pb-2'> StopWatch</h1>

     <div className='flex justify-center items-center gap-2 text-2xl font-semibold'>
      <span>{("0" + Math.floor((time/60000)%60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time/1000)%60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time/10)%100)).slice(-2)}</span>
     </div>
     <div className='w-1/3 flex flex-row justify-between pt-4'>
      {isRunning ?       
      <button onClick={() => setIsRunning(false)}
      className='bg-red-500 text-white px-4 py-2 rounded-3xl'
      >Stop</button>
      :
      <button onClick={() => setIsRunning(true)}
      className='bg-green-500 text-white px-4 py-2 rounded-3xl'
      >Start</button>}


      <button onClick={() => setTime(0)}
        className="
        bg-blue-500 text-white px-4 py-2 rounded-3xl
        ">Reset</button>
     </div>
     </div>
    </>
  )

}
export default App
