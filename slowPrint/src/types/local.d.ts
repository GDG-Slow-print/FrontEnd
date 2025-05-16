// labor

// 일손 모집글 생성
interface PhotoInfo {
  url: string;
  isMain: boolean;
  odr: number;
}

export interface LaborMatchPostPayloadType {
  title: string;
  contents: string;
  nation: string;
  province: string;
  city: string;
  photos: PhotoInfo[];
}

export interface LaborMatchPostResponseType {
  recruitmentId: string;
  message: string;
}

// 모집글 조회
export interface LaborMatchPostListResponseType {
  recruitmentId: string;
  userEmail: string;
  title: string;
  contents: string;
  nation: string;
  province: string;
  city: string;
  mainPhoto: string;
  createdAt: string;
  updatedAt: string;
}

// 모집글 상세조회
export interface LaborMatchPostDetailPayloadType {
  recruitmentId: string;
}
export interface LaborMatchPostDetailResponseType {
  userEmail: string;
  title: string;
  contents: string;
  nation: string;
  province: string;
  city: string;
  photos: PhotoInfo[];
  createdAt: string;
  updatedAt: string;
}

// promotion

// 홍보자 <-> 숙소 매칭 게시글 등록
export interface PromotionMatchPostPayloadType {
  title: string;
  contents: string;
  nation: string;
  photos: PhotoInfo[];
}

export interface PromotionMatchPostResponseType {
  matchingId: string;
  message: string;
}

// 매칭 게시글 조회
export interface PromotionMatchPostListResponseType {
  matchId: string;
  userEmail: string;
  title: string;
  contents: string;
  mainPhoto: string;
  createdAt: string;
  updatedAt: string;
}

// 매칭 게시글 상세 조회
export interface PromotionMatchPostDetailPayloadType {
  recruitmentId: string;
}

export interface PromotionMatchPostDetailResponseType {
  userEmail: string;
  title: string;
  contents: string;
  nation: string;
  province: string;
  city: string;
  photos: PhotoInfo[];
  createdAt: string;
  updatedAt: string;
}
