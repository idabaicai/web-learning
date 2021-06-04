import axios from 'axios'
import { Message } from 'element-ui';

const instance = axios.create({
  baseURL: process.env.B
})