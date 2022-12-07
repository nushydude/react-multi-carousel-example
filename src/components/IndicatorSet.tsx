import React from "react";
import Indicator, { ClickProps } from "./Indicator";

type Props = {
  size: number;
  selectedIndex: number;
  onClick?: (props: IndicatorClickProps) => void;
};

type IndicatorClickProps = {
  e: ClickProps;
  index: number;
};

const IndicatorSet = ({ size, selectedIndex = 0, onClick }: Props) => {
  const cleanedSelectedIndex = Math.trunc(selectedIndex);

  return (
    <>
      {new Array(Math.trunc(size)).fill(0).map((_, i) => (
        <Indicator
          data-testid={`indicator-${i}`}
          key={`indicator-${i}`}
          isSelected={i === cleanedSelectedIndex}
          onClick={(e) => {
            onClick && onClick({ e, index: i });
          }}
        />
      ))}
    </>
  );
};

export default IndicatorSet;
