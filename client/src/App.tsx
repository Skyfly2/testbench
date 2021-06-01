import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [url, updateURL] = useState('');
  const [port, updatePort] = useState('');
  const [path, updatePath] = useState('');

  const [urlClass, changeURLClass] = useState('url-box');
  const [portClass, changePortClass] = useState('url-box');
  const [pathClass, changePathClass] = useState('url-box');

  const changeURL = (e: any) => {
    e.preventDefault();
    updateURL(e?.target?.value);
  }

  const changePort = (e: any) => {
    e.preventDefault();
    updatePort(e?.target?.value);
  }

  const changePath = (e: any) => {
    e.preventDefault();
    updatePath(e?.target?.value);
  }


  return (
    <div className="content-wrapper">
      <div className="content">
        <div className="top">
          <div className="box">
            <label>URL</label>
            <br />
            <input className={urlClass} placeholder="Ex: http://localhost" onChange={changeURL} />
          </div>
          <div className="box">
            <label>Port</label>
            <br />
            <input className={portClass} placeholder="Ex: 3000" onChange={changePort} />
          </div>
          <div className="box">
            <label>Path</label>
            <br />
            <input className={pathClass} placeholder="Ex: foo/bar?test=123" onChange={changePath} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
