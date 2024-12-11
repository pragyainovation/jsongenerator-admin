const LocalStorage = {
  get: (key) => {
    const value = localStorage.getItem(key);
    return value !== null ? value : undefined; // Return undefined if not found
  },

  set: (key, data) => {
    localStorage.setItem(key, data);
  },

  getJson: (key) => {
    const value = localStorage.getItem(key);
    try {
      return value !== null ? JSON.parse(value) : null; // Return null if not found
    } catch (error) {
      console.error(
        `Error parsing JSON from localStorage key "${key}":`,
        error
      );
      return null; // Return null on error
    }
  },

  setJson: (key, data) => {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error(
        `Error stringifying data for localStorage key "${key}":`,
        error
      );
    }
  },

  remove: (key) => {
    localStorage.removeItem(key);
  },
};

export default LocalStorage;
