const person: {
  name: string;
  age: number;
  hobbies: string[];
  nickname: string;
  //Tuple below this code
  role: [number, string];
} = {
  name: "Mohammad",
  age: 22,
  nickname: "Mumma",
  hobbies: ["Sports", "Cooking"],
  role: [2, "SWE"],
};

console.log(person.hobbies);

for (const hobby of person.hobbies) {
  console.log(hobby.toLowerCase());
}

// Tuple = fixed length/type of aray
