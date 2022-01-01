import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import {
  BoxContainer,
  Item,
  CountryFlagNameBox,
  CountryName,
  CountryFlag,
  CovidDataList,
  CovidDataListItem,
  CovidDataName,
  CovidData,
} from "./styles";
import { Loading } from "../../styles/base";
import { SearchContext } from "../../context/SearchContext";

export const Box = () => {
  const [data, setData] = useState([]);
  const [search] = useContext(SearchContext);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://api.covid19api.com/summary`).then((res) => {
      setData(res.data.Countries);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    setFilteredData(
      data &&
        data.filter((item) => {
          return item.Country.toLowerCase().includes(search.toLowerCase());
        })
    );
  }, [data, search]);

  const imgUrl = "https://flagcdn.com/48x36/";
  const imgType = ".webp";

  if (loading) {
    return <Loading />;
  }

  return (
    <BoxContainer>
      {filteredData &&
        filteredData.map((item, index) => (
          
          <Item key={index}>
            <CountryFlagNameBox>
              <CountryFlag
                src={imgUrl + item.CountryCode.toLowerCase() + imgType}
                alt={item.Country}
                width={48}
                height={36}
              />
              <CountryName>{item.Country}</CountryName>
            </CountryFlagNameBox>
            <CovidDataList>
              <CovidDataListItem>
                <CovidDataName>Yeni Vaka</CovidDataName>
                <CovidData>{item.NewConfirmed}</CovidData>
              </CovidDataListItem>
              <CovidDataListItem>
                <CovidDataName>Vefat Sayısı</CovidDataName>
                <CovidData>{item.NewDeaths}</CovidData>
              </CovidDataListItem>
              <CovidDataListItem>
                <CovidDataName>İyileşen Hasta</CovidDataName>
                <CovidData>{item.NewRecovered}</CovidData>
              </CovidDataListItem>
            </CovidDataList>
          </Item>
        ))}
    </BoxContainer>
  );
};

export default Box;
