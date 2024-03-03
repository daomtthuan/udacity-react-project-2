import AuthSignIn from '~components/feature/auth/sign-in';

export default function SignInPage() {
  return (
    <div className="d-flex flex-column">
      <h2 className="text-center mt-2">Sign In</h2>

      <AuthSignIn />
    </div>
  );
}
