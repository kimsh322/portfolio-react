import styled from "styled-components";

interface Props {
  imageNumber: number;
  carouselTransition: string;
  projectImageContents: string[];
}

interface CarouselBoxProps {
  imageNumber: number;
  carouselTransition: string;
}

const CarouselContents = ({ imageNumber, carouselTransition, projectImageContents }: Props) => {
  return (
    <CarouselContentsContainer imageNumber={imageNumber} carouselTransition={carouselTransition}>
      {projectImageContents.map((image, idx) => {
        return (
          <div className="image-box">
            <img src={image} key={idx} alt="project-image" className="project-image" />
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
  background-color: gray;
  transform: translateX(
    ${({ imageNumber }) => {
      return `${100 - imageNumber * 50}vw`;
    }}
  );
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

export default CarouselContents;
