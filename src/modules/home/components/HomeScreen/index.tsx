import React, { useCallback, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Button as ButtonNative,
  Text as TextNative,
  View as ViewNative,
  ActivityIndicator,
} from "react-native";
import Modal from "react-native-modal";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  Button,
  Container,
  Description,
  DivDetails,
  DivName,
  DivRound,
  Round,
  Text,
  View,
  ViewFlex,
  WrapperPokemon,
} from "./styles";
import Icon from "../../../../assets/home.svg";
import Header from "../Header";
import { MenuDots } from "../Header/styles";
import PopupMenu from "../PopupMenu";
import api from "../../../../services/api";
import axios from "axios";

interface INavigation extends NativeStackNavigationProp<any, any> {}

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<INavigation>();
  const [pokemons, setPokemons] = useState<any>([]);
  const [viewOptions, setViewOption] = useState(false);
  const [loading, setLoading] = useState(true);
  const handleModal = useCallback(() => {
    setViewOption(!viewOptions);
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const requestPokemons = await api.get("pokemon?limit=50");
        setPokemons(requestPokemons.data.results);
        const lengthOfPokemons = requestPokemons.data.results.length;
        const endpoints: any = [];

        for (let i = 1; i < lengthOfPokemons; i++) {
          endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
        }

        let response = axios
          .all(endpoints.map((endpoint: any) => axios.get(endpoint)))
          .then((res: any) => {
            setLoading(false);
            setPokemons(res);
          });
      } catch (err) {
        setLoading(false);
        console.log(err, "error when request pokemons");
      }
    })();
  }, []);

  return (
    <Container>
      <Header activeOptions={viewOptions} setActiveOptions={setViewOption} />
      {loading ? (
        <ViewFlex>
          <ActivityIndicator size="large" color="#02be91" />
        </ViewFlex>
      ) : (
        <View overScrollMode="never">
          {pokemons?.map((pokemon: any, index: number) => (
            <WrapperPokemon key={String(index)}>
              <DivRound>
                <Round
                  source={{
                    uri: pokemon?.data?.sprites?.front_default,
                  }}
                />
              </DivRound>
              <DivName>
                <DivDetails>
                  <Text> {pokemon?.data?.name.toUpperCase()} </Text>
                  <Description>
                    {pokemon.data &&
                      `Clique para conhecer melhor\no pokemon ${pokemon?.data?.name}`}{" "}
                  </Description>
                </DivDetails>
              </DivName>
            </WrapperPokemon>
          ))}
        </View>
      )}
    </Container>
  );
};

export default HomeScreen;
