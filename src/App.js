import React from 'react';
import 'assets/styles/reset.css'
import { BrowserRouter as Router } from 'react-router-dom'


import BakeForCat  from './page/BakeForcat'
function App() {
  return (
    <Router>
      <BakeForCat></BakeForCat>
    </Router>
  );
} 

export default App;
