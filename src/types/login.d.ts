import { SignUpPayloadType } from "./login.d";
// 회원가입
export interface SignUpPayloadType {
  email: string;
  password1: string;
  password2: string;
}

export interface SignUpResponseType {
  message: string;
}

// 로그인
export interface LoginPayloadType {
  email: string;
  password: string;
}

export interface LoginResponseType {
  token: string;
}

// 로그아웃
export interface LogoutResponseType {
  message: string;
}
