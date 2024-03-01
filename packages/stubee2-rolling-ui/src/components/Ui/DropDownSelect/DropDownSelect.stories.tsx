import { Meta, StoryObj } from "@storybook/react";
import { DropDownSelect } from "./DropDownSelect";

const meta: Meta<typeof DropDownSelect> = {
  title: "Ui/DropDownSelect",
  component: DropDownSelect,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DropDownSelect>;

export const PositionDropDown: Story = {
  args: {
    width: "500px",
    height: "60px",

    selectItem: "포지션을 선택해주세요",

    itemListMaxHeight: "240px",
    itemHeight: "50px",

    isShowingItemList: false,

    itemList: [
      "포지션을 선택해주세요",
      "Frontend 개발자",
      "BackEnd 개발자",
      "DevOps",
      "iOS 개발자",
      "Android 개발자",
    ],
  },
};
