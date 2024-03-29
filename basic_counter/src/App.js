import { useState } from "react";
import "./App.css";

function App() {
    const [counter, setCounter] = useState(0);

    return (
        <div className="App">
            <>
                <button
                    onClick={() => {
                        setCounter((prevCount) => {
                            return prevCount - 1;
                        });
                    }}
                >
                    -
                </button>
                <h1>{counter}</h1>
                <button
                    onClick={() => {
                        setCounter((prevCount) => {
                            return prevCount + 1;
                        });
                    }}
                >
                    +
                </button>
            </>
        </div>
    );
}

export default App;
