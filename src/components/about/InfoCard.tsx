import styled from "styled-components";

const InfoCard = () => {
  return (
    <InfoCardContainer>
      <div className="info-box">
        <div>이름</div>
        <div>김수현</div>
        <div>E-mail</div>
        <div>sleepygeon@gmail.com</div>
        <div>Phone</div>
        <div>010-9063-2429</div>
      </div>
      <div className="archive-box">
        <div className="image-box">Github</div>
        <div className="image-box">Blog</div>
      </div>
    </InfoCardContainer>
  );
};

const InfoCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30%;
  height: 70%;
  border-radius: 10px;
  background-color: var(--header-color);
  padding: 2%;
  .info-box {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 60%;
    row-gap: 5%;
    margin-bottom: 3%;
  }
  .archive-box {
    display: flex;
    background-color: #fff;
    width: 100%;
    height: 40%;
    justify-content: space-around;
    align-items: center;
  }
`;

export default InfoCard;
