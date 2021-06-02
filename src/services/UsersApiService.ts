import { apiEndpoints } from "constants/apiEndpoints";
import { GetUsersResponsePayload } from "types/api/users/GetUsersResponsePayload";
import { API } from "utils/http-client";

const { users } = apiEndpoints;

class UsersApiService {
  getUsers = () => {
    return API.get<GetUsersResponsePayload>(users.getUsers);
  };
}

const UsersApiServiceInstanse = new UsersApiService();

export { UsersApiServiceInstanse as UsersApiService };
