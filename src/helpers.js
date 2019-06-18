const uuid = require("uuid");

module.exports = {
  makePerson,
  forEvenOnly
};

function makePerson(firstName, lastName) {
  return {
    id: uuid(),
    name: `${firstName} ${lastName}`
  };
}

function forEvenOnly(number, callback) {
  if (number % 2 === 0) {
    callback(number);
  }
}
