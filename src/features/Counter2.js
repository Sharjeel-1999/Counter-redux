import {useSelector,useDispatch} from 'react-redux'
import { increment,decrement,incrementByAmount } from './App/counterslice';
import "../App.css";

const Counter2 = () => {
//   const [count, setCount] = useState(0);
    const count = useSelector((state)=>state.counter.count );
    const dispatch=useDispatch();


  return (
    <div>
      <button
        className="button"
        aria-label="Increment"
        onClick={() => { dispatch(increment())}}>+</button>
      <span className="value">Count:{count}</span>
      <button className="button" aria-label="Decrement"
        onClick={() => {dispatch(decrement()) }}>-</button>
         <button className="button" aria-label="Decrement"
        onClick={() => {dispatch(incrementByAmount(10)) }}>Increment By 10</button>
    </div>
  );
};

export default Counter2;
