export type CarouselHandlerArgsType = [
  pickNumber: number,
  setPickNumber: React.Dispatch<React.SetStateAction<number>>,
  setCarouselTransition: React.Dispatch<React.SetStateAction<string>>,
  maxLength: number
];

interface PageHandler {
  (argsArr: CarouselHandlerArgsType): void;
}

export const prevHandler: PageHandler = (argsArr) => {
  const [pickNumber, setPickNumber, setCarouselTransition, maxLength] = argsArr;
  const curNumber = pickNumber;
  if (curNumber <= 1) {
    setPickNumber(0);
    setTimeout(() => {
      setCarouselTransition("none");
    }, 500);
    setTimeout(() => {
      setPickNumber(maxLength);
    }, 550);
    setTimeout(() => {
      setCarouselTransition("transform 0.5s ease-in-out");
    }, 600);
  } else setPickNumber(curNumber - 1);
};

export const nextHandler: PageHandler = (argsArr) => {
  const [pickNumber, setPickNumber, setCarouselTransition, maxLength] = argsArr;
  const curNumber = pickNumber;
  if (curNumber >= maxLength) {
    setPickNumber(maxLength + 1);
    setTimeout(() => {
      setCarouselTransition("none");
    }, 500);
    setTimeout(() => {
      setPickNumber(1);
    }, 550);
    setTimeout(() => {
      setCarouselTransition("transform 0.5s ease-in-out");
    }, 600);
  } else setPickNumber(curNumber + 1);
};
