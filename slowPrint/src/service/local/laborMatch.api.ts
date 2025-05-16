import {
  LaborMatchPostDetailPayloadType,
  LaborMatchPostDetailResponseType,
  LaborMatchPostListResponseType,
  LaborMatchPostPayloadType,
  LaborMatchPostResponseType,
} from "@/types/local";
import axios from "axios";

const laborApi = axios.create({
  baseURL: "http://54.180.102.231:8080",
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
  },
});
// 일손 모집글 생성
export const postLaborMatch = async (
  payload: LaborMatchPostPayloadType
): Promise<LaborMatchPostResponseType> => {
  const response = await laborApi.post("/recruitment/create", payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

// 모집글 조회
export const getLaborMatchList = async (): Promise<
  LaborMatchPostListResponseType[]
> => {
  const response = await laborApi.get("/recruitment/list", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};
// 모집글 상세조회
export const getLaborMatchDetail = async (
  payload: LaborMatchPostDetailPayloadType
): Promise<LaborMatchPostDetailResponseType> => {
  const response = await laborApi.get(`/recruitment/${payload.recruitmentId}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.data;
};
