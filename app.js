// 20 - "Enum type"
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["READ_ONLY"] = 2] = "READ_ONLY";
})(Role || (Role = {}));
;
var person = {
    name: 'Tiaan',
    age: 36,
    hobbies: ['Sports', 'Cooking'],
    role: Role.USER
};
console.log(person.name.toLowerCase());
console.log(person.role);
