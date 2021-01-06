import React from "react";
import { AppContainer } from "./styles/base";
import Header from "./components/Header";
import { Box } from "./components/Box";
import { SearchProvider } from "./context/SearchContext";

const App = () => {
  return (
    <AppContainer>
      <SearchProvider>
        <Header />
        <Box />
      </SearchProvider>
    </AppContainer>
  );
};

export default App;
