import React from "react";
import type { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import PlatformIconsList from "./PlatformIconsList";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card.Root borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <Card.Body>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformIconsList platforms={game.parent_platforms.map((p) => p.platform)} />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
