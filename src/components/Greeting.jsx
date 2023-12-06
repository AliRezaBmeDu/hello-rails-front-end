import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createGreetings } from '../store/greetingsSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greetings.value);
  const status = useSelector((state) => state.greetings.status);

  useEffect(() => {
    dispatch(createGreetings());
  }, [dispatch]);

  return (
    <div>
      <h1>Random Greeting:</h1>
      {status === 'loading' ? (
        <p>Loading...</p>
      ) : status === 'failed' ? (
        <p className="error-message">Error loading greeting</p>
      ) : (
        <p className='greeting-message'>{greeting}</p>
      )}
    </div>
  );
};

export default Greeting;
