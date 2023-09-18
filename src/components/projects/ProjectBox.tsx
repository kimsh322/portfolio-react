import styled from "styled-components";

const ProjectBox = () => {
  return (
    <ProjectBoxContainer>
      <h3>프로젝트 이름</h3>
      <div className="carousel">이미지캐러셀</div>
      <div className="contents">
        <div className="left-content">왼쪽 인포</div>
        <div className="right-content">오른쪽 설명</div>
      </div>
    </ProjectBoxContainer>
  );
};

const ProjectBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: skyblue;
  width: 70%;
  height: 1300px;
  margin: 5% 0;
  padding: 2%;
  .carousel {
    width: 90%;
    height: 500px;
    background-color: #fff;
    margin-top: 2%;
  }
  .contents {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 55%;
    .left-content,
    .right-content {
      width: 45%;
      height: 100%;
      background-color: #fff;
      border: 0.5px solid black;
    }
  }
`;

export default ProjectBox;
