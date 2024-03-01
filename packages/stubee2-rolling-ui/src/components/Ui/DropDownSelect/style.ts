import styled, { CSSObject } from "styled-components";
import { Flex } from "../../Layout";

export const DropDownSelectContainer = styled.div<{
  width: string;
}>`
  width: ${({ width }) => width};
  height: auto;
  position: relative;
  font-size: 15px;
`;

export const DropDownSelectWrapper = styled.div<{
  height: string;
  dropDownSelectCustomStyle?: CSSObject;
}>`
  width: 100% !important;
  height: ${({ height }) => height} !important;

  ${Flex({
    alignItems: "center",
    justifyContent: "space-between",
    columnGap: "10px",
  })}

  background-color: #fff;
  border-radius: 6px;
  cursor: pointer;

  outline: none;
  border: 1px solid rgba(189, 194, 208, 1);
  color: #000;

  p {
    padding-left: 20px;
    white-space: nowrap;
    overflow-x: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
  }

  ${({ dropDownSelectCustomStyle }) => dropDownSelectCustomStyle};
`;

export const DropDownSelectIcon = styled.div<{ isShowingItemList: boolean }>`
  ${Flex({ alignItems: "center" })}
  transition: all 0.4s ease;
  transform: ${({ isShowingItemList }) =>
    !isShowingItemList && "rotate(180deg)"};
  margin-right: 15px;
`;

export const DropDownSelectItemContainer = styled.div<{
  height: string;
  dropDownSelectItemBoxMaxHeight?: string;
  dropDownSelectItemBoxCustomStyle?: CSSObject;
}>`
  width: 100%;
  max-height: ${({ dropDownSelectItemBoxMaxHeight }) =>
    dropDownSelectItemBoxMaxHeight || "250px"};

  position: absolute;
  top: ${({ height }) => height};
  ${Flex({ flexDirection: "column" })}

  margin-top: 7px;
  z-index: 3;

  border-radius: 6px;
  border: 1px solid rgba(189, 194, 208, 1);

  overflow: hidden;

  ${({ dropDownSelectItemBoxCustomStyle }) => dropDownSelectItemBoxCustomStyle};
`;

export const DropDownSelectItemWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-wrap: wrap;
  background-color: blue;

  overflow-y: auto;
`;

export const DropDownSelectItem = styled.div<{
  height: string;
  dropDownSelectItemHeight?: string;
}>`
  width: 100%;
  height: ${({ dropDownSelectItemHeight, height }) =>
    dropDownSelectItemHeight || height};

  background-color: #fff;
  outline: none;

  color: #000;
  cursor: pointer;
  ${Flex({ alignItems: "center" })}

  p {
    padding-left: 20px;
  }

  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #eee;
  }
  &:active {
    background-color: #ddd;
  }
`;
