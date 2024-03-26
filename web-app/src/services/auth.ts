const baseApiUrl = (import.meta as any).env.VITE_API_URL;

interface SignUpUserProps {
  email: string;
  password: string;
}
export const signUpUser = async ({ email, password }: SignUpUserProps) => {
  const result = await fetch(`${baseApiUrl}auth/sign-up`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userEmail: email, userPassword: password })
  });
  const data = await result.json();
  return { success: result.status === 201, data };
};

interface VerifyUserCode {
  email: string;
  verificationCode: string;
}
export const verifyUserCode = async ({ email, verificationCode }: VerifyUserCode) => {
  const result = await fetch(`${baseApiUrl}auth/verify-code`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userEmail: email, verificationCode })
  });
  return { success: result.status === 204 };
};
