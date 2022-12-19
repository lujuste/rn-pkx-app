import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
  useRef,
  ReactElement,
} from "react";

interface MainContextData {
  pokemons: any[];
  setPokemons: React.Dispatch<any>;
  searchActive: "open" | "closed";
  setSearchActive: React.Dispatch<React.SetStateAction<"open" | "closed">>;
  pokemonValue: string;
  setPokemonValue: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  notFoundValue: boolean;
  setNotFoundValue: React.Dispatch<React.SetStateAction<boolean>>;
  viewOptions: boolean;
  setViewOption: React.Dispatch<React.SetStateAction<boolean>>;
}

interface MainProviderProps {
  children: ReactElement;
}

const MainContext = createContext<MainContextData>({} as MainContextData);

const MainProvider: React.FC<MainProviderProps> = ({ children }) => {
  const [pokemons, setPokemons] = useState<any>([]);
  const [searchActive, setSearchActive] = useState<"open" | "closed">("closed");
  const [pokemonValue, setPokemonValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [notFoundValue, setNotFoundValue] = useState(false);
  const [viewOptions, setViewOption] = useState(false);

  return (
    <MainContext.Provider
      value={{
        pokemons,
        setPokemons,
        searchActive,
        setSearchActive,
        pokemonValue,
        setPokemonValue,
        loading,
        setLoading,
        notFoundValue,
        setNotFoundValue,
        viewOptions,
        setViewOption,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

// creating hook

function useMainHook(): MainContextData {
  const context = useContext(MainContext);

  if (!context) {
    throw new Error("useMainHook must be used with an MainProvider");
  }

  return context;
}

export { MainProvider, useMainHook };
