import { Icon } from "@flowwwkr/design-system-tailwind";
import Svg from "@/assets/svgs/backGround.svg?react";
import { IconProps } from "@flowwwkr/design-system-tailwind";

const IconBackground = (props: IconProps) => {
  return (
    <Icon {...props}>
      <Svg></Svg>
    </Icon>
  );
};

export default IconBackground;
