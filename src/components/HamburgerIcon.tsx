import {
  Button,
  HStack,
  IconButton,
  Image,
  List,
  ListItem,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import useGenre from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

const HamburgerIcon = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);
  const { data, isLoading, error } = useGenre();
  const skeletons = Array.from({ length: 25 }, (_, i) => i + 1);

  if (error) return null;

  return (
    <>
      <IconButton
        aria-label="Search"
        icon={<FaBars size="60px" />}
        ref={btnRef}
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Generes</DrawerHeader>

          <DrawerBody>
            {data.map((genre) => (
              <List>
                {isLoading &&
                  skeletons.map((_, index) => (
                    <GenreListSkeleton key={index} />
                  ))}
                <ListItem key={genre.id} paddingY="5px">
                  <HStack>
                    <Image
                      boxSize="32px"
                      borderRadius={8}
                      src={getCroppedImageUrl(genre.image_background)}
                      objectFit="cover"
                    />
                    <Button
                      whiteSpace="normal"
                      textAlign="left"
                      // fontWeight={
                      //   genre.id === selectedGenre?.id ? "bold" : "normal"
                      // }
                      // onClick={() => onSelectGenre(genre)}
                      variant="link"
                      fontSize="lg"
                    >
                      {genre.name}
                    </Button>
                  </HStack>
                </ListItem>
              </List>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default HamburgerIcon;
