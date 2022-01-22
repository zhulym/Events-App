import React, { FC } from 'react';
import './App.scss';
import AppRouter from './components/AppRouter';

const App: FC = () => {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
