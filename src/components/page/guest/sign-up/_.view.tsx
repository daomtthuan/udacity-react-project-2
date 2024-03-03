import AuthSignUpForm from '~components/feature/auth/sign-up-form';

export default function SignUpPage() {
  return (
    <div className="d-flex flex-column">
      <h2 className="text-center mt-2">Sign Up</h2>

      <AuthSignUpForm />
    </div>
  );
}
