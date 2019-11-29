import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 8d2217b97020584c4f29b91bbf89c32517b632d1fe2294e27f853af1ff108860',
  }
});