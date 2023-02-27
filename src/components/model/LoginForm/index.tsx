import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
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
import { zodResolver } from '@hookform/resolvers/zod';

import { SignUpSchema } from '@/feature/login/schema';
import { ISignUpFormValue } from '@/feature/login/types';

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

export type LoginApi = {
  setErrors: (errors: Record<string, string>) => void;
};

// type Props = {};

export const LoginForm = forwardRef<LoginApi>((_, ref) => {
  const {
    // register,
    // handleSubmit,
    setError,
    // formState: { errors, isSubmitting },
  } = useForm<ISignUpFormValue>({ resolver: zodResolver(SignUpSchema) });

  const [showPassword, setShowPassword] = useState(false);
  const handleShowClick = () => setShowPassword(!showPassword);

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
          <form>
            <Stack spacing={4} p="1rem" backgroundColor="whiteAlpha.900" boxShadow="md">
              <FormControl>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <CFaUserAlt color="gray.300" />
                  </InputLeftElement>
                  <Input type="text" placeholder="user id" />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" color="gray.300">
                    <CFaLock color="gray.300" />
                  </InputLeftElement>
                  <Input type={showPassword ? 'text' : 'password'} />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
              >
                ログイン
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
});

LoginForm.displayName = 'LoginForm';
