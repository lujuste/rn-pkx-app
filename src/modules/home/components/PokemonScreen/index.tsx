import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  useWindowDimensions,
} from "react-native";
import Header from "../Header";
import {
  Circle,
  Container,
  Description,
  HeaderPokemon,
  HeadingDescription,
  LeftWrapper,
  LoadingWrapper,
  RightWrapper,
  ScrollView,
  TextDescription,
  TextPokemon,
  Type,
  WrapperDescription,
  WrapperImage,
} from "./styles";

import BackIcon from "./assets/back-icon.svg";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ViewFlex } from "../HomeScreen/styles";

// import { Container } from './styles';
interface RouteProps {
  pokemonId?: any;
  pokemonName?: any;
}

const PokemonScreen: React.FC = () => {
  interface INavigation extends NativeStackNavigationProp<any, any> {}

  const navigation = useNavigation<INavigation>();
  const route = useRoute();
  const { pokemonId, pokemonName }: any = route.params;
  const [loading, setLoading] = useState(true);
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    // console.log(pokemonId, pokemonName, "oi");
    (async () => {})();
  }, []);

  return (
    <Container>
      <HeaderPokemon>
        <LeftWrapper>
          <TextPokemon> {`${pokemonId} ${pokemonName}`} </TextPokemon>
        </LeftWrapper>
        <RightWrapper onPress={() => navigation.goBack()}>
          <BackIcon />
        </RightWrapper>
      </HeaderPokemon>
      <ScrollView>
        {loading ? (
          <LoadingWrapper height={height}>
            <ActivityIndicator size="large" color="#02be91" />
          </LoadingWrapper>
        ) : (
          <>
            <WrapperImage>
              <Circle>
                <Image
                  // source={{ uri: "https://reactjs.org/logo-og.png" }}
                  source={require("./assets/poketest.png")}
                  style={{ width: 200, height: 200 }}
                />
              </Circle>
            </WrapperImage>
            <WrapperDescription>
              <Type>
                <Text style={{ fontSize: 19, color: "#fff", marginBottom: 3 }}>
                  Fighting
                </Text>
              </Type>
              <Description>
                <HeadingDescription>Description</HeadingDescription>
                <TextDescription>
                  It is tough enough yo run right through the night, and it is
                  also a hard worker, but it is still just a youngster.
                </TextDescription>

                <HeadingDescription style={{ marginTop: 20 }}>
                  Specie
                </HeadingDescription>
                <TextDescription>Emanation</TextDescription>
              </Description>
            </WrapperDescription>
          </>
        )}
      </ScrollView>
    </Container>
  );
};

export default PokemonScreen;
