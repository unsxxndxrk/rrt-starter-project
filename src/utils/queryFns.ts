import { QueryKeys } from "constants/api/queryKeys";
import { UsersApiService } from "services/UsersApiService";

export const fetchUsers = {
  key: QueryKeys.fetchUsers,
  fn: UsersApiService.getUsers,
};
