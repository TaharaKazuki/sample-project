import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { SignUpSchema } from '../schema';
import { ISignUpFormValue } from '../types';

// import { useAuth } from '@/feature/auth/hooks';

export const useLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowClick = () => setShowPassword(!showPassword);
  // const { login } = useAuth();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<ISignUpFormValue>({ resolver: zodResolver(SignUpSchema) });

  // login({ name: 'sample', password: '1111' });

  return {
    register,
    handleSubmit,
    setError,
    errors,
    // login,
    isSubmitting,
    showPassword,
    handleShowClick,
  };
};
