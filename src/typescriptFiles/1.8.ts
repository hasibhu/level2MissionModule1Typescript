//destructuring

// object destructuring 
const user = {
    id: 345,
    name: {
        firstNme: 'Hasib',
        middleName: 'Joya',
        lasteName: 'Islam'
    },
    contactNumber: 234523465,
    address: 'Berlin'
};


const { id, name: { middleName } } = user;

// console.log(id, middleName);



// array destructuring 

const myFriends = ['Joya', 'Heinz', 'Soumik']

// const bestFriend = myFriends[2]

const [, , bestFriend] = myFriends;

console.log(bestFriend);