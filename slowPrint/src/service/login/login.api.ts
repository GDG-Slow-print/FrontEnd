import {
  LoginPayloadType,
  LoginResponseType,
  LogoutResponseType,
  SignUpPayloadType,
} from "@/types/login";
import axios from "axios";

const loginApi = axios.create({
  baseURL: "http://54.180.102.231:8080",
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
  },
});

// 회원가입
export const postSignUpInfo = async (
  payload: SignUpPayloadType
): Promise<SignUpPayloadType> => {
  const response = await loginApi.post("/user/signup", payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.data;
};

// 로그인
export const postLoginInfo = async (
  payload: LoginPayloadType
): Promise<LoginResponseType> => {
  const response = await loginApi.post("/user/login", payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.data;
};

// 로그아웃
export const deleteLogout = async (): Promise<LogoutResponseType> => {
  const response = await loginApi.delete("/user/logout", {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.data;
};
