import styled from "styled-components";
import { Flex } from "../../Layout";

export const ErrorContainer = styled.div`
  ${Flex({ alignItems: "center", columnGap: "5px" })}
  img {
    width: 16px;
    height: 16px;
  }
  p {
    font-size: 12px;
    color: #fb2047;
  }
`;
