import React, { useRef } from "react";
import Carousel from "react-multi-carousel";
import styled from "styled-components";
import globalConfig from "../../config";
import config from "./config";
import { CarouselItemData } from "./types";
import LongCarouselItem from "../Long";

const CarouselWrapper = styled.div`
  grid-area: b;
  position: relative;
  padding-right: 70px;

  @media (max-width: ${globalConfig.screenSizes.sm.max}px) {
    padding-right: 0;
  }
`;

const CarouselItemWrapper = styled.div`
  padding-left: 7.5px;
  padding-right: 7.5px;
`;

type Props = {
  heading: string;
  items: Array<CarouselItemData>;
};

const ProductMarketingCarouselDesktop = ({ heading, items }: Props) => {
  const carouselRef = useRef<Carousel>(null);

  return (
    <CarouselWrapper>
      <Carousel {...config} ref={carouselRef} deviceType="desktop">
        {items.map((feature, idx) => (
          <CarouselItemWrapper key={idx}>
            <LongCarouselItem {...feature} />
          </CarouselItemWrapper>
        ))}
      </Carousel>
    </CarouselWrapper>
  );
};

export default ProductMarketingCarouselDesktop;
