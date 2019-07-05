const _pick = require("lodash/pick");

const cleanseToiletData = toilets => {
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
