import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useState,useEffect } from "react";
import useData from "./useData";
import type { Genre } from "./usGenres";

export interface Platform{
  id:number;
  name:string;
  slug:string
}
export interface Game{
  id:number;
  name:string;
  background_image:string;
  parent_platforms:{platform:Platform}[];
  metacritic:number;
}

const useGames=(selectedGenre: Genre | null,selectedPlatform:Platform|null) => useData<Game>('/games',{params:{
  genres:selectedGenre?.id,platform:selectedPlatform?.id
}},[selectedGenre?.id,selectedPlatform?.id]);

export default useGames;