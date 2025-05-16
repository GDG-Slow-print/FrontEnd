import { PromotionMatchPostDetailResponseType } from "./../../types/local.d";
import {
  PromotionMatchPostDetailPayloadType,
  PromotionMatchPostListResponseType,
  PromotionMatchPostPayloadType,
  PromotionMatchPostResponseType,
} from "@/types/local";
import axios from "axios";

const promotionApi = axios.create({
  baseURL: "http://54.180.102.231:8080",
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
  },
});
// 홍보자 <-> 숙소 매칭 게시글 등록
export const postPromotionMatch = async (
  payload: PromotionMatchPostPayloadType
): Promise<PromotionMatchPostResponseType> => {
  const response = await promotionApi.post("/matching/create", payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};
// 매칭 게시글 조회
export const getPromotionMatchList = async (): Promise<
  PromotionMatchPostListResponseType[]
> => {
  const response = await promotionApi.get("/matching/list", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

// 매칭 게시글 상세 조회
export const getPromotionMatchDetail = async (
  payload: PromotionMatchPostDetailPayloadType
): Promise<PromotionMatchPostDetailResponseType> => {
  const response = await promotionApi.get(
    `/matching/${payload.recruitmentId}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};
