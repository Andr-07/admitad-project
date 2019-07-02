import React from 'react';
import {connect} from 'react-redux';
import {add} from '../actions/actions'
import './main.css'

const Main = ({picture, add, date, arr}) => {

    return (
      <div className="ui two column centered grid">
        <div className="column centered">
        <div className="line">
        <img src={picture}></img>
        </div>
        <p></p>
        <div className="ui two column centered grid">
        <button
        onClick={add}
        className="ui violet button">Загрузить</button>
        </div>
      </div>
      </div>
    )
}

const mapStateToProps = (state) => {
    return {
      picture: state.onePicture.picture,
      date: state.onePicture.date,
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
      add: () =>  dispatch(add())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);