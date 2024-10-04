function hello(thing) {
  console.log("hello" + thing);
}

hello("world");
hello.call(window, "world");
