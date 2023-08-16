const { Map } = require('immutable');

// Accessing nested elements
export default function accessImmutableObject (object, array) {
  const nested = Map(object);
  return nested.getIn(array);
}
