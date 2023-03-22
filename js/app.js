// defined a function with a name of function_one which takes two arguments num_one and num_two
function function_one( num_one, num_two )
{
// Created  a variable named 'value' and assigned it  to the computational value of the arguments num_one and num_two and at last returnd it .
let value = ( num_one + num_two ) * 5;
    return value;
}
// defined a function with a name of function_two that takes one argument which is word
function function_two(word)
{
    //checking if the word has more than 10 characters by getting the number of characters using the .length method and see if it's >10 and if so, returing true otherwise false 
    if ( word.length > 10 )
    {
        return true;

    }
    else
    {
        return false;
    }
}
// defined a function with a name of function_three that takes an array as an argument 
function function_three(array)
{
    // created a for loop  that will loop through the array and add 1 after each loop untill counter is = arry.length
    for ( let counter = 0; counter < array.length; counter++ )
    {
        // created a conditional statement that checks if the array of string at the value of the counter index strats with'ph' using the 
        //.startsWith() built in Method to check.and if it dose return the value of the string in that counter index 
        if ( array[counter].startsWith('ph'))
        
        {
        
            return  array[counter]
        }
    }
    
 }

//calling the function_one,function_two with diffrent values  
function_one( 5, 7 )
function_one( 1, 20 )
function_one( -100, 50 )
function_one(0,7)
function_two( `agstisjdhgfjf` )
function_two( `green` )
function_two( `teageenyetey` )

// created a variable with the name word_strat_with_ph and assigned it to the returned  value of the funtion_three,  and checked in the console if the value checkes out.
let word_start_with_ph = function_three( [`lion`, `cat`, `glass`, `pho`, `tea`, `sugar`, `phone`] )

console.log(word_start_with_ph)
