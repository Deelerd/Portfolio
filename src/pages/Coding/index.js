import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import WheelGame from './wheelGame'

const Coding = (props) => {

  return <div className='container pt-3'>
    <WheelGame {...props} />
  </div>
}

const mapStateToProps = (state) => {
  return {
    store_language: state.language
  }
}

const mapDipatchToProps = (dispatch) => {
  return bindActionCreators({
  }, dispatch)
}

export default connect(mapStateToProps, mapDipatchToProps)(Coding);