//opposite of partial all properties of the type is set to required so we must need to add the propery to the place thate where we used that type
interface Props {
  a?: number;
  b?: string;
}
const obj: Props = { a: 3 };
const obj2: Required<Props> = { a: 5 };
