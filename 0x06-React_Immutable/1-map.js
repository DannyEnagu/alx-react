const { Map } = require('immutable');

// Expect and convert row JS objects to immutable Map
function getImmutableObject (obj) {
  return Map(obj);
}

export default getImmutableObject;
