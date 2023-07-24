import React from "react";
import  ReactDOM  from "react-dom";
import "./stylesheet/style.css"
import App from "./component/App";

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById("root")
)

export default App;