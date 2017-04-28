function runningLogger()
{
	console.log('i am running!');
}

function multiplyByTen(num)
{
	num = num * 10;
	return num;
}

console.log(multiplyByTen(5));

function stringReturnOne()
{
	return "Hello";
}

function stringReturnTwo()
{
	return "World";

}

function caller(something)
{
	if( typeof something === 'function' )
	{
		something();
	}

}

function myDoubleConsoleLog(par1, par2)
{
	if( typeof par1 === 'function' &&  typeof par2 === 'function' )
	{
		var str1 = par1();
		var str2 = par2();
		console.log( str1, str2 );
	}


}

myDoubleConsoleLog( stringReturnOne, stringReturnTwo);


function caller2(par1)
{
	console.log('starting');
	if( typeof par1 === 'function' )
	{
		setTimeout( par1, 5000);
	}
}




caller2(runningLogger);




















