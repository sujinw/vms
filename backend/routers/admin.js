/**
 * @author jk
 * @version 1.0.0
 */

import express from 'express'
import Admin   from '../admin'
import auth    from '../utils/auth'

const authSession = auth.authSession;
const router      = express.Router();

//  用户

router.get('/users',      authSession, Admin.User.all);
router.route('/user/:id', authSession)
      .get(Admin.User.find)
      .post(Admin.User.create)
      .put(Admin.User.update)
      .delete(Admin.User.delete);



router.post('/account/login',         Admin.User.login);
router.post('/account/logout',        Admin.User.logout);
router.post('/account/resetPassword', authSession, Admin.User.resetPassword);


//  文章

router.get('/articles',             authSession, Admin.Article.all);
router.get('/article/:id',          authSession, Admin.Article.find);
router.post('/article',             authSession, Admin.Article.create);
router.put('/article/update/index', authSession, Admin.Article.updateIndex);
router.put('/article/:id',          authSession, Admin.Article.update);
router.delete('/article/:id',       authSession, Admin.Article.delete);



//  投票

router.get('/votes',      authSession, Admin.Vote.vote.all);
router.post('/vote',      authSession, Admin.Vote.vote.create);
router.route('/vote/:id', authSession)
      .get(Admin.Vote.vote.find)
      .put(Admin.Vote.vote.update)
      .delete(Admin.Vote.vote.delete);


//  投票记录

router.get('/voterecords',      authSession, Admin.Vote.record.all);
router.post('/voterecord',      authSession, Admin.Vote.record.create);
router.route('/voterecord/:id', authSession)
      .get(Admin.Vote.record.find)
      .put(Admin.Vote.record.update)
      .delete(Admin.Vote.record.delete);


//  评论

router.get('/comments',      authSession, Admin.Comment.all);
router.route('/comment/:id', authSession)
      .get(Admin.Comment.find)
      .post(Admin.Comment.create)
      .put(Admin.Comment.update)
      .delete(Admin.Comment.delete);


// 七牛上传 token

router.get('/services/uptoken', authSession, Admin.Service.uptoken);


// 搜索
router.get('/search', authSession, Admin.Search);

// 统计

router.get('/statistics/total', authSession, Admin.Statistics.total);

export default router;
