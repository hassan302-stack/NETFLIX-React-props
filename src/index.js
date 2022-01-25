import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import sdata from './sdata'
import './index.css'
ReactDOM.render(
  <>
    <div className="main">
      {sdata.map((val) => {
        return (
          <App img={val.img} link={val.link} category={val.category} title={val.title} />

        )
      })}
    </div>
  </>
  ,
  document.getElementById('root')
);


