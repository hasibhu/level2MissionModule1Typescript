// reference type --> object

const user: {
    company: 'HelloBD'; //type --> literal type --> fixed type
    firstName: string;
    middleName?: string; //optional type
    lastName:string
} = {
    company: "HelloBD",
    firstName: 'Hasib',
    middleName: 'Sheaikh',
    lastName: 'Islam'
}


// console.log(user);

// console.log(user.company);