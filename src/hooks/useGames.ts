import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useState,useEffect } from "react";
import useData from "./useData";
import type { Genre } from "./usGenres";
import type { GameQuery } from "@/App";

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
  rating_top:number;
}

const useGames=(gameQuery:GameQuery) => useData<Game>('/games',{params:{
  genres:gameQuery.genre?.id,
  platform:gameQuery.platform?.id,ordering:gameQuery.sortOrder,
  Search:gameQuery.searchText
}},[gameQuery]);

export default useGames;