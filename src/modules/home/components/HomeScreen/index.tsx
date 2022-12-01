import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  Button,
  Container,
  DivDetails,
  DivName,
  DivRound,
  Round,
  Text,
  View,
  WrapperPokemon,
} from "./styles";
import Icon from "../../../../assets/home.svg";
import Header from "../Header";

interface INavigation extends NativeStackNavigationProp<any, any> {}

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<INavigation>();

  return (
    <Container>
      <Header />
      <View>
        <WrapperPokemon>
          <DivRound>
            <Round />
          </DivRound>
          <DivName>
            <DivDetails></DivDetails>
          </DivName>
        </WrapperPokemon>

        <WrapperPokemon>
          <DivRound>
            <Round />
          </DivRound>
          <DivName>
            <DivDetails></DivDetails>
          </DivName>
        </WrapperPokemon>

        <WrapperPokemon>
          <DivRound>
            <Round />
          </DivRound>
          <DivName>
            <DivDetails></DivDetails>
          </DivName>
        </WrapperPokemon>

        <WrapperPokemon>
          <DivRound>
            <Round />
          </DivRound>
          <DivName>
            <DivDetails></DivDetails>
          </DivName>
        </WrapperPokemon>
        <WrapperPokemon>
          <DivRound>
            <Round />
          </DivRound>
          <DivName>
            <DivDetails></DivDetails>
          </DivName>
        </WrapperPokemon>
        <WrapperPokemon>
          <DivRound>
            <Round />
          </DivRound>
          <DivName>
            <DivDetails></DivDetails>
          </DivName>
        </WrapperPokemon>
        <WrapperPokemon>
          <DivRound>
            <Round />
          </DivRound>
          <DivName>
            <DivDetails></DivDetails>
          </DivName>
        </WrapperPokemon>
        <WrapperPokemon>
          <DivRound>
            <Round />
          </DivRound>
          <DivName>
            <DivDetails></DivDetails>
          </DivName>
        </WrapperPokemon>
        <WrapperPokemon>
          <DivRound>
            <Round />
          </DivRound>
          <DivName>
            <DivDetails></DivDetails>
          </DivName>
        </WrapperPokemon>
      </View>
    </Container>
  );
};

export default HomeScreen;
