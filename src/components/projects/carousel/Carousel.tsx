import styled from "styled-components";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { prevHandler, nextHandler, CarouselHandlerArgsType } from "./carouselHandler";
import { useState } from "react";
import { ProjectContent } from "../project-contents/typingPractice";

interface Props {
  project: ProjectContent;
}
interface CarouselBoxProps {
  imageNumber: number;
  carouselTransition: string;
}

const Carousel = ({ project }: Props) => {
  const [imageNumber, setImageNumber] = useState(1);
  const [carouselTransition, setCarouselTransition] = useState("transform 0.5s ease-in-out");

  // 왼쪽 오른쪽 더미 생성
  const projectImages = [
    project.image[project.image.length - 1],
    ...project.image,
    project.image[0],
  ];

  const carouselArgsArr: CarouselHandlerArgsType = [
    imageNumber,
    setImageNumber,
    setCarouselTransition,
    projectImages.length - 2,
  ];

  return (
    <CarouselContainer>
      <button type="button" className="icon left">
        <BiLeftArrow onClick={() => prevHandler(carouselArgsArr)} />
      </button>
      <CarouselBox imageNumber={imageNumber} carouselTransition={carouselTransition}>
        {projectImages.map((image, idx) => {
          return (
            <div className="image-box">
              <img src={image} key={idx} alt="project-image" className="project-image" />
            </div>
          );
        })}
      </CarouselBox>
      <button type="button" className="icon right">
        <BiRightArrow onClick={() => nextHandler(carouselArgsArr)} />
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

const CarouselBox = styled.div<CarouselBoxProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 95%;
  padding: 0 20%;
  background-color: gray;
  transform: translateX(
    ${({ imageNumber }) => {
      return `${100 - imageNumber * 50}vw`;
    }}
  ); //720px씩 넘기기
  transition: ${({ carouselTransition }) => carouselTransition};
  .image-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50vw;
    height: 95%;
    .project-image {
      min-width: 80%;
      max-height: 100%;
    }
  }
`;

export default Carousel;
