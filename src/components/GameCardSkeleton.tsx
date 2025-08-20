import { Card, HStack, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card.Root>
      <Skeleton height="200px" />
      <Card.Body>
        <SkeletonText height="20px" width="80%" />
        <HStack justifyContent='space-between'>
          <Skeleton height="20px" width="40%" />
          <Skeleton height="20px" width="20%" />
        </HStack>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCardSkeleton;
