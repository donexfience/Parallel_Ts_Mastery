type A = Awaited<Promise<string>>;
type B = Awaited<Promise<number>>;
type C = Awaited<Promise<Promise<number>>>;
//recursively unwrap the promises
