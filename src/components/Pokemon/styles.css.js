import styled from "styled-components";
import { MediaQueries } from "../../utils/MediaQueries";
import { backgroundColors } from "../theme";

export const StyledContainer = styled.div`
  background-color: ${(props) => {
    return props.types
      ? backgroundColors[
          props.types[Math.floor(Math.random() * props.types.length)]
        ]
      : "default";
  }};
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-around;
  position: relative;
  ${MediaQueries.FromTablet} {
    height: auto;
    padding: 35px 40px 30px 40px;
  }
  ${MediaQueries.FromDesktop} {
    border-radius: 20px;
  }
`;

export const Header = styled.header`
  position: absolute;
  top: 40px;
  left: 50px;
  width: 220px;
  h3,
  h2 {
    font-weight: bold;
  }
  .name {
    text-transform: capitalize;
    font-size: 2rem;
  }
  .attributes p {
    margin-top: 10px;
  }
`;

export const Main = styled.main`
  display: flex;
  margin-bottom: 20px;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  ${MediaQueries.FromDesktop} {
    width: 70%;
    margin: 0 10% 0 5%;
    justify-content: flex-end;
  }
`;

export const Image = styled.img`
  max-width: 400px;
  max-height: 320px;
  min-width: 270px;
  width: 60%;
`;

export const StyledJapName = styled.h2`
  opacity: 0.4;
  color: black;
  font-size: 3rem;
  font-weight: bold;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 250px;
  ${MediaQueries.FromTablet} {
    transform: none;
    left: 100px;
    top: 75px;
    font-size: 6rem;
    opacity: 0.25;
    width: 600px;
  }
`;
