import { apiEndpoints } from "constants/api/apiEndpoints";
import { GetUsersResponsePayload } from "types/api/users/GetUsersResponsePayload";
import { API } from "utils/http-client";

const { users } = apiEndpoints;

class UsersApiService {
  getUsers = async () => {
    const data = API.get<GetUsersResponsePayload>(users.getUsers);
    await new Promise((res, rej) => {
      setTimeout(() => res({}), 2000);
    });
    return data;
  };
}

const UsersApiServiceInstanse = new UsersApiService();

export { UsersApiServiceInstanse as UsersApiService };
