export const handleHeaderColor = (
  setIsHeaderColor: React.Dispatch<React.SetStateAction<boolean>>
) => {
  let scheduledAnimationFrame = false;
  let lastScrollY = window.scrollY;

  if (scheduledAnimationFrame) return;

  scheduledAnimationFrame = true;
  requestAnimationFrame(() => {
    if (lastScrollY > 300) setIsHeaderColor(true);
    else setIsHeaderColor(false);
    scheduledAnimationFrame = false;
  });
};
