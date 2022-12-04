import React, { useCallback, useState } from "react";

import {
  AreaInput,
  Button,
  ClosedButton,
  Container,
  FlexView,
  FlexViewLeft,
  InputDefault,
  InputWrapper,
  MenuDots,
  Text,
} from "./styles";
import SearchIcon from "../../../../assets/search.svg";
import DotsIcon from "../../../../assets/dots.svg";
import Ionicons from "react-native-vector-icons/Ionicons";

interface HeaderProps {
  activeOptions?: boolean;
  setActiveOptions: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ activeOptions, setActiveOptions }) => {
  const [searchActive, setSearchActive] = useState<"open" | "closed">("closed");

  const handleActiveSearchBox = useCallback(
    (type: "open" | "closed") => {
      setSearchActive(type);
    },
    [searchActive]
  );

  return (
    <Container
      onTouchStart={() => {
        setActiveOptions(false);
      }}
    >
      {searchActive === "open" ? (
        <>
          <InputWrapper>
            <ClosedButton>
              <Ionicons
                onPress={() => handleActiveSearchBox("closed")}
                name="close"
                size={25}
              ></Ionicons>
            </ClosedButton>
            <AreaInput>
              <InputDefault />
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
            <DotsIcon onPress={() => setActiveOptions((state) => !state)} />
          </FlexView>
        </>
      )}
    </Container>
  );
};

export default Header;
