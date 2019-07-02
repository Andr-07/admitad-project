let counter = 0;

export const add = ()=> async dispatch => {
    const resp =  await fetch("https://api.giphy.com/v1/gifs/random?api_key=xgcnvYuqk4vP1WQQtWPz6F1A0B4WHHdA")
    const json =  await resp.json();
console.log(json.data.image_original_url);
let picture = json.data.image_original_url
dispatch({type:'ADD',
payload: {
  id: ++counter,
  picture: picture}})
}

