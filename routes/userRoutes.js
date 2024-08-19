import express from 'express';
import { authenticateUser, getUserProfile, logoutUser, registerUser, updateUserProfile } from '../controllers/user.js';
import { createPost, deletePost, getPost, getPosts, updatePost } from '../controllers/post.js';

const router = express.Router();

router.post('/user', authenticateUser);
router.post('/register', registerUser);
router.post('/logout', logoutUser);
router.get('/getProf', getUserProfile);
router.put('/updProf', updateUserProfile);
router.get('/allPosts', getPosts);
router.get('/getPost/:id', getPost);
router.post('/writePost', createPost)
router.put('/updPost/:id', updatePost)
router.delete('/deletePost/:id', deletePost)


export default router;