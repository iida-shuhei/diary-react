import axios from "axios";

const API_URL = "http://localhost:8080/diary";

class DiaryService {
  create(diary) {
    return axios.post(API_URL, diary);
  }
  update(diary) {
    return axios.post(API_URL + "/update", diary);
  }
  findAll() {
    return axios.get(API_URL);
  }
  findById(id) {
    return axios.get(API_URL + "/findById/" + id);
  }
  delete(id) {
    return axios.post(API_URL + "/delete/" + id);
  }
}

export default new DiaryService();
