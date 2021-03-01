import React from 'react'; 
import './Counter.css';

function Counter({size}) {
  const [counter, setCounter] = useState(0);
  let btnClass = 'btn';
  let btnClassSeconadry = 'btn btn--secondary';

  if (size === 2) {
    btnClass += ' btn--medium';
    btnClassSeconadry += 'btn--medium'
  } else if (size === 10) {
    btnClass += ' btn--large';
    btnClassSeconadry += ' btn--large';
  }
  const changeCounterValue = type => {
    console.log(type);
    if (type === 'decrement') {
      setCounter(counter - 1)
    } else if (type === 'increment') {
      setCounter(counter + 1)
    }
    console.log('counter', counter)
  }

  return (
    <div>
      <button onClick={()=> {changeCounterValue('increment')}} className={btnClass}>+</button>
      <span>{counter}</span>
      <button onClick={()=> {changeCounterValue('decrement')}} className={btnClassSeconadry}>-</button>
    </div>
  );
}

export default Counter;
