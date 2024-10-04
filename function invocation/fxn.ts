function hello(thing: string) {
  console.log(this + "says hello " + thing);
}
hello.call("yehuda", "word");
