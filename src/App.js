import  { useEffect, useRef } from 'react';
import CardComponent from './components/card-component';

import { gsap } from 'gsap'

import './App.css';

function App() {
  const appRef = useRef();

  useEffect(() => {
    gsap.from('.App', {
      opacity: 0,
      duration: 1.3
    })
    gsap.to('.App', {
      opacity: 1,
      duration: 1.3
    })
  }, [])

  return (
    <div className="App" ref={appRef}>
      <CardComponent />
    </div>
  );
}

export default App;
