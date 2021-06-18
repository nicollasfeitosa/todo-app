import axios from 'axios';
import Vue from 'vue';

axios.defaults.baseURL = 'http://localhost:8081/api';
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';

Vue.prototype.$axios = axios;