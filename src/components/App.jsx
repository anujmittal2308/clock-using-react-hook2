import React, { useState } from "react";
function App() {
  setInterval(updatetime, 1000);
  let now = new Date().toLocaleTimeString();
  var [time, setTime] = useState(now);
  function updatetime() {
    var newtime = new Date().toLocaleTimeString();
    setTime(newtime);
  }
  return (
    <div className="container">
      <h1 className="container">{time}</h1>
      <button onClick={updatetime}>Get Time</button>
    </div>
  );
}

export default App;
