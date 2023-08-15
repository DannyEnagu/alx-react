const { fromJS } = require('immutable');

// Expect and convert row JS objects to immutable Map
function getImmutableObject (obj) {
  return fromJS(obj);
}

export default getImmutableObject;
