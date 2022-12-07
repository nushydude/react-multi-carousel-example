import React from "react";
import styled from "styled-components";
import Icon from "./Icon";
import config from "../config";

type Direction = "left" | "right";

type Props = {
  label?: string;
  direction: Direction;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = styled.button<{ direction: Direction }>`
  width: 60px;
  height: 60px;
  border: none;
  background-color: white;
  padding: 0;
  cursor: pointer;
  pointer-events: auto;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  transform: ${({ direction }) =>
    direction === "right" ? "none" : "rotate(180deg)"};

  &:hover {
    cursor: pointer;
  }

  > svg {
    width: 24px;
    height: 24px;
  }

  @media (max-width: ${config.screenSizes.sm.max}px) {
    width: 40px;
    height: 40px;

    > svg {
      width: 16px;
      height: 16px;
    }
  }
`;

const DEFAULT_LABELS = {
  left: "Previous",
  right: "Next",
};

const ArrowButton = ({ label, ...rest }: Props) => {
  const ariaLabel =
    typeof label === "string" ? label : DEFAULT_LABELS[rest.direction];

  return (
    <Button aria-label={ariaLabel} data-testid="arrow-button" {...rest}>
      <Icon.Chevron />
    </Button>
  );
};

export default ArrowButton;
