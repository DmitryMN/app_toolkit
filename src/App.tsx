import React, { useEffect } from 'react';
import './App.css';
import PostContainer from './components/PostContainer';
import { useAppSelector } from './hooks/redux';
import { useAppDispatch } from './hooks/redux';
import { fetchUsers } from './store/reducers/ActionCreators';

function App() {
  const {users, isLoading, error} = useAppSelector(state => state.userReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="App">
      {/* <div>
        {isLoading && <h1>Идет загрузка...</h1>}
        {error && <div>{error}</div>}
        {users && users.map(user => <div key={user.id}>{user.name}</div>)}
      </div> */}
      <PostContainer />
    </div>
  );
}

export default App;
