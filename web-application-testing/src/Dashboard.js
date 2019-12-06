import React from "react";
import "./App.css";

const Dashboard = props => {
  const strikeOut = () => {
    if (props.strike === 3) {
      props.setStrike(0);
      props.setBall(0);
    } else {
      props.setStrike(props.strike + 1);
    }
  };

  const ballsOut = () => {
    if (props.ball === 4) {
      props.setStrike(0);
      props.setBall(0);
    } else {
      props.setBall(props.ball + 1);
    }
  };

  return (
    <div className="bottomRow">
      <section className="buttons">
        <div className="homeButtons">
          <button className="homeButtons__touchdown" onClick={strikeOut}>
            Strike
          </button>
          <button className="awayButtons__touchdown" onClick={ballsOut}>
            Ball
          </button>
          <button
            className="homeButtons__fieldGoal"
            onClick={() =>
              props.ball < 2 ? props.setBall(props.ball + 1) : null
            }
          >
            Foul
          </button>
          <button
            className="awayButtons__fieldGoal"
            onClick={() => {
              props.setStrike(0);
              props.setBall(0);
            }}
          >
            Hit
          </button>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
