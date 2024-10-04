function hello(thing) {
    console.log(this + "says hello " + thing);
}
hello.call("yehuda", "word");
