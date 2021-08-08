import axios from 'axios';

export default axios.create({
  baseURL: 'https://quiz-d97a8-default-rtdb.firebaseio.com/',
});
