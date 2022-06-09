import axios from "axios";
import * as routes from "../constants/ApiRoutes";

function logError(errorResponse) {
  const response = errorResponse.response;

  if (response && response.data && response.data.error) {
    console.error(`HTTP Error: ${response.data.error}`);
  } else {
    console.error("Error: ", errorResponse);
  }
}

axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.headers.common["Accept"] = "application/json";

const apiClient = {
  getBoards: async () => {
    try {
      return await axios.get(routes.BOARDS_INDEX_URL);
    } catch (e) {
      logError(e);
    }
  },
  createBoard: async (board) => {
    try {
      return axios.post(routes.CREATE_BOARD_URL, { board });
    } catch (e) {
      logError(e);
    }
  },
};

export default apiClient;
