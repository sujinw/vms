/**
 * @author jk
 * @version 1.0.0
 */

import Models from '../models';
import $      from '../utils';

const V1 = Models.V1;

export default {
  total: async function (req, res, next) {
    const User       = await V1.UserModel.count({});
    const Article    = await V1.ArticleModel.count({});
    const Comment    = await V1.CommentModel.count({});
    const Vote       = await V1.VoteModel.count({});
    const documents = {
      user:       User,
      article:    Article,
      comment:    Comment,
      vote:       Vote,
    }
    $.result(res, documents || {});
  }
}
