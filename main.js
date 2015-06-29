// JS DOCUMENT
$( document ).ready(function() {

	$('.editable').on('mouseover', function(){
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
	
	$('.editable').after('<div class="btn-wrap"><button class="save">save</button><button class="cancel important">cancel</button></div>').replaceWith('<input type="text" name="amount" value="' + $(this).text() + '"/>');

		var save = $('.save').on('click', function(){
			$('.editable').replaceWith('<p class="editable">' + this.text() + '</p>');
			console.log('save clicked');
		})

		var cancel = $('.cancel').on('click', function(event){
			$('.editable').removeClass('.btn-wrap').remove('input');
			console.log('cancel clicked');
		})

		// var pHeight = $().height();

		$('input').css({
			'margin' : '20px 0px 10px',
			'width'	: '95%',
			'font-size' : '0.8em',
			'flex-wrap' : 'wrap',
			'overflow' : 'hidden'
		})

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


});