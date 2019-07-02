const initialState = {
    arrPictures: '',
  } 

  export default function(state = initialState, action) {
    switch (action.type) {
      case "ADD": {
        return {
          arrPictures: action.payload,
        };
      }
      default:
      return state;
    }
}