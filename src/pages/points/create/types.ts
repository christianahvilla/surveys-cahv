import { SurveySelectListDTO } from '~types/selects/survey-object.type';
import { TourSelectDTO } from '~types/selects/tours-object.type';

export interface ICreatePointLoader {
  surveys: SurveySelectListDTO;
  tours: TourSelectDTO;
}
