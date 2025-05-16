import CarbonPrint from "@/components/common/ecoService/CarbonPrint";
import ChatBot from "@/components/common/ChatBot";
import ChallengeBox from "@/components/greenChallenge/ChallengeBox";
import SideHeader from "@/components/hedaer/SideHeader";
import { Flex } from "@flowwwkr/design-system-tailwind";

const GreenChallenge = () => {
  return (
    <Flex
      width="w-full"
      grow="grow-1"
      wrap="flex-nowrap"
      justifyContent="jc-start"
      position="relative"
    >
      <SideHeader selectedTab="challenge" />
      <Flex
        height="h-full"
        grow="grow-1"
        justifyContent="jc-center"
        alignItems="ai-center"
        gap="g-1"
        padding="p-1"
      >
        <ChallengeBox kindOfChallenge="ecoAccommodation" />
        <ChallengeBox kindOfChallenge="ecoSpot" />
        <ChallengeBox kindOfChallenge="greenMove" />
        <ChallengeBox kindOfChallenge="localFood" />
        <ChallengeBox kindOfChallenge="noPlastic" />
        <ChallengeBox kindOfChallenge="trashTag" />
      </Flex>
      <ChatBot />
      <CarbonPrint />
    </Flex>
  );
};

export default GreenChallenge;
