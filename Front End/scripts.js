<<<<<<< HEAD
=======
import axios from "axios";
>>>>>>> 6393270d88de30762c8406414c720c4241f7fefe
const uniSexBut = document.getElementById("unisex");

uniSexBut.addEventListener("click", getUnisex);

<<<<<<< HEAD
function getUnisex() {
  axios
    .get("http://localhost:9090/api/toilets")
    .then(response => console.log(response))
    .catch(console.log);
}
=======
const getUnisex = async () => {
  const response = await axios.get("http://localhost:9090/api/toilets");
  console.log(response);

  // return axios
  //   .get("http://localhost:9090/api/toilets")
  //   .then(response => console.log(response))
  //   .catch(console.log("error s"));
};
>>>>>>> 6393270d88de30762c8406414c720c4241f7fefe
