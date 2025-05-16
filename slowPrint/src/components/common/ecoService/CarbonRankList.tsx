import { useEffect, useState } from "react";
import { CarbonRankResponse } from "@/types/carbon";
import { Flex, Text } from "@flowwwkr/design-system-tailwind";
import { USER_ID } from "@/data/sessionKey";
import { getCarbonMileageRank } from "@/service/carbon/carbon.api";

const CarbonRankList = () => {
  const [ranks, setRanks] = useState<CarbonRankResponse[]>([]);
  const [myUserId, setMyUserId] = useState<string | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    setMyUserId(sessionStorage.getItem(USER_ID));
    const fetchRanks = async () => {
      try {
        const result = await getCarbonMileageRank(); // 배열 반환
        setRanks(result);
      } catch {
        setError("랭킹 정보를 불러올 수 없습니다.");
      }
    };
    fetchRanks();
  }, []);

  if (error) {
    return (
      <Text color="c-error-mid" fontSize="fs-1.5">
        {error}
      </Text>
    );
  }

  return (
    <Flex
      direction="flex-col"
      gap="g-1"
      padding="p-2"
      justifyContent="jc-start"
      height="h-full"
      width="w-full"
    >
      <Text fontSize="fs-2" fontWeight="fw-600" color="c-primary-sf-03">
        🏆 Saved Carbon Rank
      </Text>
      {ranks.map((user) => {
        const isMe = user.username === myUserId;

        return (
          <Flex
            key={user.username}
            justifyContent="jc-between"
            padding="p-1"
            color={isMe ? "c-[#e1f5e9]" : "c-transparent"}
            borderRadius="rad-0.5"
          >
            <Text
              fontWeight={isMe ? "fw-700" : "fw-500"}
              color="c-primary-sf-00"
            >
              {user.rank}. {user.username}
            </Text>
            <Text
              fontWeight={isMe ? "fw-700" : "fw-400"}
              color="c-primary-sf-00"
            >
              {user.totalMileage} km
            </Text>
          </Flex>
        );
      })}
    </Flex>
  );
};

export default CarbonRankList;
