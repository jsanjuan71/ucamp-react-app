import { useEffect, useRef, useState } from "react";


function App() {

  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);
  const timer =  useRef(null)

  useEffect(() => {
    if(!timer.current)
    timer.current = setInterval( () => { 
        count.current = count.current + 1
        console.log( "tic", count.current )
      }, 1000 )
  });

  const handleInput = ( {target} ) => {
    setInputValue(target.value)
    console.log("handleInput")
  }

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={handleInput}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );
}

export default App;
