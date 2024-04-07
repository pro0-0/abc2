import axios from "axios";

const baseURL = "https://ccl-mini-project.onrender.com/";

export default axios.create({ baseURL: baseURL });
