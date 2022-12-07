import React, { useEffect, useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import {
  getOriginalCounterPart,
  getOriginalIndexLookupTableByClones,
} from "react-multi-carousel/lib/utils/clones";
import styled from "styled-components";
import globalConfig from "../../config";
import ArrowButton from "../ArrowButton";
import IndicatorSet from "../IndicatorSet";
import LongCarouselItem from "../Long";
import config from "./config";
import { CarouselItemData } from "./types";

const Heading = styled.h3`
  line-height: 1.33333;
  margin-right: 30%;
  font-family: officeworks;
  font-size: 20px;
  font-weight: bold;
  color: black;

  @media (max-width: ${globalConfig.screenSizes.sm.max}px) {
    margin: 0 auto 30px;
  }
`;

const CarouselWrapper = styled.div`
  grid-area: b;
  position: relative;
  padding-right: 70px;

  @media (max-width: ${globalConfig.screenSizes.sm.max}px) {
    padding-right: 0;
  }
`;

const CarouselItemWrapper = styled.div`
  margin-left: 7.5px;
  margin-right: 7.5px;
`;

const MobilePaginationControlsWrapper = styled.div`
  margin-top: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IndicatorSetWrapperMobile = styled.div<{ count: number }>`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(${({ count }) => count}, 1fr);
`;

type Props = {
  heading: string;
  items: Array<CarouselItemData>;
};

const ProductMarketingCarouselMobile = ({ heading, items }: Props) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const carouselRef = useRef<Carousel>(null);

  const goToNextSlide = () => {
    if (carouselRef.current) {
      // We are deliberately calling previous() when going to the next slide to
      // achieve the expected behaviour.
      carouselRef.current.previous(1);
    }
  };

  const goToPreviousSlide = () => {
    if (carouselRef.current) {
      // We are deliberately calling next() when going to the previous slide to
      // achieve the expected behaviour.
      carouselRef.current.next(1);
    }
  };

  const goToSlide = ({ index }: { index: number }) => {
    if (!carouselRef.current) {
      return;
    }

    const targetSlideIndex = getOriginalCounterPart(
      index,
      carouselRef.current.state,
      React.Children.toArray(carouselRef.current.props.children)
    );

    carouselRef.current.goToSlide(targetSlideIndex);
  };

  const updateCurrentSlide = () => {
    if (carouselRef.current) {
      const { state, props } = carouselRef.current;
      const table = getOriginalIndexLookupTableByClones(
        state.slidesToShow,
        React.Children.toArray(props.children)
      );
      const realIndex = table[state.currentSlide];

      setCurrentSlide(realIndex);
    }
  };

  // Set the initial index in state.
  // Carousel component is not a controlled react component, so we cannot set the index via props.
  // Plus, when infinite mode is set, it clones the items to achieve the effect and we lose the original indexed.
  // So the following logic is required to map the slide index inside the Carousel component to the original index.
  useEffect(() => {
    updateCurrentSlide();
  }, []);

  return (
    <>
      <Heading>{heading}</Heading>
      <CarouselWrapper>
        <Carousel
          {...config}
          ref={carouselRef}
          deviceType="mobile"
          afterChange={updateCurrentSlide}
        >
          {items.map((feature, idx) => (
            <CarouselItemWrapper key={idx}>
              <LongCarouselItem {...feature} />
            </CarouselItemWrapper>
          ))}
        </Carousel>
      </CarouselWrapper>
      {items.length > 1 ? (
        <MobilePaginationControlsWrapper>
          <ArrowButton direction="left" onClick={goToNextSlide} />
          <IndicatorSetWrapperMobile count={items.length}>
            <IndicatorSet
              size={items.length}
              onClick={goToSlide}
              selectedIndex={currentSlide}
            />
          </IndicatorSetWrapperMobile>
          <ArrowButton direction="right" onClick={goToPreviousSlide} />
        </MobilePaginationControlsWrapper>
      ) : null}
    </>
  );
};

export default ProductMarketingCarouselMobile;
