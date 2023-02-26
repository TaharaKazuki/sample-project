import { Outlet } from 'react-router-dom';
import { Box, Flex, HStack, useColorModeValue } from '@chakra-ui/react';

export const NavBar = () => {
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={'60px'} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={8} alignItems={'center'}>
            <Box>Global Header</Box>
          </HStack>
        </Flex>
      </Box>

      <Box h={`calc(100vh - 60px)`}>
        <Outlet />
      </Box>
    </>
  );
};
