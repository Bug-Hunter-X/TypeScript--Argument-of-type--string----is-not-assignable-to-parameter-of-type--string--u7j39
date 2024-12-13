# TypeScript: Argument of type 'string[]' is not assignable to parameter of type 'string'
This repository demonstrates a common TypeScript error:  'Argument of type 'string[]' is not assignable to parameter of type 'string''.  The error arises when attempting to pass an array of strings to a function expecting a single string argument. The solution involves either modifying the function signature to accept an array or iterating over the array and passing each element individually.

## Bug
The `greeter` function expects a single string as input.  Attempting to pass an array of strings results in the type error.

## Solution
The solution modifies the `greeter` function to accept an array of strings and iterates over the array to greet each person individually.