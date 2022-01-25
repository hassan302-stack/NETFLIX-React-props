import React, { useState } from 'react';
import './index.css'
import sdata from './sdata'
const App = (props) => {
  const [state, setstate] = useState(sdata)
  return (
    <>

      {


        <div className="card-container">
          <div className="card">
            <img src={props.img} alt="Not found" />
            <div className="card-info">
              <h3 className="title">{props.title}</h3>
              <span className="category">{props.category}</span>
              <a href={props.link}>
                <button>Watch Now</button>
              </a>
            </div>
          </div>
        </div>


      }


    </>
  );
}

export default App;
