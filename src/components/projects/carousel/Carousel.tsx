import styled from "styled-components";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { prevHandler, nextHandler, CarouselHandlerArgsType } from "./carouselHandler";
import { useState } from "react";
import CarouselContents from "./CarouselContents";

interface Props {
  projectImgs: string[];
}

const Carousel = ({ projectImgs }: Props) => {
  const [imageNumber, setImageNumber] = useState(1);
  const [carouselTransition, setCarouselTransition] = useState("transform 0.5s ease-in-out");

  // 왼쪽 오른쪽 더미 생성
  const projectImageContents = [
    projectImgs[projectImgs.length - 1],
    ...projectImgs,
    projectImgs[0],
  ];

  const carouselHandlerArgs: CarouselHandlerArgsType = {
    imageNumber,
    setImageNumber,
    setCarouselTransition,
    maxLength: projectImageContents.length - 2,
  };

  return (
    <CarouselContainer>
      <button type="button" className="icon left">
        <BiLeftArrow onClick={() => prevHandler(carouselHandlerArgs)} />
      </button>
      <CarouselContents
        imageNumber={imageNumber}
        carouselTransition={carouselTransition}
        projectImageContents={projectImageContents}
      />
      <button type="button" className="icon right">
        <BiRightArrow onClick={() => nextHandler(carouselHandlerArgs)} />
      </button>
    </CarouselContainer>
  );
};

const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 500px;
  background-color: #fff;
  margin-top: 2%;
  position: relative;
  overflow: hidden;
  .icon {
    background-color: transparent;
    border: none;
    font-size: 2em;
    position: absolute;
    transform: scale(1, 1.5);
    z-index: 1;
    cursor: pointer;
  }
  .left {
    left: 1%;
    top: 50%;
    transform: translateY(-50%);
  }
  .right {
    right: 1%;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export default Carousel;
