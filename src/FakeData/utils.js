const fakeRequest = (data, timeout = 5000) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, timeout);
    });
  };
  
  export { fakeRequest };