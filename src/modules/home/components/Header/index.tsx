import React, { useCallback, useEffect, useRef, useState } from "react";

import {
  AreaInput,
  Box,
  Button,
  ClosedButton,
  Container,
  FlexView,
  FlexViewLeft,
  InputDefault,
  InputWrapper,
  MenuDots,
  Text,
  TextLabel,
} from "./styles";
import SearchIcon from "../../../../assets/search.svg";
import DotsIcon from "../../../../assets/dots.svg";
import Ionicons from "react-native-vector-icons/Ionicons";
import PopupMenu from "../PopupMenu";
import { TouchCustom } from "../PopupMenu/styles";
// somewhere in your app
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import {
  Alert,
  Modal,
  SafeAreaView,
  Animated,
  View,
  Easing,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
} from "react-native";
import { useMainHook } from "../../hooks/main";
import { searchPokemon } from "../../../../utils/pokeApi";

interface HeaderProps {
  activeOptions?: boolean;
  setActiveOptions?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ activeOptions, setActiveOptions }) => {
  const {
    searchActive,
    setSearchActive,
    pokemonValue,
    setPokemonValue,
    pokemons,
    setPokemons,
    loading,
    setLoading,
    notFoundValue,
    setNotFoundValue,
    viewOptions,
    setViewOption,
  } = useMainHook();

  const handleActiveSearchBox = useCallback(
    (type: "open" | "closed") => {
      setSearchActive(type);
    },
    [searchActive]
  );

  const myOptionsLabel = [
    {
      name: "Feedback",
      action: () => {
        Alert.alert("Ola");
        console.log("foi");
      },
    },
    { name: "Upgrade", action: () => Alert.alert("Ola") },
    { name: "Shared App", action: () => Alert.alert("Ola") },
    { name: "Settings", action: () => Alert.alert("Ola") },
  ];

  const handleSearchPokemon = useCallback(
    async (event: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
      if (!event?.nativeEvent?.text) {
        handleActiveSearchBox("closed");
        setPokemonValue("");
        return;
      }

      try {
        setPokemons((state: any) => {
          let cloneState: any = [...state];
          cloneState = [];
          return cloneState;
        });
        setLoading(true);
        setPokemonValue(event?.nativeEvent?.text);
        const searching = await searchPokemon(event?.nativeEvent?.text);

        if (!searching) {
          setPokemons((state: any) => {
            let cloneState: any = [...state];
            cloneState = [];
            return cloneState;
          });
          setNotFoundValue((state) => !state);
          setLoading(false);
        } else {
          setNotFoundValue(false);
          setPokemons([searching]);
          setLoading(false);
        }

        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
        setNotFoundValue(true);
      }
    },
    [pokemons, pokemonValue, loading]
  );

  return (
    <Container
      onTouchStart={() => {
        setViewOption(false);
      }}
    >
      {searchActive === "open" ? (
        <>
          <InputWrapper>
            <ClosedButton>
              <Ionicons
                onPress={() => {
                  setNotFoundValue(false);
                  handleActiveSearchBox("closed");
                  setPokemonValue("");
                }}
                name="close"
                size={25}
              ></Ionicons>
            </ClosedButton>
            <AreaInput>
              <InputDefault onSubmitEditing={handleSearchPokemon} />
            </AreaInput>
          </InputWrapper>
        </>
      ) : (
        <>
          <FlexViewLeft>
            <Text>Pokedex</Text>
          </FlexViewLeft>
          <FlexView>
            <SearchIcon onPress={() => handleActiveSearchBox("open")} />

            <Menu>
              <MenuTrigger
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <View
                  style={{
                    width: 30,
                    height: "100%",
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <DotsIcon />
                </View>
              </MenuTrigger>
              <MenuOptions
                customStyles={{
                  optionsContainer: {
                    marginTop: 10,
                    marginLeft: 10,
                  },
                  optionsWrapper: {
                    marginTop: 2,
                  },
                }}
              >
                {myOptionsLabel.map((option, index) => (
                  <MenuOption onSelect={option.action} value={option.name}>
                    <Text
                      style={{
                        color: "black",
                        fontSize: 20,
                        marginTop: 6,
                        marginBottom: 6,
                        marginLeft: 10,
                      }}
                    >
                      {option.name}
                    </Text>
                  </MenuOption>
                ))}
              </MenuOptions>
            </Menu>
          </FlexView>
        </>
      )}
    </Container>
  );
};

export default Header;
