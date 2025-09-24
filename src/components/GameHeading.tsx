import type { GameQuery } from "@/App";
import { Heading } from "@chakra-ui/react";
import {  } from "react";
interface Props{
  gameQuery:GameQuery
}

const GameHeading =({gameQuery}:Props)=>{

  const heading=`${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`
  return(
    <Heading as='h1' fontSize='3xl' my={5} marginY={5}>{heading}</Heading>
  )
}

export default GameHeading;