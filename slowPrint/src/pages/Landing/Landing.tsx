import Loading from "@/components/common/Loading";
import {
  Flex,
  Image,
  Text,
  ThemeButton,
} from "@flowwwkr/design-system-tailwind";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const goToLoginPage = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Flex
      direction="flex-col"
      justifyContent="jc-around"
      height="h-full"
      width="w-full"
    >
      {/* about1 */}
      <Flex wrap="flex-wrap" justifyContent="jc-around" gap="g-2">
        <Image alt="aboutImage" src="" size="sz-4"></Image>
        <Text
          fontFamily="ff-primary"
          fontSize="fs-2"
          fontWeight="fw-400"
          color="c-primary-sf-03"
        >
          Desc1
        </Text>
      </Flex>
      <Flex width="w-full" height="h-0.25" color="c-[#E0E0E0]" />
      {/* about2 */}
      <Flex wrap="flex-wrap" justifyContent="jc-around" gap="g-2">
        <Image alt="aboutImage" src="" size="sz-4"></Image>
        <Text
          fontFamily="ff-primary"
          fontSize="fs-2"
          fontWeight="fw-400"
          color="c-primary-sf-03"
        >
          Desc2
        </Text>
      </Flex>
      <Flex width="w-full" height="h-0.25" color="c-[#E0E0E0]" />
      {/* about3 */}
      <Flex wrap="flex-wrap" justifyContent="jc-around" gap="g-2">
        <Image alt="aboutImage" src="" size="sz-4"></Image>
        <Text
          fontFamily="ff-primary"
          fontSize="fs-2"
          fontWeight="fw-400"
          color="c-primary-sf-03"
        >
          Desc3
        </Text>
      </Flex>
      <Flex width="w-full" height="h-0.25" color="c-[#E0E0E0]" />
      <ThemeButton
        onClick={goToLoginPage}
        textStyle={{ color: "c-primary-sf-03" }}
        buttonStyle={{ color: "c-primary-sf-03" }}
      >
        START
      </ThemeButton>
    </Flex>
  );
};
export default Landing;
