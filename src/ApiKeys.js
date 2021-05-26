
const { YoutubeDataAPI } = require("youtube-v3-api")
const API_KEY = 'AIzaSyCRqFOe1lGNltYuiupQWPkVwBtxYrk2rsg';

const api = new YoutubeDataAPI(API_KEY);

api.searchAll(API_KEY,"Node Js",25).then((data) => {
    console.log(data);
},(err) => {
    console.error(err);
})