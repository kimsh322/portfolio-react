import styled from "styled-components";

interface Props {
  imageNumber: number;
  carouselTransition: string;
  projectImageContents: string[];
}

interface CarouselBoxProps {
  imageNumber: number;
  carouselTransition: string;
  maxLength: number;
}

const CarouselContents = ({ imageNumber, carouselTransition, projectImageContents }: Props) => {
  return (
    <CarouselContentsContainer
      imageNumber={imageNumber}
      carouselTransition={carouselTransition}
      maxLength={projectImageContents.length}
    >
      {projectImageContents.map((image, idx) => {
        return (
          <div className="image-box" key={idx}>
            <img src={image} alt="project-image" className="project-image" />
          </div>
        );
      })}
    </CarouselContentsContainer>
  );
};

const CarouselContentsContainer = styled.div<CarouselBoxProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 95%;
  padding: 0 20%;
  background-color: #f8f6f4;
  transform: translateX(
    ${({ imageNumber, maxLength }) => {
      return `${450 * (-1 + maxLength) - imageNumber * 900}px`;
    }}
  );
  transition: ${({ carouselTransition }) => carouselTransition};

  .image-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 900px;
    height: 95%;
    .project-image {
      min-width: 80%;
      max-height: 100%;
    }
  }
  @media (max-width: 1024px) {
    .image-box {
      .project-image {
        min-width: 0;
      }
    }
  }
`;

export default CarouselContents;
