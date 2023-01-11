import {useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrementByUser, incrementByUser, multiplicationByUser, partitionByUser, setIncrementValueAction } from './redux/action/calculator.action';


export default function App() {
  const count = useSelector((state) => state.calculatorReducer.count);
  const inputValue = useSelector((state) => state.calculatorReducer.inputValue);

  const dispatch = useDispatch();

  return (
    <div className='App'>
      <div className='calculator'>
      <h1>{count}</h1>

    <input type="number" value={inputValue} onChange ={(e)=>dispatch(setIncrementValueAction(e.target.value))}/>

    <div className='buttons'>
<div className='mainButtons'>
<button onClick={()=>dispatch(incrementByUser(inputValue))}>+</button>
<button onClick={()=>dispatch(decrementByUser(inputValue))}>-</button>
<button onClick={()=>dispatch(multiplicationByUser(inputValue))}>X</button>
<button onClick={()=>dispatch(partitionByUser(inputValue))}>/</button>
<button className='reset' onClick={()=>dispatch(multiplicationByUser(0))}>C</button>
</div>

<div className='neverClickButton'>
<button className='neverClick' onClick={()=>window.location="https://www.youtube.com/watch?v=OlUoaXXG_YYyoutube.com/watch?v=OlUoaXXG_YY"}><span>NEVER CLICK THIS BUTTON!!!</span></button>
</div>
</div>
    </div>
    </div>
  );
}