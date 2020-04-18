import React, { Component } from 'react';
import Layout from './Layout'
import Search from './search/Search'
import Baike from './baike/Baike'
import University from './university/University'
import Lesson from './lesson/Lesson'
import Classify from './classify/Classify'

import Repice from './search/repice'
import Detail from './detail/Detail'

import Cart from './cart/Cart'

// import 

import VideoLesson from './video/VideoLesson'

import { Route, Switch, Redirect } from 'react-router-dom'
class BakeForcat extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route
            path='/home'
            component={Layout}
          >
          </Route>
          <Route
            path='/search'
            exact
            component={Search}
          ></Route>
          <Route
            path='/baike'
            component={Baike}
          ></Route>
          <Route
            path='/university'
            component={University}
          ></Route>
          <Route
            path='/lesson'
            component={Lesson}
          ></Route>
          <Route
            path='/classify'
            component={Classify}
          ></Route>
          <Route
            path='/detail'
            component={Detail}
          ></Route>
          <Route
            path='/lessonvideo'
            component={VideoLesson}
          ></Route>
          <Route
            path='/cart'
            component={Cart}
          ></Route>
          <Route path='/search/recipe' render={() => (
            <Repice></Repice>
          )}>
          </Route>
          <Redirect from='/' to='/home/learn'></Redirect>
          {/* <Redirect from='/home' to='/home/learn'></Redirect> */}
        </Switch>
      </>
    );
  }
}

export default BakeForcat;