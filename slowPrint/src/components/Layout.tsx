import { Flex } from "@flowwwkr/design-system-tailwind";
import { Outlet } from "react-router-dom";
import Header from "./hedaer/Header";

const Layout = () => {
  return (
    <Flex
      direction="flex-col"
      justifyContent="jc-start"
      width="w-full"
      height="h-screen"
      wrap="flex-nowrap"
      shrink="shrink-0"
    >
      <Header />
      <Outlet />
    </Flex>
  );
};

export default Layout;
