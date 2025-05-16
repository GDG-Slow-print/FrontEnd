import CarbonPrint from "@/components/common/ecoService/CarbonPrint";
import ChatBot from "@/components/common/ChatBot";
import LaborMatchBoard from "@/components/common/revitalizationService/LaborMatchBoard";
import SideHeader from "@/components/hedaer/SideHeader";
import { Flex } from "@flowwwkr/design-system-tailwind";

const LaborMatch = () => {
  return (
    <Flex
      width="w-full"
      grow="grow-1"
      wrap="flex-nowrap"
      justifyContent="jc-start"
      position="relative"
    >
      <SideHeader selectedTab="labor" />
      <Flex
        height="h-full"
        grow="grow-1"
        justifyContent="jc-center"
        alignItems="ai-center"
        gap="g-1"
        padding="p-1"
      >
        <LaborMatchBoard />
      </Flex>
      <ChatBot />
      <CarbonPrint />
    </Flex>
  );
};

export default LaborMatch;
