import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import "./index.css";
import App from "./App";
import data from './data/data';



ReactDOM.render(<Router><App data={data} /></Router>, document.getElementById("root"));
