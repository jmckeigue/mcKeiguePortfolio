import { useEffect, useState } from "react";
import Timer from "./js/Timer.jsx";


const App = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetch("http://localhost:300/")
        .then(r => r.json())
        .then(json => setCount(json.a));
    }, []);

    return (
        <>
            <div>
                <Timer/>
            </div>
        </>
    );
};

export default App