

//function

function add(num1:number, num2:number) : number {   //num2:number=10 default value assigning
    return num1+num2;
}

// console.log(add(3, 9));


const addArrow = (num1: number, num2: number) : number => num1 + num2;

// console.log(addArrow(100, 120));


// method 

const poorUser = {
    name: 'Hasib',
    balance: 120,

    addBalance(newBalance: number): string{
        return `My new balance is : ${this.balance+newBalance}`
    }
}
    
    

// console.log(poorUser.addBalance(10));

const arr: number[] = [2, 5, 9];

const squaredArray : number[] = arr.map((element : number) : number => element * element);

console.log(squaredArray);