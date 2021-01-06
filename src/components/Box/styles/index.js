import styled from "styled-components";

export const BoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Item = styled.div`
  background-color: #fff;
  box-sizing: border-box;
  width: 19%;
  margin: 0 0.5% 1%;
  @media (max-width: 1920px) {
    width: 24%;
  }
  @media (max-width: 1600px) {
    width: 32%;
    margin: 0 auto 1%;
  }
  @media (max-width: 1280px) {
    width: 48%;
    margin: 0 1% 2%;
  }
  @media (max-width: 767px) {
    width: 100%;
    margin: 0 0 2%;
  }
`;

export const CountryFlagNameBox = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 0.6em 1.5em;
`;

export const CountryFlag = styled.img`
  width: 3em;
  margin-right: 1em;
`;

export const CountryName = styled.h2`
  color: #333;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CovidDataList = styled.ul`
  background-color: #f9f9f9;
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
  padding: 1em 1.5em;
`;

export const CovidDataListItem = styled.li`
  display: block;
`;

export const CovidDataName = styled.strong`
  display: block;
  color: #333;
  font-size: 1.2em;
  line-height: 1.8em;
  @media (max-width: 480px) {
    font-size: 1em;
    line-height: 1.5em;
  }
`;

export const CovidData = styled.p`
  color: #333;
  margin: 0;
  text-align: center;
  font-size: 1.6em;
  line-height: 1.6em;
`;
