export const isEmailValid = (email) => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  export const isStrongPassword = (password) => {
    const minimumLengthRegex = /^.{6,}$/;

    return minimumLengthRegex.test(password);
  };