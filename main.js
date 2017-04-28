	var x = [3,5,"Dojo", "rocks", "Michael", "Sensei"];
	x.push(100);
	console.log(x);
	var x = ["hello", "world", "JavaScript is Fun"];
	var sum = 0;
	console.log(x);
	for ( var idx = 1 ; idx <= 500; idx++ )
	{
		sum += idx;
	}
	console.log(sum);
	var arr1 = [1, 5, 90, 25, -3, 0];
	var min = arr1[0];
	var sum = arr1[0];
	for( var idx = 1 ; idx < arr1.length; idx++)
	{
		sum = sum + arr1[idx];
		if (arr1[idx] < min )
		{
			min = arr1[idx];
		}

	}
	console.log(arr1);
	console.log(min);
	console.log(sum/arr1.length);


	var newNinja = {
		name: 'Jessica',
		profession: 'coder',
		favorite_language: 'JavaScript', //like that's even a question!
		dojo: 'Dallas'
	}

	for (i in newNinja)
	{
		console.log(i, " : ", newNinja[i]);
	}





