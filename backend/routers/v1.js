/**
 * @author jk
 * @version 1.0.0
 */

import express from 'express'
import api     from '../api'
import auth    from '../utils/auth'
import $       from '../utils'

const authToken = auth.authToken;
const router    = express.Router();
const {V1}      = api;

//  用户

router.post('/user/login',  V1.User.login);
router.post('/user/verify',  V1.User.verify);

//  文章

router.get('/articles',            V1.Article.all);
router.get('/article/:id',         V1.Article.find);
router.get('/articles/myArticles', V1.Article.myArticles);
router.get('/articles/myComments', V1.Article.myComments);

//  投票

router.get('/votes',            V1.Vote.all);
router.get('/vote/:id',         V1.Vote.find);
router.get('/votes/myVotes',    V1.Vote.myVotes);
router.get('/votes/myComments', V1.Vote.myComments);

export default router;
