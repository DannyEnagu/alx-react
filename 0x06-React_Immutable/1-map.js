#!/usr/bin/node

const { Map } = require('immutable');

// Expect and convert row JS objects to immutable Map
export default function getImmutableObject(object) {
  const map = Map(object);
  return map;
}
