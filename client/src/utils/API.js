import axios from "axios";

export default {
  // Gets books from the Google API
  callgoogle: function(q) {
    // return axios.get("https://www.googleapis.com/books/v1/volumes", { params: { q: q } });
    return axios.get("/api/google", { params: { q: q } });
  }
};
