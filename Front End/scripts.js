const uniSexBut = document.getElementById("unisex");
const accessibleBut = document.getElementById("accessible");
const changingBut = document.getElementById("changing");

uniSexBut.addEventListener("click", getUnisex);
accessibleBut.addEventListener("click", getAccessible);
changingBut = addEventListener("click", getChanging);

function getUnisex() {
  axios
    .get("https://thunderbox.herokuapp.com/api/toilets")
    .then(response => console.log(response))
    .catch(console.log);
}

function getAccessible() {
  axios
    .get("https://thunderbox.herokuapp.com/api/toilets")
    .then(response => console.log(response))
    .catch(console.log);
}

function getChanging() {
  axios
    .get("https://thunderbox.herokuapp.com/api/toilets")
    .then(response => console.log(response))
    .catch(console.log);
}
