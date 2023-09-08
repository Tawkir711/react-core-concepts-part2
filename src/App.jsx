import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './User';
import Friends from './Friends';

function App() {
  function handleClick(){
    alert('btn clicked');
  }
  const handleClick2 = () => {
    alert('btn click 2');
  }
  const addToFive = (num) => {
    alert(num + 5);
  }
  return (
    <>
      <h3> React Core Concepts 2</h3> 
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() => {alert('third Click')}}>Third click</button>
      {/* ektu bejal ace four btn a */}
      <button onClick={() => addToFive(3)}>Four Btn </button>
    </>
  )
}

export default App
