import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTripDuration } from './IP7slice';

const IP7 = () => {
  const tripDuration = useSelector((state) => state.tripDuration.value);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Trip Duration: {tripDuration} days</p>
      <button onClick={() => dispatch(setTripDuration(tripDuration + 1))}>
        Increase Duration
      </button>
    </div>
  );
};

export default IP7;
