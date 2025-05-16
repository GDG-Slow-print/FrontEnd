import CarbonPrint from "@/components/common/ecoService/CarbonPrint";
import CarbonRankList from "@/components/common/ecoService/CarbonRankList";
import ChatBot from "@/components/common/ChatBot";
import SideHeader from "@/components/hedaer/SideHeader";
import { Flex } from "@flowwwkr/design-system-tailwind";

const GreenMileage = () => {
  return (
    <Flex
      width="w-full"
      grow="grow-1"
      wrap="flex-nowrap"
      justifyContent="jc-start"
      position="relative"
    >
      <SideHeader selectedTab="mileage" />
      <Flex
        height="h-full"
        grow="grow-1"
        justifyContent="jc-center"
        alignItems="ai-center"
        gap="g-1"
        padding="p-1"
      >
        <CarbonRankList />
      </Flex>
      <ChatBot />
      <CarbonPrint />
    </Flex>
  );
};
export default GreenMileage;
