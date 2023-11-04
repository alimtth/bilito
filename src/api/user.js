import { apiClient } from "./request";

const apiLoginUser = (data) => {
  return apiClient.post("/auth/login", data);
};

const apiRegisterUser = (data) => {
  return apiClient.post("/auth/register", data);
};

const apiGetCurrentUser = () => {
  return apiClient.get("/auth/me");
};

export { apiLoginUser, apiRegisterUser, apiGetCurrentUser };
