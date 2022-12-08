import React from "react";
import styled from "styled-components";
import config from "../config";

const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
`;

const Image = styled.img`
  height: 400px;
  width: 100%;
  object-fit: cover;

  @media (max-width: ${config.screenSizes.lg.max}px) {
    height: 250px;
  }

  @media (max-width: ${config.screenSizes.sm.max}px) {
    height: 450px;
  }
`;

const Heading = styled.h4`
  margin-top: 30px;
  margin-bottom: 0;
  line-height: 30px;
  font-family: officeworks;
  font-size: 20px;
  font-weight: bold;
  color: black;
  height: 60px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: ${config.screenSizes.lg.max}px) {
    margin-top: 27px;
  }

  @media (max-width: ${config.screenSizes.sm.max}px) {
    margin-top: 20px;
  }
`;

const Description = styled.p`
  font-family: Arial, sans-serif;
  font-size: 15px;
  color: black;
  line-height: 28px;
  margin-top: 14px;
  margin-bottom: 0;

  @media (max-width: ${config.screenSizes.sm.max}px) {
    margin-top: 20px;
    font-size: 14px;
    line-height: 26px;
  }
`;

type Props = {
  heading: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

const LongCarouselItem = ({
  heading,
  description,
  imageSrc,
  imageAlt,
}: Props) => (
  <Card>
    <Image src={imageSrc} alt={imageAlt} />
    <Heading>{heading}</Heading>
    <Description>{description}</Description>
  </Card>
);

export default LongCarouselItem;
