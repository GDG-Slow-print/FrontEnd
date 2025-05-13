import { Icon } from "@flowwwkr/design-system-tailwind";
import Svg from "@/assets/svgs/exit.svg?react";
import { IconProps } from "@flowwwkr/design-system-tailwind";

const IconExit = (props: IconProps) => {
  return (
    <Icon {...props}>
      <Svg></Svg>
    </Icon>
  );
};

export default IconExit;
