import styled from "styled-components";

export const StyledStats = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  .stats {
    h2 {
      margin: 10px 0 20px 0;
      font-size: 2rem;
    }
    .stats-pills {
      border-left: 4px solid lightgray;
      display: flex;
      flex-wrap: wrap;
      padding-left: 3px;
      .stats-pills_container {
        margin: 5px 5px 15px 10px;
      }
    }
  }
`;
