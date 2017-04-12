/**
 * @author jk
 * @version 1.0.0
 */

import $      from '../../utils';
import auth   from '../../utils/auth';
import Models from '../../models';


const {UserModel} = Models.V1;


export default {
  // 登录
  login: async (req, res, next) => {

    let exist = await UserModel.find({openid: req.body.openid});

    // 如果不存在, 就创建用户
    if ($.isEmpty(exist)) {
      exist = await UserModel.create(req.body);
      return $.result(res, exist);
    }
    // 如果存在 检查状态
    else if (exist.status === -1) {
      return $.result(res, `status: ${exist.status}`);
    }

    $.result(res, exist);
  },

}
