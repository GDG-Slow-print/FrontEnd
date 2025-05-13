import { Flex, Image, Text } from "@flowwwkr/design-system-tailwind";

const Header = () => {
  return (
    <Flex
      zIndex="z-11"
      width="w-full"
      paddingX="px-2.5"
      justifyContent="jc-between"
      alignItems="ai-center"
      wrap="flex-nowrap"
      color="c-[#faf3e1]"
      height="h-5"
      minHeight="mh-5"
      borderBottomWidth="bbw-0.125"
      borderBottomStyle="bbs-solid"
      borderColor="bc-primary-sf-02"
    >
      <Image
        alt="logo"
        src="/imgs/slowPrintLogo.png"
        height="h-4.5"
        width="w-4.5"
      ></Image>
      <Text
        color="c-primary-sf-03"
        fontSize="fs-1.75"
        fontWeight="fw-700"
        fontFamily="ff-secondary"
        lineClamp="lc-none"
      >
        Sustainable Travel
      </Text>
    </Flex>
  );
};

export default Header;
