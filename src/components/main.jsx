import React from 'react';
import {connect} from 'react-redux';
import {add} from '../actions/actions'

const Main = ({picture, add, id}) => {
    return (
        <div className="jumbotron">
        <img src={picture}></img>
        <h1>{id}</h1>
        <button
        onClick={add}
        className="btn btn-primary btn-lg">Загрузить</button>
      </div>
    )
}

const mapStateToProps = (state) => {
    return {
      picture: state.arrPictures.picture,
      id: state.arrPictures.id
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
      add: () =>  dispatch(add())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);