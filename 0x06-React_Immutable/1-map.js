#!/usr/bin/node

const { Map } = require('immutable');

// Expect and convert row JS objects to immutable Map
export function getImmutableObject(object) {
  return Map(object);
}
