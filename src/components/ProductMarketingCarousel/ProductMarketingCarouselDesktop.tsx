import React from "react";
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
  return (
    <Carousel {...config}>
      {items.map((feature, idx) => (
        <div key={idx}>
          <CarouselItemWrapper>
            <LongCarouselItem {...feature} />
          </CarouselItemWrapper>
        </div>
      ))}
    </Carousel>
  );
};

export default ProductMarketingCarouselDesktop;
