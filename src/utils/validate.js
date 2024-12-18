export const checkVaildDataSignIn = (email, password) => {
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]*$/.test(
      password
    );

  if (!isEmailValid && isPasswordValid) {
    return "Email is not valid";
  }
  if (!isPasswordValid && isEmailValid) {
    return "Password is not valid";
  }
  if (!isEmailValid && !isPasswordValid) {
    return "Email and Password is not valid";
  }
  return null;
};
export const checkVaildDataSignUp = (name, email, password) => {
  const isNameValid = /^[a-zA-Z][a-zA-Z0-9_]{2,15}$/.test(name);

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]*$/.test(
      password
    );
  if (!isNameValid && isEmailValid && isPasswordValid) {
    return "Username is not valid";
  }
  if (!isEmailValid && isPasswordValid && isNameValid) {
    return "Email is not valid";
  }
  if (!isPasswordValid && isEmailValid && isNameValid) {
    return "Password is not valid";
  }
  if (!isEmailValid && !isPasswordValid && !isNameValid) {
    return "Email, Password and Username is not valid";
  }
  return null;
};
