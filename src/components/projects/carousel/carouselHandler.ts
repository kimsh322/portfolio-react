export type CarouselHandlerArgsType = {
  imageNumber: number;
  setImageNumber: React.Dispatch<React.SetStateAction<number>>;
  setCarouselTransition: React.Dispatch<React.SetStateAction<string>>;
  maxLength: number;
};

interface PageHandler {
  (argsArr: CarouselHandlerArgsType): void;
}

export const prevHandler: PageHandler = ({
  imageNumber,
  setImageNumber,
  setCarouselTransition,
  maxLength,
}) => {
  const curNumber = imageNumber;
  if (curNumber <= 1) {
    setImageNumber(0);
    setTimeout(() => {
      setCarouselTransition("none");
    }, 500);
    setTimeout(() => {
      setImageNumber(maxLength);
    }, 550);
    setTimeout(() => {
      setCarouselTransition("transform 0.5s ease-in-out");
    }, 600);
  } else setImageNumber(curNumber - 1);
};

export const nextHandler: PageHandler = ({
  imageNumber,
  setImageNumber,
  setCarouselTransition,
  maxLength,
}) => {
  const curNumber = imageNumber;
  if (curNumber >= maxLength) {
    setImageNumber(maxLength + 1);
    setTimeout(() => {
      setCarouselTransition("none");
    }, 500);
    setTimeout(() => {
      setImageNumber(1);
    }, 550);
    setTimeout(() => {
      setCarouselTransition("transform 0.5s ease-in-out");
    }, 600);
  } else setImageNumber(curNumber + 1);
};
