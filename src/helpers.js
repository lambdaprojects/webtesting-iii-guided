const uuid = require("uuid");

module.exports = {
  makePerson
};

function makePerson(firstName, lastName) {
  return {
    id: uuid(),
    name: `${firstName} ${lastName}`
  };
}
