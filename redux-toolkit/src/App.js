import "./App.css";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "./features/users/usersSlice";

export default function App() {

  const dispatch = useDispatch();
  const { users } = useSelector(state => state.users)

  useEffect(() => {
    dispatch(getUsers())
  }, [])

  return (
    <div className="App">
      <h1>리덕스 툴킷 시작!</h1>
    </div>
  );
}
