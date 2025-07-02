const users = [
    { name: 'John Doe', id: 3, email: 'jV@example.com' },
    { name: 'Jane Smith', id: 2, email: 'ja@example.com' },
    { name: 'Alice Johnson', id: 1, email: 'a@example.com' }
];

function findById( id ){
    const user = users.find((user) => user.id === parseInt(id))
    return user;
}

for(i = 1 ; i <= 3 ; i++){
    console.log(findById("" + i))
}

users.push({ name: 'John Doe', id: 3, email: 'jV@example.com' })
users.push({ name: 'Jane Smith', id: 2, email: 'ja@example.com' })
users.push({ name: 'Alice Johnson', id: 1, email: 'a@example.com' })

console.log(users)

users.pop()
users.pop()
users.pop()




console.log(users)


const people = [
    { name: 'John Doe', id: 3, email: 'jV@example.com' },
    { name: 'Jane Smith', id: 2, email: 'ja@example.com' },
    { name: 'Alice Johnson', id: 1, email: 'a@example.com' }
];

console.log("----------------------------------------------------");
people.splice(1, 1)
console.log(people)
const person = people[0];
console.log(person)