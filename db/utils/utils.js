const _pick = require("lodash/pick");

exports.toiletBrush = toilets => {
  const cleansedData = [];
  const toPick = [
    "latitude",
    "longitude",
    "city",
    "country",
    "changing_table",
    "unisex",
    "accessible"
  ];
  toilets.forEach(toilet => {
    cleansedData.push(_pick(toilet, toPick));
  });
  return cleansedData;
};

//function to take large list of toilet data and group by area - to be discussed
exports.consolidateToilets = toilets => {
  const radius = 0.01;
};
