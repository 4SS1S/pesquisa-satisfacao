import React from "react";
import "./index.css";
import AddToHomescreen from 'react-add-to-homescreen';
import { Provider } from 'react-redux';

import { store } from './store';
import Loading from './components/loading';

import Home from './pages/home';
import Login from './pages/login';



function App() {

  function handleAddToHomescreenClick(){
    alert(`
      1. Open Share menu
      2. Tap on "Add to Home Screen" button`);
  };

  return (
    <Provider store={store}>
      <Loading />
      {localStorage.getItem('unidade') !== null ? ( <Home /> ) : (<Login />)}
      <AddToHomescreen  onAddToHomescreenClick={handleAddToHomescreenClick}/>
    </Provider>
  );
}

export default App;
