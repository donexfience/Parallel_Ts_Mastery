// we can create a type by picking the set of properties of  keys
interface todo {
  title: string;
  description: string;
  completed: boolean;
}
type TodoPreview = Pick<todo, "title" | "completed">;
