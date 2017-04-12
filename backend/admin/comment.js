/**
 * @author jk
 * @version 1.0.0
 */
import $      from '../utils';
import Models from '../models';
import Base   from './base';

const CommentModel = Models.V1.CommentModel;
const CommentAPI   = new Base({
  model: CommentModel,
  search: 'title'
})

CommentAPI.methods.all = async function (req, res, next) {
  $.result(res, await CommentModel.all({}, req.query.start));
}

export default CommentAPI.methods

