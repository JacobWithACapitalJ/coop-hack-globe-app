const uniSexBut = document.getElementById("unisex");
const apiUrl = (window.location.hostname.includes('heroku')) ? "https://thunderbox.herokuapp.com/api/toilets" : 'localhost:9090/api/toilets';

uniSexBut.addEventListener("onclick", getUnisex);

function getUnisex() {
  axios
    .get(apiUrl)
    .then(response => console.log(response))
    .catch(console.log);
};



function getAllData() {

  if (!sessionStorage.getItem('toilets')) {
  axios
    .get(apiUrl)
    .then(({data: {toilets}}) => {
      sessionStorage.setItem('toilets', JSON.stringify(toilets));
    })
    .catch(console.log)
  }
}

getAllData()