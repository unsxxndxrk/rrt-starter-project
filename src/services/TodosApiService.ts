import { API } from "utils/api/http-client";
import { apiEndpoints } from "constants/api/apiEndpoints";
import { GetTodoResponsePayload } from "types/api/todos/GetTodoResponsePayload";
import { delay } from "utils/delay";

const { todos } = apiEndpoints;

class TodosApiService {
  getTodo = async () => {
    await delay();
    return API.get<GetTodoResponsePayload>(todos.getTodo);
  };
}

const TodosApiServiceInstanse = new TodosApiService();
export { TodosApiServiceInstanse as TodosApiService };
