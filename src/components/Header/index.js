import React, { useContext } from "react";
import { StyledHeader, PageTitle, SearchInput } from "./styles";
import { SearchContext } from "../../context/SearchContext";
import StyledDate from "../StyledDate";

const Header = () => {
  const [search, setSearch] = useContext(SearchContext);
  return (
    <StyledHeader>
      <PageTitle>
        Corona Dashboard - <StyledDate />
      </PageTitle>
      <SearchInput
        value={search}
        placeholder={"Ülke Ara"}
        onChange={(e) => setSearch(e.target.value)}
      ></SearchInput>
    </StyledHeader>
  );
};

export default Header;
