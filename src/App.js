// import Counter from "./features/Counter1";
import './App.css'
import Counter2 from "./features/Counter2";
import Coin from './features/coin';
import Theme from './features/theme';






 const App=()=>{
  return(
    <div className="App">
    {/* <Counter/> */}
    <Counter2/> <br/>
    <Coin/>
<Theme/>
    </div>
  );
}

export default App;