{
    //
    // type alias

    type Student = {
        name: string,
        age: number,
        contactNo?: string,
        gender: string,
        address: string
    }



    const student1: Student = {
        name: 'Hasib',
        age: 37,
        contactNo: '01714120660',
        gender: 'male',
        address: 'Brln'
    };

    const student2: Student = {
        name: 'John',
        age: 32,
        gender: 'male',
        address: 'Rome'
    };

    type Add = (num1: number, num2: number) => number;

    const add: Add = (num1, num2) => num1 + num2;

    // console.log(add(4,7));











    //
}