import React, { useCallback, useState } from "react";

import {
  AreaInput,
  Button,
  ClosedButton,
  Container,
  FlexView,
  FlexViewLeft,
  InputWrapper,
  Text,
} from "./styles";
import SearchIcon from "../../../../assets/search.svg";
import DotsIcon from "../../../../assets/dots.svg";

const Header: React.FC = () => {
  const [searchActive, setSearchActive] = useState<"open" | "closed">("closed");

  const handleActiveSearchBox = useCallback(
    (type: "open" | "closed") => {
      setSearchActive(type);
    },
    [searchActive]
  );

  return (
    <Container>
      {searchActive === "open" ? (
        <>
          <InputWrapper>
            <ClosedButton></ClosedButton>
            <AreaInput></AreaInput>
          </InputWrapper>
        </>
      ) : (
        <>
          <FlexViewLeft>
            <Text>Pokedex</Text>
          </FlexViewLeft>
          <FlexView>
            <SearchIcon onPress={() => handleActiveSearchBox("open")} />
            <DotsIcon />
          </FlexView>
        </>
      )}
    </Container>
  );
};

export default Header;
