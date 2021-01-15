import styled from "styled-components";
import { backgroundColors } from "./theme";

export const StyledContainer = styled.div`
  border-radius: 20px;
  padding: 35px 40px 30px 40px;
  background-color: ${(props) => {
    return props.types
      ? backgroundColors[
          props.types[Math.floor(Math.random() * props.types.length)]
        ]
      : "default";
  }};
`;

export const Header = styled.header`
  position: absolute;
  top: 40px;
  left: 50px;
  .name {
    text-transform: capitalize;
    font-size: 2rem;
  }
  .attributes {
    width: 27%;
  }
`;

export const Main = styled.main`
  display: flex;
  margin-bottom: 20px;
`;

export const ImageContainer = styled.div`
  width: 70%;
  margin: 0 10% 0 5%;
  display: flex;
  justify-content: flex-end;
`;

export const Image = styled.img`
  max-width: 400px;
  max-height: 320px;
  min-width: 270px;
  width: 60%;
`;

export const StyledJapName = styled.h2`
  opacity: 0.25;
  color: black;
  font-size: 6rem;
  font-weight: bold;
`;
