import styled from "styled-components";
import ArchiveCard from "../components/archive/ArchiveCard";
import archiveArr from "../components/archive/archive";

const Archive = () => {
  return (
    <ArchiveContainer>
      <h1 className="header">My Archives</h1>
      <div className="card-container">
        {archiveArr.map((archive) => {
          return <ArchiveCard key={archive[0]} title={archive[0]} url={archive[1]} contents={archive[2]} />;
        })}
      </div>
    </ArchiveContainer>
  );
};

export default Archive;

const ArchiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85%;
  height: 100%;
  padding: 2%;
  .header {
    width: 100%;
  }
  .card-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;
