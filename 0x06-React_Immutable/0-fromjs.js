const { fromJS } = require('immutable');

// Expect and convert row JS objects to immutable Map
export default function getImmutableObject (object) {
  return fromJS(object);
}
