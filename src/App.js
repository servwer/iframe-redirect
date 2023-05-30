import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [state, setState] = useState()
  useEffect(() => {
    // window.addEventListener('')
  },[])

  const onClick1 = () => {
    // console.log('window.top.location.href', window.top.location.href);
    // window.top.location.href = '/iframe-redirect'
    console.log(window.top)
    console.log(window.parent)

  }

  const onParentMessage = (event) => {
    if (!event.data || (event.origin === window.location.origin)) {
      return;
    }
    const data = JSON.parse(event.data);
    setState(data)
  }

  useEffect(() => {
    window.addEventListener('message', onParentMessage);
  })

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
