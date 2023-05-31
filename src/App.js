import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [state, setState] = useState()
  useEffect(() => {
    // window.addEventListener('')
  },[])

 

  const onParentMessage = (event) => {
    // console.log(35463456, event)
    if (!event.data || (event.origin === window.location.origin)) {
      return;
    }
    // console.log(999999, event)
    const data = JSON.parse(event.data);
    // console.log('data', data)
    setState(data)
  }

  // console.log(123123, state)
                    

  useEffect(() => {
    window.addEventListener('message', onParentMessage);
  })

  const onClick1 = () => {
    // console.log('window.top.location.href', window.top.location.href);
    // window.top.location.href = 'http://localhost:3000/iframe-redirect'
    window.location.href = 'https://iframe-redirect.vercel.app/ffff'
    parent.window.location.href = 'http://localhost:3000/iframe-441234'
  }
  console.log('window.top', window.top)
  console.log('window.parent', window.parent)
  const onClick2 = () => {
    // console.log('window.top.location.href', window.top.location.href);
    // window.parent.location.href = 'http://localhost:3000/'
    window.location.href = '/qwe'
  }

  return (
    <div className="App">
      <button onClick={onClick1}>to top level by top</button>
      <button onClick={onClick2}>to top level by parent</button>
    </div>
  );
}

export default App;
