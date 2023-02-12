import {environment} from "../../../environments/environment";
import {endpoints} from "../endpoints/endpoints";

const API = "https://jsonplaceholder.typicode.com";

export const API_URL = {
  USERS:`${API}/${endpoints.users}`,
  POSTS:`${API}/${endpoints.posts}`,
  COMMENTS:`${API}/${endpoints.comments}`,
  TODOS:`${API}/${endpoints.todos}`,
  ALBUMS:`${API}/${endpoints.albums}`,
  PHOTOS:`${API}/${endpoints.photos}`,
}
