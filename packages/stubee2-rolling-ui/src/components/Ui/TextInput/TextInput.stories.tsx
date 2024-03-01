import { Meta, StoryObj } from "@storybook/react";
import { TextInput } from "./TextInput";

const meta: Meta<typeof TextInput> = {
  title: "Ui/TextInput",
  component: TextInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const IdTextInput: Story = {
  args: {
    type: "text",
    placeholder: "아이디를 입력해주세요",
    name: "id",
    value: "",
    customStyle: {
      width: "500px",
      height: "56px",
      backgroundColor: "#fff",
      paddingLeft: "20px",
      fontSize: "18px",
    },
    isError: true,
    errorMessage: "에러가 발생했습니다.",
  },
};

export const PwTextInput: Story = {
  args: {
    type: "password",
    placeholder: "비밀번호를 입력해주세요",
    name: "id",
    value: "",
    customStyle: {
      width: "500px",
      height: "56px",
      backgroundColor: "#fff",
      paddingLeft: "20px",
      fontSize: "18px",
    },
  },
};

export const ReviewTextArea: Story = {
  args: {
    name: "review",
    placeholder: "리뷰 내용을 작성해주세요",
    value: "",
    textType: "textarea",
    customStyle: {
      width: "652px",
      height: "150px",
      padding: "20px 20px",
      fontSize: "18px",
    },
    isError: true,
  },
};
