import { useEffect, useState } from "react";
import { LaborMatchPostDetailResponseType } from "@/types/local";
import {
  Flex,
  Text,
  Image,
  ThemeButton,
} from "@flowwwkr/design-system-tailwind";
import { getLaborMatchDetail } from "@/service/local/laborMatch.api";

interface Props {
  recruitmentId: string;
  onClose: () => void;
}

const LaborMatchDetailModal = ({ recruitmentId, onClose }: Props) => {
  const [data, setData] = useState<LaborMatchPostDetailResponseType | null>(
    null
  );

  useEffect(() => {
    const fetchDetail = async () => {
      const result = await getLaborMatchDetail({ recruitmentId });
      setData(result);
    };
    fetchDetail();
  }, [recruitmentId]);

  if (!data) return <Text>Loading...</Text>;

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
        color="c-primary-sf-00"
        direction="flex-col"
        borderRadius="rad-1"
        gap="g-1"
      >
        <Text fontSize="fs-2" fontWeight="fw-700">
          {data.title}
        </Text>
        <Text>
          {data.nation} / {data.province} / {data.city}
        </Text>
        <Text>{data.contents}</Text>
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
          <ThemeButton onClick={onClose} theme="outlined" size="sm">
            Close
          </ThemeButton>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default LaborMatchDetailModal;
