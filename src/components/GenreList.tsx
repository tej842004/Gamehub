import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

const GenreList = () => {
  const { data, isLoading, error } = useGenre();
  const skeletons = Array(25).fill(0);

  if (error) return null;

  return (
    <List>
      {isLoading &&
        skeletons.map((_, index) => <GenreListSkeleton key={index} />)}

      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button variant="link" fontSize="lg">
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
