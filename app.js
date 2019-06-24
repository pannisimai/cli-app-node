const axios = require("axios");

const area = process.argv[2];
const location = process.argv[3];
const url = `http://worldtimeapi.org/api/timezone/${area}/${location}`;

const help =
  "You need to write two things here: city and area like this: 'Europe London' , otherwise you'll get an error";

const fetch = () =>
  axios.get(url).then(response => console.log(response.data.utc_datetime));

console.log(`${process.argv.includes("--help") ? console.log(help) : fetch()}`);
