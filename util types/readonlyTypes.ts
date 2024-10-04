interface todo {
  title: string;
}
const todo: Readonly<todo> = {
  title: "delete",
};
todo.title = "another tile";
