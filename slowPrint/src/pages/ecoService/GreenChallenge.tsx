import Background from "@/components/common/Background";
import ChallengeBox from "@/components/greenChallenge/ChallengeBox";
import SideHeader from "@/components/hedaer/SideHeader";
import IconBackground from "@/components/icons/IconBackground";
import { Flex, Grid } from "@flowwwkr/design-system-tailwind";

const GreenChallenge = () => {
  return (
    <Flex
      width="w-full"
      grow="grow-1"
      wrap="flex-nowrap"
      justifyContent="jc-start"
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
    </Flex>
  );
};

export default GreenChallenge;
