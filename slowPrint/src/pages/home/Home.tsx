import Background from "@/components/common/backgrond";
import SideHeader from "@/components/hedaer/SideHeader";
import IconBackground from "@/components/icons/IconBackground";
import { Button, Flex } from "@flowwwkr/design-system-tailwind";

const Home = () => {
  return (
    <Flex
      width="w-full"
      height="h-full"
      wrap="flex-wrap"
      justifyContent="jc-start"
    >
      <SideHeader selectedTab="home" />

      <Flex>isdi</Flex>
      <IconBackground
        position="fixed"
        top="t-30"
        right="r-30"
        width="w-80%"
        height="h-40%"
        zIndex="-z-1001"
      />
    </Flex>
  );
};
export default Home;
