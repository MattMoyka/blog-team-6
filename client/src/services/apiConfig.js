import axios from "axios";

let apiUrl;

const apiUrls = {
<<<<<<< HEAD
  production: "https://blog-team-6.herokuapp.com/api/posts",
  development: "http://localhost:3000/api",
};
=======
  production: 'https://blog-team-6.herokuapp.com/api',
  development: 'http://localhost:3000/api'
}
>>>>>>> bae19566d8db5216115500cd9c301d617cdc9888

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

const api = axios.create({
<<<<<<< HEAD
  baseURL: apiUrl,
});
=======
  baseURL: apiUrl
})
>>>>>>> bae19566d8db5216115500cd9c301d617cdc9888

export default api;
