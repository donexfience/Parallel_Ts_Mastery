// function first() {
//   console.log("first() called");
//   return function (target: any, propertyKey: string) {
//     console.log(`Decorating property: ${propertyKey}`);
//   };
// }

// class ExampleClass {
//   @first()
//   myProperty: string = "";
// }

// const example = new ExampleClass();
@seal
class BugReport {
  type = "report";
  title: string;
  constructor(t: string) {
    this.title = t;
  }
}
function seal(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}
const b = new BugReport("donex");
b.title ='fience';
b.newProperty = 'd'
console.log(b.title);
