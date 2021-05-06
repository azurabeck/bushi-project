import React from 'react';
import Navbar from './comp_ui/global/navbar'
import { Footer } from './comp_ui/global/footer'

import Home from './pages/home'

function App() {
  return (
    <div>
        <Navbar />
        <Home />
        <Footer />
    </div>
  );
}

export default App;
