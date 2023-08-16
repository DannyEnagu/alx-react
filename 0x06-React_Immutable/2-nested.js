#!/usr/bin/node

const { fromJS } = require('immutable');

// Accessing nested elements
export default function accessImmutableObject(object, array) {
  const nested = fromJS(object);
  return nested.getIn(array);
}
