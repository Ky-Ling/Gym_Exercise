import React from 'react';
// import ReactDOM  from 'react-dom';
import App from "./App";
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
) 


// Choose exercise categories and specific muscle groups, browser more than 1000 exercise with practical
//   examples, pagination, exercise detail, pulling related videos from Youtube, display similar exercises,
  

// Folder & File structure
// Hooks
// How to create beautiful user interface --> material UI
// Fetch data from unlimited sources using Rapid API --> (1): exerciseDB API (2): Youtube Search and Download

