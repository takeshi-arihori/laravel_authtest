import React, { useEffect } from "react";

const Main = () => {
    useEffect(() => {
        console.log("Main Page mounted");
    }, []);

    return <h1>Main to Inertia.js</h1>

};

export default Main;