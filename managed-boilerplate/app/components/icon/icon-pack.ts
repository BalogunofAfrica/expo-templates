import chevronLeft from "@/assets/svg/chevron-left.svg";
import eye from "@/assets/svg/eye.svg";
import eyeOff from "@/assets/svg/eye-off.svg";

export const IconPack = {
  "chevron-left-icon": chevronLeft,
  "eye-icon": eye,
  "eye-off-icon": eyeOff,
};

export type IconName = keyof typeof IconPack;
