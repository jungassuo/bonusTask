import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import UploadFiles from "./components/file.component";

function App() {
  return (

    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="btn-group mx-auto">
          <h2 className="text-white">CSV Uploader</h2>
        </div>
      </nav><br></br>
      <div className="container">
        <UploadFiles />
      </div></div>
  );
}

export default App;
