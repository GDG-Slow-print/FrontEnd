import { useEffect, useState } from "react";
import { getPromotionMatchDetail } from "@/service/local/promotionMatch.api";
import { PromotionMatchPostDetailResponseType } from "@/types/local";
import {
  Flex,
  Text,
  Image,
  ThemeButton,
} from "@flowwwkr/design-system-tailwind";

interface Props {
  matchId: string;
  onClose: () => void;
}

const PromotionMatchDetailModal = ({ matchId, onClose }: Props) => {
  const [data, setData] = useState<PromotionMatchPostDetailResponseType | null>(
    null
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getPromotionMatchDetail({
          recruitmentId: matchId,
        });
        setData(result);
      } catch (err) {
        console.error("Failed to fetch detail:", err);
      }
    };
    fetchData();
  }, [matchId]);

  if (!data) {
    return (
      <Flex justifyContent="jc-center" alignItems="ai-center" height="h-full">
        <Text>Loading...</Text>
      </Flex>
    );
  }

  return (
    <Flex
      position="fixed"
      top="t-0"
      left="l-0"
      width="w-full"
      height="h-full"
      shadow="shd-gray"
      alignItems="ai-center"
      justifyContent="jc-center"
      zIndex="z-1001"
    >
      <Flex
        width="w-[600px]"
        padding="p-2"
        color="c-primary-sf"
        direction="flex-col"
        borderRadius="rad-1"
        gap="g-1"
      >
        <Text fontSize="fs-2" fontWeight="fw-700">
          {data.title}
        </Text>
        <Text fontSize="fs-1.25">{data.contents}</Text>
        <Text fontSize="fs-1" color="c-primary-sf-03">
          {data.nation} {data.province} {data.city}
        </Text>

        {data.photos.map((photo) => (
          <Image
            key={photo.url}
            src={photo.url}
            alt="photo"
            width="w-full"
            height="h-[180px]"
            objectFit="obj-cover"
            borderRadius="rad-0.75"
          />
        ))}

        <Flex justifyContent="jc-end">
          <ThemeButton size="sm" theme="filled" onClick={onClose}>
            Close
          </ThemeButton>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PromotionMatchDetailModal;
