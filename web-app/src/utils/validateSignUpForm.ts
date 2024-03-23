const validateEmail = (email: string) => {
  const validator = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$');
  return validator.test(email);
};

const validatePassword = (password: string) => {
  const validator = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[^\\da-zA-Z]).{8,}$');
  return validator.test(password);
};

const validateConfirmPassword = (password: string, confirmPassword: string) => {
  return password === confirmPassword;
};

interface FormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

export default function validateSignUpForm({ email, password, confirmPassword }: FormValues) {
  if (!validateEmail(email)) return { success: false, message: 'Invalid email' };
  if (!validatePassword(password)) return { success: false, message: 'Invalid password' };
  if (!validateConfirmPassword(password, confirmPassword)) {
    return { success: false, message: 'Passwords do not match' };
  }

  return { success: true };
}
