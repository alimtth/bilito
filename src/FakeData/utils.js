const fakeRequest = (data, timeout = 2000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data)
    }, timeout)
  })
}

export {fakeRequest}
