import { wp } from "@/constants";

export const cardVariants = {
  border: {
    borderColor: "cardColorB",
    borderRadius: "xl",
    borderWidth: wp(1),
    paddingBottom: "xl",
    paddingHorizontal: "l",
    paddingTop: "l",
  },
  dashed: {
    alignItems: "center",
    backgroundColor: "mainBackground",
    borderColor: "cardColorB",
    borderRadius: "xl",
    borderStyle: "dashed",
    borderWidth: wp(2),
    justifyContent: "center",
  },
  defaults: {},
  primary: {
    backgroundColor: "primary500",
    borderRadius: "l",
    paddingHorizontal: "sl",
    paddingVertical: "xxl",
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
  },
  secondary: {
    backgroundColor: "cardColorA",
    borderRadius: "l",
    paddingHorizontal: "sl",
    paddingVertical: "xxl",
  },
};
