

// union and intersection 



type NewFrontEndDeveloper = 'fakibajDeveloper' | 'GoodJuniorDeveloper';

const newDeveloper: NewFrontEndDeveloper = 'fakibajDeveloper';

type User = {
    name: string;
    email?: string;
    gender: 'male' | 'Female';
    bloodGrup: 'O+' | 'A+' | "AB+"
};



const user: User = {
    name: 'Hasib',
    email: "g@WebGLUniformLocation.com",
    gender: 'male',
    bloodGrup: "A+"
}

// console.log(user);

type FrontEndDeveloper = {
    skills: string[];
    designation1: 'Frontend Developer'
}
type BackEndDeveloper = {
    skills: string[];
    designation2: 'Backend Developer'
}

type FullstackDevelpoer = FrontEndDeveloper & BackEndDeveloper;


const fullstackDevelpoer: FullstackDevelpoer = {
    skills: ['HTML', 'CSS', 'Express'],
    designation1: 'Frontend Developer',
    designation2: 'Backend Developer'
}

console.log(fullstackDevelpoer);