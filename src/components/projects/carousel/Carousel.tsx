import styled from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { prevHandler, nextHandler, CarouselHandlerArgsType } from "./carouselHandler";
import { useState } from "react";
import CarouselContents from "./CarouselContents";

interface Props {
  projectImgs: string[];
  imageNumber: number;
  setImageNumber: React.Dispatch<React.SetStateAction<number>>;
}

const Carousel = ({ projectImgs, imageNumber, setImageNumber }: Props) => {
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
        <IoIosArrowBack onClick={() => prevHandler(carouselHandlerArgs)} />
      </button>
      <CarouselContents
        imageNumber={imageNumber}
        carouselTransition={carouselTransition}
        projectImageContents={projectImageContents}
      />
      <button type="button" className="icon right">
        <IoIosArrowForward onClick={() => nextHandler(carouselHandlerArgs)} />
      </button>
    </CarouselContainer>
  );
};

const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 450px;
  background-color: #f8f6f4;
  margin-top: 2%;
  margin-bottom: 1%;
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: none;
    font-size: 2em;
    position: absolute;
    transform: scale(1, 1.5);
    z-index: 1;
    padding: 0;
    border-radius: 5px;
    cursor: pointer;
    transition: color 0.2s, background-color 0.2s;
    &:hover {
      background-color: gray;
      color: white;
    }
  }
  .left {
    left: 1.5%;
    top: 50%;
    transform: translateY(-50%);
  }
  .right {
    right: 1.5%;
    top: 50%;
    transform: translateY(-50%);
  }
  @media (max-width: 1024px) {
    height: 45vw;
  }
  @media (max-width: 550px) {
    .icon {
      font-size: 1.2em;
    }
  }
`;

export default Carousel;
