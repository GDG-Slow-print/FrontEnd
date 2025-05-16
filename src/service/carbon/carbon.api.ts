import {
  CarbonRankResponse,
  GettingCarbonMileagePayloadType,
  GettingCarbonMileageResponseType,
} from "@/types/carbon";
import axios from "axios";

const carbonApi = axios.create({
  baseURL: "http://54.180.102.231:8080",
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
  },
});

// 탄소 마일리지 지급
export const postGettingCarbonMileage = async (
  payload: GettingCarbonMileagePayloadType
): Promise<GettingCarbonMileageResponseType> => {
  const response = await carbonApi.post("/carbon/rank", payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.data;
};

// 탄소절감량 랭킹
export const getCarbonMileageRank = async (): Promise<CarbonRankResponse[]> => {
  const response = await carbonApi.get("/carbon/rank", {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.data;
};
