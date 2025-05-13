import Background from "@/components/common/Background";
import SideHeader from "@/components/hedaer/SideHeader";
import { Flex } from "@flowwwkr/design-system-tailwind";

const GreenMileage = () => {
  return (
    <Flex
      width="w-full"
      height="h-full"
      wrap="flex-wrap"
      justifyContent="jc-start"
    >
      <SideHeader selectedTab="mileage" />

      <Flex>isdi</Flex>
      <Background />
    </Flex>
  );
};
export default GreenMileage;
