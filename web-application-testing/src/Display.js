import React, { useState } from "react";
import "./App.css";
import Dashboard from "./Dashboard";

function Display() {
  const [strike, setStrike] = useState(0);
  const [ball, setBall] = useState(0);

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Strikes</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{strike}</div>
          </div>
          <div className="timer">LAMBDA STADIUM</div>
          <div className="away">
            <h2 className="away__name">Balls</h2>
            <div className="away__score">{ball}</div>
          </div>
        </div>
      </section>
      <Dashboard
        setStrike={setStrike}
        strike={strike}
        ball={ball}
        setBall={setBall}
      />
    </div>
  );
}

export default Display;
