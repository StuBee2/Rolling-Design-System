import styled, { CSSObject } from "styled-components";
import { Flex } from "../../Layout";

export const TextInputBar = styled.input<{
  customStyle?: CSSObject;
  isError?: boolean;
}>`
  border: ${({ isError }) =>
    isError
      ? "1px solid rgba(255, 78, 67, 1)"
      : " 1px solid rgba(189, 194, 208, 1);"};
  border-radius: 6px;
  outline: none;
  resize: none;
  ::placeholder {
    color: rgba(189, 194, 208, 1);
  }
  ${({ customStyle }) => customStyle}
`;

export const TextInputContainer = styled.div`
  ${Flex({ flexDirection: "column", rowGap: "5px" })}
`;

export const ErrorText = styled.p`
  color: rgba(255, 78, 67, 1);
`;
