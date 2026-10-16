import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from "../redux/homeSlice";

const Home = () => {
  const incomingState = useSelector((state) => state.counter )
  
  const {test, value} = incomingState;
  
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        gap: "12px",
      }}
    >
      {value}
      <Increment />
      <Decrement />
    </div>
  );
};

export default Home;

const Increment = () => {
  const dispatch = useDispatch()
  return <button onClick={() => dispatch(increment())}>Increment</button>;
};

const Decrement = () => {
  const dispatch = useDispatch()
  return <button  onClick={() => dispatch(decrement())}>Decrement</button>;
};
