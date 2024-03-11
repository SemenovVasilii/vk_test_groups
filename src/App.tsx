import React from 'react';
import './App.scss';
import { Header } from './layout/header/Header';
import { Main } from './layout/main/Main';
import {
  Separator
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Separator />
      <Main />
    </div>
  );
}

export default App;
