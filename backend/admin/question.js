/**
 * @author eric
 * @version 1.0.0
 */
import $      from '../utils';
import Models from '../models';
import Base   from './base';

const QuestionModel = Models.V1.QuestionModel;
const QuestionAPI = new Base({
  model: QuestionModel,
  search: 'title'
})

QuestionAPI.methods.create = QuestionAPI.methods.addSchedule;

export default QuestionAPI.methods
