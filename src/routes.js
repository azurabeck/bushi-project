import React from 'react';
import { Switch, withRouter, Route } from "react-router-dom"
import Navbar from './comp_ui/global/navbar'
import { Footer } from './comp_ui/global/footer'

import Home from './pages/home'
import MyPage from './pages/myPage'
import Information from './pages/information'
import Settings from './pages/settings'
import Top10 from './pages/top10'



function App() {
  return (
    <div className='app'>
        <Navbar />
        <Switch>

            <Route exact path='/' component={Home}></Route>
            <Route exact path='/minha-lista' component={MyPage}></Route>
            <Route exact path='/informacoes' component={Information}></Route>
            <Route exact path='/configuracoes' component={Settings}></Route>
            <Route exact path='/top10' component={Top10}></Route>

        </Switch>
        <Footer />
    </div>
  );
}

export default withRouter((App));
