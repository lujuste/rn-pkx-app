import React, { useState } from "react";
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
import { MenuDots } from "../Header/styles";

interface INavigation extends NativeStackNavigationProp<any, any> {}

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<INavigation>();

  const [viewOptions, setViewOption] = useState(false);

  return (
    <Container>
      {viewOptions && (
        <MenuDots
          style={{
            elevation: 15,
            shadowColor: "#000",
            shadowOffset: {
              width: 40,
              height: 42,
            },
            shadowOpacity: 1,
            shadowRadius: 23.84,
          }}
        ></MenuDots>
      )}
      <Header activeOptions={viewOptions} setActiveOptions={setViewOption} />
      <View overScrollMode="never">
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
