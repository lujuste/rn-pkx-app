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
import axios, { AxiosResponse } from "axios";
import { getPokemon, getPokemonsData } from "../../../../utils/pokeApi";

interface INavigation extends NativeStackNavigationProp<any, any> {}

interface RequestPokedexProps {
  count?: number;
  next?: string;
  previous?: any;
  results?: PokemonProps[];
}

interface PokemonProps {
  name: string;
  url: string;
}

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
      const responsePokemons:
        | AxiosResponse<RequestPokedexProps, any>
        | undefined = await getPokemon(20);

      const promises = responsePokemons?.data?.results?.map(async (pokemon) => {
        return await getPokemonsData(pokemon.url);
      });
      let results;
      if (promises) {
        results = await Promise.all(promises);
        setPokemons(results);
      }
      setLoading(false);
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
                    uri: pokemon?.sprites?.front_default,
                  }}
                />
              </DivRound>
              <DivName>
                <DivDetails>
                  <Text> {pokemon?.name.toUpperCase()} </Text>
                  <Description>
                    {pokemon &&
                      `Veja as principais\ncaracteristicas do ${pokemon?.name}`}
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
