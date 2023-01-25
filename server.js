import express from 'express';
import cors from 'cors';
import reviews from './api/reviews.route'

const app = express();
app.use(cors());
app.use(express.json());
