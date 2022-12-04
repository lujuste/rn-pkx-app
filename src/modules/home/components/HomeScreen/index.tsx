import React, { useCallback, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Button as ButtonNative,
  Text as TextNative,
  View as ViewNative,
} from "react-native";
import Modal from "react-native-modal";
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
import PopupMenu from "../PopupMenu";

interface INavigation extends NativeStackNavigationProp<any, any> {}

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<INavigation>();

  const [viewOptions, setViewOption] = useState(false);

  const handleModal = useCallback(() => {
    setViewOption(!viewOptions);
  }, []);

  return (
    <Container>
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
