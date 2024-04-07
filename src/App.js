import './App.css';

import {useRef, useEffect, useState} from 'react';

function Child() {
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = event => {
      console.log('Button clicked');
    };

    const element = ref.current;

    element.addEventListener('click', handleClick);

    // 👇️ Run a function when the component unmounts 👇️
    return () => {
      console.log('Child unmounted');
      element.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div>
      <button ref={ref}>Click</button>
    </div>
  );
}

const App = () => {
  const [isMounted, setIsMounted] = useState(true);

  return (
    <div>
      <button onClick={() => setIsMounted(current => !current)}>
        Toggle child
      </button>

      <hr />

      {isMounted && <Child />}
    </div>
  );
};

export default App;
