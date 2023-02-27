import { forwardRef, useImperativeHandle, useRef } from 'react';
import { FaLock, FaUserAlt } from 'react-icons/fa';
import {
  Avatar,
  Box,
  Button,
  chakra,
  Flex,
  FormControl,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
} from '@chakra-ui/react';

import { useLogin } from '@/feature/login/hooks/useLogin';

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

export type LoginApi = {
  setErrors: (errors: Record<string, string>) => void;
};

export const LoginForm = forwardRef<LoginApi>((_, ref) => {
  const {
    register,
    errors,
    showPassword,
    handleShowClick,
    setError,
    handleSubmit,
    login,
    isLoading,
  } = useLogin();

  const setErrorRef = useRef(setError);
  setErrorRef.current = setError;

  useImperativeHandle(ref, () => {
    return {
      setErrors: (errors: Record<string, string>) => {
        Object.entries(errors).forEach(([key, value]) => {
          setErrorRef.current(key as 'password' | 'name', {
            message: value,
          });
        });
      },
    };
  });

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100%"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack flexDir="column" mb="2" justifyContent="center" alignItems="center">
        <Avatar bg="teal.500" />
        <Heading color="teal.400">ようこそ</Heading>
        <Box minW={{ base: '90%', md: '468px' }}>
          <form
            onSubmit={handleSubmit((param) => {
              login(param);
            })}
          >
            <Stack spacing={4} p="1rem" backgroundColor="whiteAlpha.900" boxShadow="md">
              <FormControl>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <CFaUserAlt color="gray.300" />
                  </InputLeftElement>
                  <Input type="text" placeholder="name" {...register('name')} />
                </InputGroup>
                {errors ? <div>{errors.name?.message}</div> : null}
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" color="gray.300">
                    <CFaLock color="gray.300" />
                  </InputLeftElement>
                  <Input type={showPassword ? 'text' : 'password'} {...register('password')} />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                {errors ? <div>{errors.password?.message}</div> : null}
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
              >
                {isLoading ? '送信中...' : 'ログイン'}
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
});

LoginForm.displayName = 'LoginForm';
