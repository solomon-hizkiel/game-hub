import useData from "@/hooks/useData";
import useGenres, { type Genre } from "@/hooks/usGenres";
import getCroppedImageUrl from "@/services/image-url";
import { Button, HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import type { PropsOf } from "@emotion/react";
import React from "react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;

}

const GenreList = ({selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  

  if (isLoading) return <Spinner  />;
  if (error) return null;

  return (
    <List.Root>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image boxSize="32px" borderRadius={8} src={getCroppedImageUrl (genre.image_background)} />
            {/*<Text fontSize='lg'>{genre.name}</Text>*/}
            <Button fontWeight={genre.id===selectedGenre?.id ? 'bold' : 'normal'} onClick={() => onSelectGenre(genre)} fontSize="lg" variant="ghost">{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List.Root>
  );
};
export default GenreList;
