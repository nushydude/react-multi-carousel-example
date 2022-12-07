import React, { useRef } from "react";
import Carousel from "react-multi-carousel";
import styled from "styled-components";
import config from "./config";
import { CarouselItemData } from "./types";
import LongCarouselItem from "../Long";

const CarouselItemWrapper = styled.div`
  padding-left: 8px;
  padding-right: 8px;
`;

type Props = {
  heading: string;
  items: Array<CarouselItemData>;
};

const ProductMarketingCarouselDesktop = ({ items }: Props) => {
  const carouselRef = useRef<Carousel>(null);

  return (
    <Carousel {...config} ref={carouselRef} deviceType="desktop">
      {items.map((feature, idx) => (
        <CarouselItemWrapper key={idx}>
          <LongCarouselItem {...feature} />
        </CarouselItemWrapper>
      ))}
    </Carousel>
  );
};

export default ProductMarketingCarouselDesktop;
