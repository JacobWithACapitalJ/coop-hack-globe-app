const uniSexBut = document.getElementById("unisex");

uniSexBut.addEventListener("onclick", getUnisex);

function getUnisex() {
  axios
    .get(window.location.host + "/api/toilets")
    .then(response => console.log(response))
    .catch(console.log);
};



function getAllData() {

  if (!sessionStorage.getItem('toilets')) {
  axios
    console.log(window.location.host + "/api/toilets")
    .get(window.location.host + "/api/toilets")
    .then(({data: {toilets}}) => {
      sessionStorage.setItem('toilets', JSON.stringify(toilets));
    })
  }
}

getAllData()