import IconBackground from "@/components/icons/IconBackground";
import { Flex } from "@flowwwkr/design-system-tailwind";

const Background = () => {
  return (
    <Flex
      position="fixed"
      top="t-20"
      left="l-10"
      width="w-50%"
      zIndex="-z-1001"
    >
      <IconBackground
        width="w-100%"
        height="h-100%"
        zIndex="-z-1001"
        opacity="oc-0.75"
      />
    </Flex>
  );
};

export default Background;
