import classNames from 'classnames';
import QuestionItem from '~components/feature/employee-polls/question-item';

import { QuestionListProps } from './_.type';

export default function QuestionList({ parentId, id, title, items, buttonText, show }: Readonly<QuestionListProps>) {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="fs-4 fw-medium text-primary text-center accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${id}`}
          aria-expanded="false"
          aria-controls={id}
        >
          {title}
        </button>
      </h2>

      <div
        id={id}
        className={classNames('accordion-collapse collapse', {
          show: show,
        })}
        data-bs-parent={`#${parentId}`}
      >
        <div className="accordion-body">
          <div className="row row-cols-1 row-cols-md-3 g-3">
            {items.map((item) => (
              <div key={item.id} className="col">
                <QuestionItem className="h-100" question={item} buttonText={buttonText} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
