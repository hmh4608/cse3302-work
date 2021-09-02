/*
	Hoang Ho
	ID 1001654608
	Due 02/24/2020
	CSE 3302-001 Lab 1
*/

//functions
/*
function that first filters out odd and even numbers of an input array depending on whether passed in argument is true or false and returns that new array

inputArr - input array
oddOrEven - if true, give an array of only odd numbers, if false, give an array of only even numbers
*/
function oddsAndEvens(inputArr, oddOrEven)
{
	if(oddOrEven)
	{
		return inputArr.filter(num => num%2 != 0);
	}
	else
	{
		return inputArr.filter(num => num%2 == 0);
	}	
};

/*
function that returns a new array from the input array whose elements are multiplied by a given factor

inputArr - input array
factor - value to multiply each element in input array by
*/
function multiply(inputArr, factor)
{
	return inputArr.map(num => num * factor);
};

/*
function returns a new array of multiples from the input array depending on whether only the odds or evens are wanted, the min-max range, and the factor whose multiples are wanted

inputArr - input array
oddOrEven - if true, test if values are odd; if false, test if values are even
factor - number whose multiples are wanted
min - minimum value in range
max - maximum value in range
*/
function multiples(inputArr, oddOrEven)
{
	return function(factor)
	{
		return function(min, max)
		{
			return (multiply(oddsAndEvens(inputArr, oddOrEven), factor)).filter(a => (a >= min && a <= max));
		};
	};
};

/*
returns sum of the values in the input array

inputArr - inputtable array of strings
arrLen - greatest defined index of the array
*/
function sum(inputArr, arrLen)
{
	if(arrLen == 0)
	{
		return inputArr[arrLen];
	}
	return inputArr[arrLen] + sum(inputArr, arrLen-1);
};

/*
currying function for finding a cylinder volume
 
r - radius of the cylinder
h - height of the cylinder
*/
function cylinder_volume(r)
{
	//cylinder_volume(r) would return the unnamed function(h) which takes in the height of the cylinder with the radius (r) of the cylinder fixed
	return function(h)
	{
		return 3.14 * r * r * h; //calculating the volume
	};
};

/*
higher-order function that takes the start of a tag in HTML and end of a tag (ex. <html>...</html>)

beginTag - beginning tag (ex. <html>)
endTag - ending tag (ex. </html>)
*/
function makeTag(beginTag, endTag)
{
	return function(textcontent)
	{
		return beginTag + textcontent + endTag;
	}
}

//-------------------------------------------

//for immutable value inputs into functions
var inputtable = [1,2,3,4,5,6,7,8,9,10];

//creating set of multiples of 5 between 1 and 51 by using the map function with a nameless function that multiplies an argument by 5 to return a new array using inputtable elements
var fiveTable = inputtable.map(num => num * 5); 

//creating set of multiples of 13 between 1 and 131 by using the map function with a nameless function that multiplies an argument by 5 to return a new array using inputtable elements
var thirteenTable = inputtable.map(num => num * 13);

//creating set of squares of the numbers in inputtable by using the map function with a nameless function that multiplies an argument by itself to return a new array using inputtable elements
var squaresTable = inputtable.map(num => num * num);

//creating set of odd multiples of 5 between 1 and 100
var oddFiveTable = multiples(inputtable, true)(5)(1, 100)

//getting the sum of even multiples of 7 between 1 and 100
var evenSevensTable = multiples(inputtable, false)(7)(1, 100)
var sumEvenSevensTable = sum(evenSevensTable, evenSevensTable.length-1);


//calling the curried cylinder_volume function
let r = 5;
var volumeFn1 = cylinder_volume(r); //applying the radius of the cylinder to the function first to make a partial function
let h = 10;
var volume = volumeFn1(h); //calculating the actual volume by setting the height to the partially applied function that already has the radius set


/*wrapping subbodies of content with tags eventually to create one whole body

*makeTag returns a function to tableTag which takes in the text content to put inbetween the beginTag and endTag

*ex. <td>Hoang</td> would be a string once the textcontent parameter takes in an argument, so then that would be used as the textcontent of parent tag <tr></tr>
*/

//making all tags necessary to create an HTML table with a table row of least one table cell
var tableTag = makeTag("<table>\n", "</table>\n"); //defines HTML table, will be the root tag
var rowTag = makeTag("\t<tr>\n", "\t</tr>\n"); //defines table row
var headerTag = makeTag("\t\t<th>", "</th>\n"); //define table header
var elementTag = makeTag("\t\t<td>", "</td>\n"); //define elements

//filling in the textcontents between each tag utilizing the specific functions created from makeTag
var head1 = headerTag("Course Number");
var head2 = headerTag("Course Name");
var row1 = rowTag(head1 + head2);

var ele1 = elementTag("CSE 3302");
var ele2 = elementTag("Programming Languages");
var row2 = rowTag(ele1 + ele2);

var table = tableTag(row1 + row2);

//-------------------------------------------

//writing to the console results
console.log("1. inputtable: " + inputtable.toString());
console.log("2a. Fives Table: " + fiveTable.toString());
console.log("2b. Thirteens Table: " + thirteenTable.toString());
console.log("2c. Squares Table: " + squaresTable.toString());
console.log("3. Odd Fives Table: " + oddFiveTable.toString());
console.log(evenSevensTable.toString());
console.log("4. Sum of Even Multiples of Seven (1-100): " + sumEvenSevensTable);
console.log("5. Volume where r = 5 and h = 10: " + volume);
console.log("6.\n\n" + table);
