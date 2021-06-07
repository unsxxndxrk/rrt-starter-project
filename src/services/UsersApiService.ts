import { API } from "utils/api/http-client";
import { apiEndpoints } from "constants/api/apiEndpoints";
import { GetUsersResponsePayload } from "types/api/users/GetUsersResponsePayload";
import { delay } from "utils/delay";

const { users } = apiEndpoints;

class UsersApiService {
  getUsers = async () => {
    await delay();
    return API.get<GetUsersResponsePayload>(users.getUsers);
  };
}

const UsersApiServiceInstanse = new UsersApiService();
export { UsersApiServiceInstanse as UsersApiService };
