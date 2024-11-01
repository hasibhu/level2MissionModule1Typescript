

{

    //spread oprator for array
    const bros1: string[] = ['Mir', 'Heinz', 'John'];
    const bros2: string[] = ['Nur', 'Tinz', 'Johan'];

    bros1.push('Hasibul');
    // console.log(bros1);
    bros1.push(...bros2);
    // console.log(bros1);

    const city1 = {
        germany: 'Berlin',
        denmark: 'Copenhagen',
        italy: 'Rome',
        turkiye: 'Istanbul'
    };
    const city2 = {
        bangladesh: 'Dhaka',
        india: 'Delhi',
        pakistan: 'Lahore',
        thailand: 'Bangkok'
    } 

    const allCities = {
        ...city1,
        ...city2
    }

    // console.log(allCities);



    //rest operator
    
    const greetFriends = (...friends: string[]) => {
        // console.log(`Hi, ${friend1}  ${friend2} ${friend3}`);
        friends.forEach((friend: string) => {
            console.log(`Hi, ${friend}`);
            
        });
    }


    // greetFriends('abul', 'kabul', 'babul');
    


    //destructuring >Next video



}