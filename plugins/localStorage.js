import createPersistedState from 'vuex-persistedstate';
import * as Cookies from "js-cookie";

/*
* We use js-cookie package to store data in Vuex
* */
let cookieStorage = {
  getItem: function(key) {
    return Cookies.getJSON(key);
  },
  setItem: function(key, value) {
    return Cookies.set(key, value, {expires: 1, secure: false});
  },
  removeItem: function(key) {
    return Cookies.remove(key);
  },
};

export default (context) => {
  /*
  * connect cookie settings with Vuex
  * */
  createPersistedState({
    storage: cookieStorage,
    getState: cookieStorage.getItem,
    setState: cookieStorage.setItem,
    removeState: cookieStorage.removeItem,
  })(context.store);
};
