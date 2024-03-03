import styles from './_.module.scss';
import { PollListProps } from './_.type';

export default function PollList({ items }: Readonly<PollListProps>) {
  return (
    <div className="table-responsive">
      <table className="table table-hover table-bordered align-middle caption-top">
        <caption>List of users</caption>
        <thead className="table-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">User</th>
            <th scope="col">Answered</th>
            <th scope="col">Asked</th>
          </tr>
        </thead>
        <tbody>
          {items.map((user, index) => (
            <tr key={user.id}>
              <th scope="row">{index + 1}</th>
              <td>
                <div className="d-flex align-items-center gap-2">
                  <img className={styles.avatar} src={user.avatarURL} alt={`avatar-${user.id}`} />

                  <div className="d-flex flex-column">
                    <h6 className="mb-0">{user.name}</h6>
                    <span className="text-secondary fs-7">{user.id}</span>
                  </div>
                </div>
              </td>
              <td>{user.answerCount}</td>
              <td>{user.questions.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
