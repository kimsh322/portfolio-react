import styled from "styled-components";

const StackCard = () => {
  return (
    <StackCardContainer>
      <h3>분류</h3>
      <div>이미지박스</div>
    </StackCardContainer>
  );
};

export default StackCard;

const StackCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 33%;
  height: 80%;
  background-color: var(--stackcard-color);
  margin: 3% 1%;
  border-radius: 10px;
  box-shadow: var(--stackcard-shadow) 0px 3px 5px;
  transition: color 0.1s, background-color 0.3s, transform 0.3s;
  &:hover {
    transform: translateY(-10px);
    transition: color 0.1s, background-color 0.3s, transform 0.3s;
  }
`;
