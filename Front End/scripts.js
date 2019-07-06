import axios from "axios";
const uniSexBut = document.getElementById("unisex");

uniSexBut.addEventListener("onclick", getUnisex);

const getUnisex = async () => {
  const response = await axios.get("http://localhost:9090/api/toilets");
  console.log(response);

  // return axios
  //   .get("http://localhost:9090/api/toilets")
  //   .then(response => console.log(response))
  //   .catch(console.log("error s"));
};
