import { AVAILABLE_QUESTION_TYPE } from './constants';

export const displayAvailableQuestionType = () =>
  AVAILABLE_QUESTION_TYPE.map((type) => (
    <option value={type.value} key={type.value}>
      {type.text}
    </option>
  ));
