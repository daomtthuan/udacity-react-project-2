import QuestionItem from '~components/feature/app/question-item';

import { QuestionListProps } from './_.type';

export default function QuestionList({ title, items, buttonText }: Readonly<QuestionListProps>) {
  return (
    <div className="border d-flex flex-column rounded shadow-sm">
      <div className="border-bottom bg-light p-3 text-center">
        <h2 className="text-primary mb-0">{title}</h2>
      </div>

      <div className="bg-white p-3">
        <div className="row row-cols-1 row-cols-md-3 g-3">
          {items.map((item) => (
            <div key={item.id} className="col">
              <QuestionItem className="h-100" question={item} buttonText={buttonText} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
