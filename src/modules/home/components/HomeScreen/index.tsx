import React, { useCallback, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator, FlatList, useWindowDimensions } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  Container,
  Description,
  DivDetails,
  DivName,
  DivRound,
  EmptyContainer,
  Rect,
  Round,
  Text,
  TextPokemonNotFound,
  TextType,
  ViewFlex,
  WrapperPokemon,
} from "./styles";
import Header from "../Header";
import { AxiosResponse } from "axios";
import { getPokemon, getPokemonsData } from "../../../../utils/pokeApi";
import { useMainHook } from "../../hooks/main";

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
  const { height, width } = useWindowDimensions();

  const navigation = useNavigation<INavigation>();
  const {
    pokemons,
    setPokemons,
    pokemonValue,
    loading,
    setLoading,
    notFoundValue,
    viewOptions,
    setViewOption,
  } = useMainHook();

  const handleModal = useCallback(() => {
    setViewOption(!viewOptions);
  }, []);

  const WrapperPoke = (data: any) => {
    return (
      <WrapperPokemon
        onPress={() =>
          navigation.navigate("PokemonScreen", {
            pokemonId: data?.pokemon?.id,
            pokemonName: data?.pokemon?.name,
          })
        }
      >
        <DivRound>
          <Round
            source={{
              uri: data?.pokemon?.sprites?.front_default,
            }}
          />
        </DivRound>
        <DivName>
          <DivDetails>
            <Text> {data?.pokemon?.name?.toUpperCase()} </Text>
            <Description>
              {data?.pokemon?.types?.map((type: any) => (
                <Rect type={type?.type?.name}>
                  <TextType>{type?.type?.name} </TextType>
                </Rect>
              ))}
            </Description>
          </DivDetails>
        </DivName>
      </WrapperPokemon>
    );
  };

  const EmptyPokemonData = () => {
    return (
      <EmptyContainer height={height}>
        <TextPokemonNotFound>
          Sorry, but this pokemon not exist :(
        </TextPokemonNotFound>
      </EmptyContainer>
    );
  };

  useEffect(() => {
    (async () => {
      try {
        if (!notFoundValue) {
          setLoading(true);
        }
        const responsePokemons:
          | AxiosResponse<RequestPokedexProps, any>
          | undefined = await getPokemon(20);
        const promises = responsePokemons?.data?.results?.map(
          async (pokemon) => {
            return await getPokemonsData(pokemon.url);
          }
        );
        let results;
        if (promises) {
          results = await Promise.all(promises);
          if (!pokemonValue) {
            setPokemons([...results]);
          }
        }
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    })();
  }, [pokemonValue]);

  return (
    <Container>
      <Header />
      {loading ? (
        <ViewFlex>
          <ActivityIndicator size="large" color="#02be91" />
        </ViewFlex>
      ) : (
        <>
          {pokemons ? (
            <FlatList
              data={pokemons}
              contentContainerStyle={{ marginBottom: 40 }}
              renderItem={({ item }) => <WrapperPoke pokemon={item} />}
              style={{ marginHorizontal: 20 }}
              keyExtractor={(item) => String(Math.random())}
              ListEmptyComponent={EmptyPokemonData}
            />
          ) : (
            <></>
          )}
        </>
      )}
    </Container>
  );
};

export default HomeScreen;
