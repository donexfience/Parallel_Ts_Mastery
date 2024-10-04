interface catInfo {
  age: number;
  breed: string;
}
type catName = "miffy" | "boris" | "morderd";
const cats: Record<catName, catInfo> = {
  miffy: { age: 13, breed: "preson" },
  boris: { age: 3, breed: "maine" },
  morderd:{age:3,breed:"donex"}
};
