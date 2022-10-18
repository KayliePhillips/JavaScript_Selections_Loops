console.log("Hello World!\n==========\n");

// Exercise 1 Section -- Ignore Even
console.log("EXERCISE 1:\n==========\n");

for (let i = 0; i < 101; i++) {
    //const element = array[i];
if (i%2 != 0) {
    console.log(i);
}
};


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let i = 0; i < 101; i++) {
    if (i%3 == 0 && i%5 == 0) 
    {
        console.log(`${i} = "FIZZBUZZ"`);
    }
    else if (i%3 == 0)
    {
        console.log(`${i} = "FIZZ"`);
    }
    else if (i%5 == 0)
    {
        console.log(`${i} = "BUZZ"`);
    }
};

//Exercise 3 Repeat exercise 1 and 2 using while and do/while loops
console.log("EXERCISE 3: while loop for odd numbers \n==========\n");
let i = 1;
while (i<101) {
    if (i%2 != 0) {
        console.log(i);
    }
i++
};
console.log("EXERCISE 3: do while loop for odd numbers\n==========\n");
i= 1;
do {if (i%2 != 0)
    console.log(i);
    i++;
    
} while (i<101);



console.log("EXERCISE 3: while loop for FizzBuzz\n==========\n");
i = 1;
while (i<=100) {
    if (i%3 == 0 && i%5 == 0) 
    {
        console.log(`${i} = "FIZZBUZZ"`);
    } 
    else if (i%3 == 0) 
    { 
        console.log(`${i} = "FIZZ"`);
    }
    else if( i%5 ==0) 
    {
        console.log(`${i} = "BUZZ"`);
    }
i++;  
};


console.log("EXERCISE 3: do while loop for FizzBuzz\n==========\n");
i=1;
do {if (i%3 == 0 && i%5 == 0) 
    {
        console.log(`${i} = "FIZZBUZZ"`);
    } 
    else if (i%3 == 0) 
    { 
        console.log(`${i} = "FIZZ"`);
    }
    else if( i%5 ==0) 
    {
        console.log(`${i} = "BUZZ"`);
    }
i++;  
    
} while (i<=100);



console.log("EXERCISE 4\n==========\n");

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for (let i = 0; i <= n; i++) {
    if (i === value) {
        console.log(`Found value! ${value}`);
        break;
    }   
};

if (value>n) {
    console.log("Did not find value");
};




