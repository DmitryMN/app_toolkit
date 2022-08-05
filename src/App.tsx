import React from 'react';
import './App.css';
import { useAppSelector } from './hooks/redux';
import { useAppDispatch } from './hooks/redux';
import { userSlice } from './store/reducers/UserSlice';

function App() {
  const count = useAppSelector(state => state.userReducer.count);
  const dispatch = useAppDispatch();

  return (
    <div className="App">
      <div>count {count}</div>
      <button>+</button>
    </div>
  );
}

export default App;
