interface Todo {
  title: string;
  description: string;
  completed: string;
}
type TodPreview = Omit<Todo, "description">;
const todoss: TodPreview = {
  completed: "clean room",
  title: "clena  room",
};
