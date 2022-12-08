import React from "react";
import styled from "styled-components";
// import styles from "./styles.ts";
import ProductMarketingCarouselDesktop from "./ProductMarketingCarouselDesktop";
import "react-multi-carousel/lib/styles.css";

const Wrapper = styled.div`
  width: 100%;
  max-width: 100%;
`;

type Item = {
  heading?: string;
  description?: string;
  image?: {
    image?: string;
    altText?: string;
  };
};

type Component = {
  heading: string;
  content: Array<Item>;
};

type Props = {
  content: {
    component?: Component;
    backgroundColor?: string;
    backgroundImage?: string;
  };
};

const ProductMarketingCarousel = ({ content }: Props) => {
  const component = content.component || ({} as Component);
  const heading = component.heading || "";
  const items = component.content.map(({ heading, description, image }) => ({
    heading: heading || "",
    description: description || "",
    imageSrc: image?.image || "",
    imageAlt: image?.altText || "",
  }));

  // Since react-multi-carousel requires the `deviceType` prop to support SSR,
  // it's no longer device-agnostic. To handle this, we would render two
  // carousels - one for desktop and one for mobile - and conditionally make
  // them visible via media queries.
  return (
    <Wrapper>
      <ProductMarketingCarouselDesktop heading={heading} items={items} />
    </Wrapper>
  );
};

export default ProductMarketingCarousel;
