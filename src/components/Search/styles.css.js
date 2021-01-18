import styled from "styled-components";
import { MediaQueries } from "../../utils/MediaQueries";

export const StyledSearch = styled.div`
  justify-content: space-around;
  display: none;
  ${MediaQueries.FromTablet} {
    width: 100%;
    display: flex;
  }
`;

export const InputContainer = styled.div`
  input {
    margin-right: 10px;
    border-radius: 5px;
    outline: none;
    border: none;
    background-color: #f0f0f0;
    padding: 5px;
  }
  button {
    border-radius: 5px;
    outline: none;
    border: none;
    background-color: #f0f0f0;
    padding: 5px;
  }
`;
