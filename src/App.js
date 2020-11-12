import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';

import Routes from './routes'

import GlobalStyled from './styles'

function App() {
  return (
    <>
      <Router>
        <Routes />
      </Router>
      <GlobalStyled />
    </>
  );
}

export default App;
