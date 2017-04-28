	
		$(document).ready(function(){

			$('#button').click(function(){

				if( $(this).css('background-color') === 'rgb(0, 0, 255)'    )
				{
					$(this).css('background-color', 'red');				

				}
				else
				{

					$(this).css('background-color', 'blue');				

				
				}


			});



			$('#button').hover(function(){
					$(this).attr('secondcolor', 'green');
					var temp = $(this).css('background-color');
					$(this).css('background-color', $(this).attr('secondcolor'));
					$(this).attr('secondcolor', temp);


			}, 


			function(){

					var temp = $(this).css('background-color');
					$(this).css('background-color', $(this).attr('secondcolor'));
					$(this).attr('secondcolor', temp);


			});







		});
