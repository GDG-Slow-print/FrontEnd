// 탄소 마일리지 지급
export interface GettingCarbonMileagePayloadType {
  email: string;
  transportation: string;
  distance: number;
}

export interface GettingCarbonMileageResponseType {
  savedCarbon: number;
  earnedMileage: number;
}

// 탄소 절감량 랭킹
export interface CarbonRankResponse {
  rank: number;
  username: string;
  totalMileage: string;
}
