import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import TitleBar from './components/TitleBar'
import Profile from './pages/Profile'
import Coding from './pages/Coding'

import { selectLang } from './redux/actions/language'

const AppRoute = (props) => {
  let { selectLang } = props

  useEffect(() => { selectLang() }, [selectLang])

  return <Router>
    <div id='main-container' className='w-100 h-100'>
      <TitleBar />
      <Switch>
        <Route exact path="/" component={Profile} />
        <Route exact path="/coding" component={Coding} />
        <Redirect to="/" />
      </Switch>
    </div>
  </Router>
}

const mapStateToProps = (state) => {
  return {
    store_language: state.language
  }
}

const mapDipatchToProps = (dispatch) => {
  return bindActionCreators({
    selectLang
  }, dispatch)
}

export default connect(mapStateToProps, mapDipatchToProps)(AppRoute);