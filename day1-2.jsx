import React, { useState, useEffect } from 'react';
const Greeting= ({ user })=>{
    return(
        <>
            <h1>Hello, {user.name}</h1>        
            <h1>Your age, {user.age}</h1>        
        </>
    )
}
function DataLoader() {
  const [isLoading, setIsLoading] = useState(true);
const isLoggedIn = false;
const userData = { name: "Taj", age: 24 };
const [count, setCount] = useState(0);
  useEffect(() => {
    // Simulate a data fetch
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  return (
    <div>
      {isLoading ? <p>Loading...</p> : <p>Data Loaded!</p>}
        <h1>{isLoggedIn ? "Welcome back!" : "Please log in"}</h1>
        <button onClick={() => alert("Clicked!")}>Click me</button>
        <Greeting user={userData} />
        <p>Count: {count}</p>
        <button onClick={()=>  setCount(count + 1)}>Increase</button>
        <button onClick={()=>  setCount(count - 1)}>Decerease</button>
    </div>
  );
}

export default DataLoader;
