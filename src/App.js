import './App.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    // window.addEventListener('')
  },[])

  const onClick = () => {
    console.log('window.top.location.href', window.top.location.href);
    setTimeout(() => {
      console.log('after 3 sec')
      window.top.location.href = '/iframe-redirect'
    }, 3000)
  }

  return (
    <div className="App">
      <button onClick={onClick}>to top level</button>
    </div>
  );
}

export default App;
