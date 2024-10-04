//Constructs a type with all properties of Type set to optional. This utility will return a type that represents all subsets of a given type.
interface Todo {
  title: string;
  description: string;
}
function UpdateTodo(todo: Todo, updateData: Partial<Todo>) {
  return { ...todo, ...updateData };
}
const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};

const todo2 = UpdateTodo(todo1, {
  description: "throw out trash",
});
