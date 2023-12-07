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

  if (status === 'loading') {
    return (
      <div>
        <h2 className="error-message">Loading...</h2>
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <div>
        <h2 className="error-message">Error in loading...</h2>
      </div>
    );
  }

  return (
    <div>
      <h1 className="greeting-heading">Random Greeting</h1>
      <h2 className="greeting-message">{greeting}</h2>
    </div>
  );
};

export default Greeting;
