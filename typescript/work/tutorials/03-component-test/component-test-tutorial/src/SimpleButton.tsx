import { useState } from "react";
import './App.css';

export const SimpleButton: () => JSX.Element = () => {
    const [state, setState] = useState(false);
    const handleClick = () => {
        setState((prevState) => !prevState);
    };
    return <button className="SimpleButton" onClick={handleClick}>{state ? "ON" : "OFF"}</button>;
};