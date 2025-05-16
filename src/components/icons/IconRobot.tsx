import { Icon } from "@flowwwkr/design-system-tailwind";
import Svg from "@/assets/svgs/bot.svg?react";
import { IconProps } from "@flowwwkr/design-system-tailwind";

const IconBot = (props: IconProps) => {
  return (
    <Icon {...props}>
      <Svg></Svg>
    </Icon>
  );
};

export default IconBot;
