import React from "react";

import {
  Button,
  HStack,
  IconButton,
  Image,
  List,
  ListItem,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";

import useGenre, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreDrawerMenu = ({ onSelectGenre, selectedGenre }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);
  const { data, error } = useGenre();

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
          <DrawerHeader>Generes</DrawerHeader>

          <DrawerBody>
            <List spacing={3}>
              {data.map((genre) => (
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
                      onClick={() => onSelectGenre(genre)}
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
