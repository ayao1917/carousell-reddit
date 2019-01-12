/*
* The deep clone function used by clone object
* which is the fastest way to do deep clone
* http://jsben.ch/bWfk9
* */
function clone(object) {
  // we use JSON.stringify change a object to json string and get new object by change it back
  return JSON.parse(JSON.stringify(object));
}

export default {
  clone
}
