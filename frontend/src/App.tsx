import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, increment, incrementByAmount, reset } from './features/counter/counterSlice';
import { useState } from 'react';

interface Rootstate{
  counter:{
    value:number
  }
}

function App() {
  const [amount , setAmount] = useState<number >(0);
  const count  = useSelector((state: Rootstate)=> state.counter.value)
  const dispatch = useDispatch();

  function handleDecrement(){
    dispatch(decrement())
  }

  function handleReset(){
    dispatch(reset())
  }

  function handleAmountIncrement(){
    dispatch(incrementByAmount(amount))
  }
  return <div>
    <h1>Counter Value: {count}</h1>
    <button onClick={()=> dispatch(increment())}>Inc + </button>
    <button onClick={handleDecrement}>Dec - </button>    

    <button onClick={handleReset}>Reset</button> 


    <div className=' flex flex-col w-2xl h-xl'>
      <input className='border outline-none' type="number" placeholder='enter a amount'  onChange={(e) => setAmount(Number(e.target.value))}/>
      <button className='rounded p-2 bg-zinc-500' onClick={handleAmountIncrement}>Inc by amount</button>
    </div>

    
  </div>
}

export default App;
