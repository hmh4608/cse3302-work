/*
this version of multiples returns a string with " " each value that is a multiple of the factor within the min-max range and is either odd or even depending on the oddOrEven parameter input 

factor - factor trying to find multiples of
min - minimum value in range
max - maximum value in range
oddOrEven - if true, test if value is odd;  if false, test if value is even

function multiplesEO(factor, min, max, oddOrEven)
{
	//checking if the current multiple is a multiple of the factor and if it is odd or even depending on whether oddOrEven is true
	if( ((min%2 == 0) && !oddOrEven) || ((min%2 != 0) && oddOrEven) )
	{
		if(min+factor >= max)
		{
			return min;
		}
		return min + " " + multiplesEO(factor, min+factor, max, oddOrEven);
	}
	return multiplesEO(factor, min+factor, max, oddOrEven);
};
*/

/*
recursively returns a string to split later into an array with " " inbetween each value of the array that is the squares of the numbers in inputtable

inputArr - inputtable array
pos - current position in the array
arrLen - greatest defined index of the array
*/
function squares(inputArr, pos, arrLen)
{
	if(pos == arrLen)
	{
		return inputArr[pos] * inputArr[pos];
	}
	return (inputArr[pos] * inputArr[pos]) + " " + squares(inputArr, pos+1, arrLen);
};

