import React, { FC, useEffect } from 'react';
import AppRouter from './components/AppRouter';
import Navbar from 'components/Navbar';
import { useDispatch } from 'react-redux';
import { Layout } from 'antd';
import { AuthActionCreators } from './store/reducers/auth/action-creators';
import { IUser } from './models/IUser';
import './App.scss';

const App: FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      dispatch(AuthActionCreators.setUser({ username: localStorage.getItem('username' || '') } as IUser));
      dispatch(AuthActionCreators.setAuth(true));
    }
  }, [dispatch])

  return (
    <div className="App">
      <Layout>
        <Navbar />
        <Layout.Content>
          <AppRouter />
        </Layout.Content>
      </Layout>
    </div>
  );
}

export default App;
