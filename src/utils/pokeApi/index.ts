import { AxiosResponse } from "axios";
import api from "../../services/api";
import axios from "axios";

interface RequestPokedexProps {
  count: number;
  next: string;
  previous: any;
  results: PokemonProps[];
}

interface PokemonProps {
  name: string;
  url: string;
}

export const searchPokemon = async (pokemon: string) => {
  try {
    let url: RequestPokedexProps = await api.get(`pokemon/${pokemon}`);
    return url;
  } catch (err) {
    console.log(err, "error when get search pokemon");
  }
};

export const getPokemon = async (limit?: number) => {
  try {
    let response: AxiosResponse<RequestPokedexProps> = await api.get(
      `pokemon?limit=${limit}`
    );
    return response;
  } catch (err) {
    console.log(err, "error when get pokemon");
  }
};

export const getPokemonsData = async (url: string) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (err) {
    console.log(err, "error when get pokemon");
  }
};
