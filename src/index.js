import React from 'react';
import ReactDOM from 'react-dom';
import { App } from '../src/app/App';
import { store } from '../src/app/store';

// Pass state and dispatch props to the <App /> component.
const render = () => {
  ReactDOM.render(
    <App
      state={store.getState()}
      dispatch={store.dispatch}

    />,
    document.getElementById('root')
  )
};
render();

// Subscribe render to the store.
store.subscribe(render);