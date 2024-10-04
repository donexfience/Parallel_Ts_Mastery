// type T0 = Exclude<"a" | "b" | "c", "a">;

// type T0 = "b" | "c";
// type T1 = Exclude<"a" | "b" | "c", "a" | "b">;

// type T1 = "c";
// type T2 = Exclude<string | number | (() => void), Function>;

class Newclass {
  constructor(a: number, b: string) {}
}
type T3 = ConstructorParameters<typeof Newclass>;
function Printing(args: T3): Newclass {
  return new Newclass(...args);
}

const val = Printing([3,"donex"]);