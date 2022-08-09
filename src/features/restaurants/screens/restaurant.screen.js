import React from "react";

import { SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { RestaurantInfoCard } from "../components";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar?.currentHeight
    ? StatusBar.currentHeight + "px"
    : "0px"};
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]}; ;
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <RestaurantListContainer>
      <RestaurantInfoCard />
    </RestaurantListContainer>
  </SafeArea>
);
