import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 767px) {
    flex-direction: column;
    padding-bottom: 2%;
  }
`;

export const PageTitle = styled.h1`
  display: block;
  text-align: center;
  color: #333;
  font-size: 2.5em;
  line-height: 1em;
  margin: 0.6em 0.6em 0.6em 0;
  padding-right: 0.6em;
  border-right: 1px solid #ddd;
  @media (max-width: 1440px) {
    font-size: 2.2em;
  }
  @media (max-width: 1024px) {
    font-size: 1.8em;
  }
  @media (max-width: 767px) {
    font-size: 1.2em;
    border: 0;
    padding-right: 0;
    margin-right: 0;
  }
`;

export const SearchInput = styled.input`
  border: 1px solid #ddd;
  height: 2.5em;
  width: 15em;
  font-size: 1em;
  line-height: 1em;
  color: #333;
  box-sizing: border-box;
  padding: 0 1em;
  outline: none;
  @media (max-width: 1024px) {
    height: 2.2em;
  }
  @media (max-width: 767px) {
    width: 75%;
  }
  @media (max-width: 480px) {
    width: 95%;
  }
`;
