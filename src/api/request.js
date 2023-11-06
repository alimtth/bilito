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

const apiClient = createRequest(import.meta.env.VITE_API_BASE_URL);

export { apiClient };
