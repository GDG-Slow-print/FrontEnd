import CarbonPrint from "@/components/common/ecoService/CarbonPrint";
import ChatBot from "@/components/common/ChatBot";
import PromotionMatchBoard from "@/components/common/revitalizationService/PromotionMatchModal";
import SideHeader from "@/components/hedaer/SideHeader";
import { Flex } from "@flowwwkr/design-system-tailwind";

const LocalPromotionMatch = () => {
  return (
    <Flex
      width="w-full"
      grow="grow-1"
      wrap="flex-nowrap"
      justifyContent="jc-start"
      position="relative"
    >
      <SideHeader selectedTab="promotion" />
      <Flex
        height="h-full"
        grow="grow-1"
        justifyContent="jc-center"
        alignItems="ai-center"
        gap="g-1"
        padding="p-1"
      >
        <PromotionMatchBoard />
      </Flex>
      <ChatBot />
      <CarbonPrint />
    </Flex>
  );
};

export default LocalPromotionMatch;
