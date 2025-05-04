import { HStack, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <HStack paddingY="5px">
      <Skeleton boxSize="32px" borderRadius={8} />
      <SkeletonText noOfLines={1} width="100px" />
    </HStack>
  );
};

export default GenreListSkeleton;
