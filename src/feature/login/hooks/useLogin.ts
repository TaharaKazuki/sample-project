import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { SignUpSchema } from '../schema';
import { ISignUpFormValue } from '../types';

export const useLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowClick = () => setShowPassword(!showPassword);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<ISignUpFormValue>({ resolver: zodResolver(SignUpSchema) });

  return {
    register,
    handleSubmit,
    setError,
    errors,
    isSubmitting,
    showPassword,
    handleShowClick,
  };
};
