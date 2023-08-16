#!/usr/bin/node

const { fromJS } = require('immutable');

// Expect and convert row JS objects to immutable Map
export function getImmutableObject(object) {
  return fromJS(object);
}
