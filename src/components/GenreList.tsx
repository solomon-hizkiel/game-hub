import useData from "@/hooks/useData";
import useGenres, { type Genre } from "@/hooks/usGenres";
import getCroppedImageUrl from "@/services/image-url";
import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import React from "react";

const GenreList = () => {
  const { data } = useGenres();

  //if (isLoading) return <div>Loading...</div>;
  //if (error) return <div>Error: {error}</div>;

  return (
    <List.Root>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image boxSize="32px" borderRadius={8} src={getCroppedImageUrl (genre.image_background)} />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List.Root>
  );
};
export default GenreList;
