import React from "react";
import { View, Text } from "react-native";
import Header from "../Header";
import {
  Container,
  HeaderPokemon,
  LeftWrapper,
  RightWrapper,
  TextPokemon,
} from "./styles";

import BackIcon from "./assets/back-icon.svg";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// import { Container } from './styles';

const PokemonScreen: React.FC = () => {
  interface INavigation extends NativeStackNavigationProp<any, any> {}

  const navigation = useNavigation<INavigation>();

  return (
    <Container>
      <HeaderPokemon>
        <LeftWrapper>
          <TextPokemon>447 Riolu</TextPokemon>
        </LeftWrapper>
        <RightWrapper onPress={() => navigation.goBack()}>
          <BackIcon />
        </RightWrapper>
      </HeaderPokemon>
    </Container>
  );
};

export default PokemonScreen;
