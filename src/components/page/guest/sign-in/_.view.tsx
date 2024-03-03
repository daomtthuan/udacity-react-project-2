import AuthSignInForm from '~components/feature/auth/sign-in-form';

export default function SignInPage() {
  return (
    <div className="d-flex flex-column">
      <h2 className="text-center mt-2">Sign In</h2>

      <AuthSignInForm />
    </div>
  );
}
