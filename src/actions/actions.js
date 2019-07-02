let counter = 0;
let moment = require("moment");

export const add = () => async dispatch => {
  const resp = await fetch(
    "https://api.giphy.com/v1/gifs/random?api_key=xgcnvYuqk4vP1WQQtWPz6F1A0B4WHHdA"
  );
  const json = await resp.json();
  console.log(json.data);
  let picture = json.data.fixed_height_downsampled_url;
  let title = json.data.title;
  let date = moment().format("LLL");
  let smallPic = json.data.fixed_width_downsampled_url;
  console.log(date);
  dispatch({
    type: "ADD",
    payload: {
      picture: picture,
      title: title,
      date: date,
      smallPic: smallPic
    }
  });
};

export const del = (title) => {
  return {
  type:'DEL',
  payload: {
    title: title
  }
}
  };    

