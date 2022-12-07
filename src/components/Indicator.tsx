import React from "react";
import styled from "styled-components";

type Props = {
  isSelected: boolean;
  variant?: string;
  onClick?: (props: ClickProps) => void;
};

export type ClickProps = React.MouseEvent;

const StyledIndicator = styled.button<Partial<Props>>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
  border-width: 0;
  padding: 0;
  margin: 2px;
  background-color: ${({ isSelected }) => (isSelected ? "navy" : "silver")};

  :hover {
    cursor: pointer;
  }
`;

const Indicator = ({ isSelected = false, ...rest }: Props) => (
  <StyledIndicator isSelected={isSelected} {...rest} />
);

export default Indicator;
