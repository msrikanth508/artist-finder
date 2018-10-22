export default (() => {
  const cache = window.localStorage;

  function Cache() {}

  Cache.prototype = {
    setItem: function(key, data) {
      cache.setItem(key, data);
      return true;
    },
    getItem: function(key) {
      return cache.getItem(key);
    },
    clearItem: function(key) {
      cache.removeItem(key);
    },
    has: function(key) {
      return cache.hasOwnProperty(key);
    },
    clearAll: function() {
      cache.clear();
    }
  };
  return new Cache();
})();
