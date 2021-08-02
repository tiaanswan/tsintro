// 23 - "union type"

enum Role { ADMIN, USER, READ_ONLY };

const person = {
  name: 'Tiaan',
  age: 36,
  hobbies: ['Sports', 'Cooking'],
  role: Role.USER
};

console.log(person.name.toLowerCase());
console.log(person.role);

for (const hobby of person.hobbies) {
  console.log(hobby);
}