import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTemperature, destroy } from '../store/actions/actions';
export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    getTemperature(dispatch);
  });
  useEffect(() => {
    destroy(dispatch);
  }, []);
  const temperatureStore = useSelector(state => state.temperatureReducer);

  return (
    <div style={{ textAlign: 'right' }}>
      {temperatureStore.temperror ? (
        <p>Please try after sometime </p>
      ) : temperatureStore.isFetching ? (
        <p>Please wait </p>
      ) : (
        <p>Temperature : {temperatureStore.temperature}</p>
      )}
    </div>
  );
}
