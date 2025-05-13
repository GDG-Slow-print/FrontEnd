import IconExit from "@/components/icons/IconExit";
import { USER_ID } from "@/data/sessionKey";
import {
  Button,
  Flex,
  IconArrow,
  Text,
} from "@flowwwkr/design-system-tailwind";
import { NavLink, useNavigate } from "react-router-dom";

interface SideHeaderProps {
  selectedTab: "home" | "mileage" | "challenge" | "labor" | "promotion";
}

const SideHeader = ({ selectedTab }: SideHeaderProps) => {
  const userID = sessionStorage.getItem(USER_ID);

  return (
    <Flex
      justifyContent="jc-between"
      direction="flex-col"
      width="w-[95px]"
      color="c-primary-sf"
      borderRightColor="brc-primary-sf-02"
      borderRightStyle="brs-solid"
      borderRightWidth="brw-0.125"
      borderColor="bc-primary-sf-02"
      paddingY="py-1"
      zIndex="z-11"
      height="h-full"
    >
      <Flex
        direction="flex-col"
        justifyContent="jc-start"
        gap="g-2"
        width="w-full"
      >
        <NavLink to="/home">
          <Button
            noDefaultStyle
            hover
            color="c-primary-sf"
            width="w-[90px]"
            padding="p-1"
          >
            <Text
              fontFamily="ff-primary"
              fontWeight="fw-500"
              fontSize="fs-1"
              color={
                selectedTab === "home" ? "c-primary-sf-02" : "c-primary-sf-03"
              }
              lineClamp="lc-none"
              width="w-full"
              textAlign="ta-center"
            >
              HOME
            </Text>
          </Button>
        </NavLink>
        <NavLink to="/greenMileage">
          <Button
            noDefaultStyle
            hover
            color="c-primary-sf"
            padding="p-1"
            width="w-[90px]"
          >
            <Text
              fontFamily="ff-primary"
              fontWeight="fw-500"
              fontSize="fs-1"
              color={
                selectedTab === "mileage"
                  ? "c-primary-sf-02"
                  : "c-primary-sf-03"
              }
              lineClamp="lc-none"
              width="w-full"
              textAlign="ta-center"
            >
              Green Mileage
            </Text>
          </Button>
        </NavLink>
        <NavLink to="/greenChallenge">
          <Button
            noDefaultStyle
            hover
            color="c-primary-sf"
            width="w-[90px]"
            padding="p-1"
          >
            <Text
              fontFamily="ff-primary"
              fontWeight="fw-500"
              fontSize="fs-1"
              color={
                selectedTab === "challenge"
                  ? "c-primary-sf-02"
                  : "c-primary-sf-03"
              }
              lineClamp="lc-none"
              width="w-full"
              textAlign="ta-center"
            >
              Green Challenge
            </Text>
          </Button>
        </NavLink>
        <NavLink to="/laborMatch">
          <Button
            noDefaultStyle
            hover
            color="c-primary-sf"
            width="w-[90px]"
            padding="p-1"
          >
            <Text
              fontFamily="ff-primary"
              fontWeight="fw-500"
              fontSize="fs-1"
              color={
                selectedTab === "labor" ? "c-primary-sf-02" : "c-primary-sf-03"
              }
              lineClamp="lc-none"
              width="w-full"
              textAlign="ta-center"
            >
              Labor Match
            </Text>
          </Button>
        </NavLink>
        <NavLink to="/localPromotionMatch">
          <Button
            noDefaultStyle
            hover
            color="c-primary-sf"
            width="w-[90px]"
            padding="p-1"
          >
            <Text
              fontFamily="ff-primary"
              fontWeight="fw-500"
              fontSize="fs-1"
              color={
                selectedTab === "promotion"
                  ? "c-primary-sf-02"
                  : "c-primary-sf-03"
              }
              lineClamp="lc-none"
              width="w-full"
              textAlign="ta-center"
            >
              local Promotion
            </Text>
          </Button>
        </NavLink>
      </Flex>
      <Button
        noDefaultStyle
        width="w-90%"
        color="c-primary-sf"
        hover
        justifyContent="jc-between"
        direction="flex-col"
        gap="g-1"
        borderRadius="rad-0.75"
      >
        <Text
          width="w-full"
          fontFamily="ff-primary"
          fontWeight="fw-500"
          fontSize="fs-1"
          color="c-primary-sf-03"
          lineClamp="lc-none"
          textAlign="ta-center"
        >
          {userID ? userID : "undefined"}
        </Text>
        <IconExit size="sz-2" color="c-primary-sf-04" alignSelf="as-end" />
      </Button>
    </Flex>
  );
};
export default SideHeader;
