import PollCreate from '~components/feature/app/poll-create';
import { useAppSelector } from '~plugins/store';

export default function AddPage() {
  const authUser = useAppSelector((state) => state.auth.user);

  if (!authUser) {
    return null;
  }

  return (
    <div className="container d-flex flex-column gap-5 py-5">
      <div className="bg-light border rounded shadow-sm py-3 px-4">
        <h2 className="text-primary text-center">Would You Rather</h2>
        <h5 className="text-secondary text-center">Create Your Own Poll</h5>

        <PollCreate userId={authUser.id} />
      </div>
    </div>
  );
}
