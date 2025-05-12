import React from "react";

import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  IconButton,
  Image,
  List,
  ListItem,
  Spinner,
  useDisclosure,
} from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";

import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";

const GenreDrawerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);
  const { data, error, isLoading } = useGenres();

  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

  const { data: genres } = useGenres();
  const selectedGenre = genres.results.find((g) => g.id === selectedGenreId);

  if (error) return null;

  return (
    <>
      <IconButton
        aria-label="open menu"
        icon={<FaBars size="24px" />}
        ref={btnRef}
        onClick={onOpen}
        variant="ghost"
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent maxW="200px">
          <DrawerCloseButton />
          <DrawerHeader>Genres</DrawerHeader>

          <DrawerBody>
            {isLoading && (
              <Box display="flex" justifyContent="center" height="100%">
                <Spinner />
              </Box>
            )}
            <List spacing={3}>
              {data.results.map((genre) => (
                <ListItem key={genre.id}>
                  <HStack>
                    <Image
                      boxSize="32px"
                      borderRadius={8}
                      src={getCroppedImageUrl(genre.image_background)}
                      objectFit="cover"
                      alt={genre.name}
                    />
                    <Button
                      whiteSpace="normal"
                      textAlign="left"
                      variant="link"
                      fontSize="lg"
                      fontWeight={
                        genre.id === selectedGenre?.id ? "bold" : "normal"
                      }
                      onClick={() => setSelectedGenreId(genre.id)}
                    >
                      {genre.name}
                    </Button>
                  </HStack>
                </ListItem>
              ))}
            </List>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default GenreDrawerMenu;
