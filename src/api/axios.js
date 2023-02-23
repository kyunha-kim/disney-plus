import axios from "axios";

const instance = axios.create({
  baseURL: "http://api.themoviedb.org/3",
  params: {
    api_key: "3717b6c632b8434e14bd5345d2d24397",
    language: "ko-KR",
  },
});

export default instance;
