import React, { useEffect, useState } from "react";
import "./App.css";
import Trivia from "./components/Trivia";
import data from "./data.js";
import Timer from "./components/Timer";

function App() {
  const [active, setActive] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");
  const moneyPyramid = [
    { id: 1, amount: "$ 100" },
    { id: 2, amount: "$ 200" },
    { id: 3, amount: "$ 300" },
    { id: 4, amount: "$ 500" },
    { id: 5, amount: "$ 1000" },
    { id: 6, amount: "$ 2000" },
    { id: 7, amount: "$ 5000" },
    { id: 8, amount: "$ 10000" },
    { id: 9, amount: "$ 25000" },
    { id: 10, amount: "$ 60000" },
    { id: 11, amount: "$ 100000" },
    { id: 12, amount: "$ 200000" },
    { id: 13, amount: "$ 500000" },
    { id: 14, amount: "$ 750000" },
    { id: 15, amount: "$ 1000000" },
  ].reverse();
  useEffect(() => {
    active > 1 &&
      setEarned(moneyPyramid.find((money) => money.id === active - 1).amount);
  }, [moneyPyramid, active]);
  return (
    <div className="app">
      <div className="main">
        {active > 15 ? (
          <>
            <div className="result">You earned: {earned} Congratulations !</div>
          </>
        ) : (
          <>
            {stop ? (
              <>
                <div className="result">You earned: {earned}</div>
                <button onClick={() => window.location.reload()}>
                  Start Again
                </button>
              </>
            ) : (
              <>
                <div className="top">
                  <Timer setStop={setStop} active={active} />
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    active={active}
                    setActive={setActive}
                    setStop={setStop}
                  />
                </div>
              </>
            )}
          </>
        )}
      </div>
      <div className="pyramid">
        <ul className="money-list">
          {moneyPyramid.map((item) => (
            <li
              key={item.id}
              className={
                active === item.id
                  ? "money-list-item active"
                  : "money-list-item"
              }
            >
              <span className="number">{item.id}</span>
              <span className="amount">{item.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
