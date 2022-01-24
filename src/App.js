import { useRef, useState } from "react";
import ApexChart from "./comps/ApexChart";
import Avg30 from "./comps/Avg30";
import Avg5 from "./comps/Avg5";
import Avg60 from "./comps/Avg60";
import CurrentValue from "./comps/CurrentValue";
import Validation from "./comps/Validation";
import classes from "./App.module.css";

let bitcoinArr = [];

function App() {
  const currRef = useRef();
  const [bitcoin, setBitcoin] = useState([]);
  const [input, setInput] = useState("");
  const [hasInput, setHasInput] = useState(false);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const curr = currRef.current.value;
    if (curr === "EUR" || curr === "USD") {
      fetch("https://api.coinbase.com/v2/prices/spot?currency=" + curr)
        .then((response) => response.json())
        .then((result) => {
          bitcoinArr.push(result.data.amount);
          setBitcoin(result.data);
          setInput(currRef.current.value);
        })
        .catch((error) => console.log("error", error));

      setHasInput(true);
    } else {
      setHasInput(false);
    }
  };

  return (
    <div>
      <section className={classes.section}>
        <form onSubmit={formSubmitHandler}>
          <label htmlFor="currency">Please Type Currency</label>
          <input id="currency" name="currency" ref={currRef} />
          <button>Get Value</button>
        </form>
      </section>
      <Validation />
      <section className={classes.section}>
        <Avg5 values={bitcoinArr} />
        <Avg30 values={bitcoinArr} />
        <Avg60 values={bitcoinArr} />
      </section>
      <section>
        {hasInput && <CurrentValue value={bitcoin.amount} curr={input} />}
      </section>
      <section>
        <ApexChart values={bitcoinArr} curr={input} />
      </section>
    </div>
  );
}

export default App;
