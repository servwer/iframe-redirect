import './App.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    // window.addEventListener('')
  },[])

  const onClick1 = () => {
    // console.log('window.top.location.href', window.top.location.href);
    // window.top.location.href = '/iframe-redirect'
    console.log(window.top)
    console.log(window.parent)

  }

  const onClick2 = () => {
    // console.log('window.top.location.href', window.top.location.href);
    window.parent.location.href = '/iframe-redirect'
  }

  return (
    <div className="App">
      <button onClick={onClick1}>to top level by top</button>
      <button onClick={onClick2}>to top level by parent</button>
    </div>
  );
}

export default App;
