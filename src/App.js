// src/App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Slider } from 'antd';
import { setLengthOfStay, selectLengthOfStay } from './IP7slice';
import './App.css';

function App() {
  const lengthOfStay = useSelector(selectLengthOfStay);
  const dispatch = useDispatch();

  const onChange = (value) => {
    dispatch(setLengthOfStay(value));
  };

  return (
    <div className="App" style={{ margin: 30 }}>
      <p className="title"> Length of Stay: {lengthOfStay} Days</p> 

      <Slider 
        min={1}
        max={30}
        onChange={onChange}
        value={typeof lengthOfStay === 'number' ? lengthOfStay : 0}
        marks={{
          1: '1 Day',
          30: '30 Days'
        }}
      />
    </div>
  );
}

export default App;
