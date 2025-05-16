import CarbonPrint from "@/components/common/ecoService/CarbonPrint";
import ChatBot from "@/components/common/ChatBot";
import SideHeader from "@/components/hedaer/SideHeader";
import { Flex, Image, Text } from "@flowwwkr/design-system-tailwind";

const Home = () => {
  return (
    <Flex
      width="w-full"
      grow="grow-1"
      wrap="flex-nowrap"
      justifyContent="jc-start"
      position="relative"
    >
      <SideHeader selectedTab="home" />
      <Flex
        height="h-full"
        grow="grow-1"
        justifyContent="jc-start"
        alignItems="ai-center"
        gap="g-1"
        padding="p-1"
        direction="flex-col"
      >
        <Flex width="w-full">
          <Image
            alt=""
            src="/imgs/savedCarbon.jpg"
            objectFit="obj-cover"
            width="w-full"
            height="h-30"
            zIndex="-z-1"
          ></Image>
          <Text
            fontWeight="fw-600"
            fontFamily="ff-primary"
            fontSize="fs-2"
            color="c-primary-sf-03"
            lineClamp="lc-none"
            width="w-full"
            textAlign="ta-center"
          >
            Earn miles with your carbon footprint while traveling, <br />A trip
            that considers the environment with the Green Challenge!
          </Text>
        </Flex>
        {/*  */}
        <Flex width="w-full">
          <Image
            alt=""
            src="/imgs/local.jpg"
            objectFit="obj-cover"
            width="w-full"
            height="h-30"
            zIndex="-z-1"
          ></Image>
          <Text
            fontWeight="fw-600"
            fontFamily="ff-primary"
            fontSize="fs-2"
            color="c-primary-sf-03"
            lineClamp="lc-none"
            width="w-full"
            textAlign="ta-center"
          >
            Providing benefits to travelers and revitalizing local businesses
            <br />
            through local promotion and volunteer work
          </Text>
        </Flex>
        {/*  */}
        <Flex width="w-full">
          <Image
            alt=""
            src="/public/imgs/traveler.jpg"
            objectFit="obj-cover"
            width="w-full"
            height="h-30"
            zIndex="-z-1"
          ></Image>
          <Text
            fontWeight="fw-600"
            fontFamily="ff-primary"
            fontSize="fs-2"
            color="c-primary-sf-03"
            lineClamp="lc-none"
            width="w-full"
            textAlign="ta-center"
          >
            Providing AI-tailored information to travelers using Google Gemini
          </Text>
        </Flex>
      </Flex>
      <ChatBot />
      <CarbonPrint />
    </Flex>
  );
};
export default Home;
