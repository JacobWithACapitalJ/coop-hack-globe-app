const uniSexBut = document.getElementById("unisex");

uniSexBut.addEventListener("onclick", getUnisex);

function getUnisex() {
  axios
    .get("http://localhost:9090/api/toilets")
    .then(response => console.log(response))
    .catch(console.log);
};



function getAllData() {
  if (!sessionStorage.getItem('toilets')) {
  axios
    .get("http://localhost:9090/api/toilets")
    .then(({data: {toilets}}) => {
      sessionStorage.setItem('toilets', JSON.stringify(toilets));
    })
  }
}

getAllData()