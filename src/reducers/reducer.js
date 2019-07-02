const initialState = {
  onePicture: "",
  arrPictures: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "ADD": {
      return {
        onePicture: action.payload,
        arrPictures: [...state.arrPictures, action.payload]
      };
    }
    case "DEL": {
      let oldArr = state.arrPictures;
      return {
        arrPictures: oldArr.filter(item => item.title !== action.payload.title),
        onePicture: action.payload
      };
    }
    default:
      return state;
  }
}
