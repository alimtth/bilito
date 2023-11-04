import axios from "axios";

const createRequest = (baseUrl) => {
  const instance = axios.create({
    baseURL: baseUrl,
    timeout: 15000,
  });

  instance.interceptors.request.use(function (config) {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    return config;
  });

  return instance;
};

const apiClient = createRequest("http://demo2578450.mockable.io");

export { apiClient };
