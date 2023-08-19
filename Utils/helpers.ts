import { UserCredentials } from "./types";

export const isEmpty = (value: string): boolean => {
    return value.length === 0;
  };
  
  export const isShorterThan = (value: string, length: number): boolean => {
    return value.length < length;
  };
  
  export const isValidEmail = (value: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };
  
  export const emailValidationError = (email: string): string => {
    if (isEmpty(email)) return "can't be blank";
    if (isShorterThan(email, 6)) return "must be at least 6 characters";
    if (!isValidEmail(email)) return "must be a valid email address";
    return "";
  };

  export const validateSignup = (credentials: UserCredentials) => {
    const emailError = emailValidationError(credentials.email);
    if (emailError) return emailError;
  
    if (isEmpty(credentials.name)) return "Name can't be blank";
  
    if (isEmpty(credentials.password)) return "Password can't be blank";
  
    if (credentials.password !== credentials.confirmPassword) return "Passwords do not match";
  
    return null;
  };