import dashboard from "./apps/dashboard/routes";
import todos from "./apps/todos/routes";
import sample from "./apps/sample/routes";
import users from "./apps/user/routes";

export default [].concat(dashboard, todos, sample, users);