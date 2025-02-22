/*
 Project 2 - Exercise 2: Meeting with Caesar's Best Friend
 Name: Carl Mesias
 Date: June 30, 2024

*/

const friend ="BRUTUS";
const shiftValue = 3;

/* Step 1 */
const alphabet = "abcdefghijklmnopqrstuvwxyz";

/* Step 2 */

// Get first letter and convert it to lowercase
let firstLetterLowerCase = friend[0].toLowerCase();

// Get letter that was lowercased and find the index of it from alphabet string
let indexOfFirstLetter = alphabet.indexOf( firstLetterLowerCase );

/* Question 1 */
// The reason the result is 1 instead of 2 is because we start with the 0 index, then 1, then so on

/* Step 3 */
let encryptedLetterShifted = alphabet[indexOfFirstLetter + shiftValue];

/* Question 2 */
// using the % will help in getting a value that is always within the bounds of the alphabet such as:
// let encryptedLetterShifted = alphabet[ (indexOfFirstLetter + shiftValue) % 26 ];

/* Step 4 */
let lengthOfAlphabet = alphabet.length;

/* Step 5 */
let encryptedLetterShiftedAndWrapsAround = alphabet[ (indexOfFirstLetter + shiftValue) % 26 ];

/* Step 6 */
let encryptedMsg = "EUXWXV";
let extractFirstThreeChars = encryptedMsg.slice(0, 3);














