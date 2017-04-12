/**
 * @author jk
 * @version 1.0.0
 */
import $      from '../utils';
import Models from '../models';
import Base   from './base';

const VoteModel       = Models.V1.VoteModel;
const VoteRecordModel = Models.V1.VoteRecordModel;

const VoteAPI = new Base({
  model:  VoteModel,
  search: 'title'
})

VoteAPI.methods.create = VoteAPI.methods.addSchedule;

const VoteRecordAPI = new Base({
  model:  VoteRecordModel,
  search: 'title'
})


export default {
  vote:   VoteAPI.methods,
  record: VoteRecordAPI.methods
}
