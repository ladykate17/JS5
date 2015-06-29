// JS DOCUMENT
$( document ).ready(function() {

	$('.editable').on('mouseover', function(){ // change the background to gray
		$(this).addClass('BG-change');

		$('.BG-change').css({
			'background-color' : '#DDD',
		});

		$(this).on('mouseout', function(){ 
			$(this).removeClass('.BG-change');
			$('.BG-change').css({
				'background-color' : '#FFF',
			});
		});
	});



	$('.editable').on('click', function(){

		// $('.editable').blur('<input type="text">' '</input>');
		var t = $('.editable').text(); // gets current paragraph value
		$(this).html($('<input/>',{'value' : t}).val(t)); // creates input


		var pHeight = $(this).height();

		$('input').css({
			'width'	: '100%',
			'font-size' : '0.8em',
			'height': pHeight,
			'cols' : '30'
		})

		console.log($('.editable').after('<button>save</button><button class="important">cancel</button>').val());

		$('button').css({
			'box-shadow' : 'none',
			'border' : 'none',
			'border-radius' : '4px',
			'margin' : '5px',
			'padding' : '5px 8px',
			'background-color' : 'teal',
			'color' : 'white',
		})

		$('.important').css({
			'background-color' : 'red',
		})


	});




// // Sample Code
// $('#tbl').on('click','.xx',function() {
//     $(this).siblings().each(
//         function(){
//             // if the td elements contain any input tag
//             if ($(this).find('input').length){
//                 // sets the text content of the tag equal to the value of the input
//                 $(this).text($(this).find('input').val());
//             }
//             else {
//                 // removes the text, appends an input and sets the value to the text-value
//                 var t = $(this).text();
//                 $(this).html($('<input />',{'value' : t}).val(t));
//             }
//         });
});