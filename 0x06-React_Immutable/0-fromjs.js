#!/usr/bin/node

const { fromJS } = require('immutable');

// Expect and convert row JS objects to immutable Map
export default function getImmutableObject(object) {
  const map = fromJS(object);
  return map;
}
