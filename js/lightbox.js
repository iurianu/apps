$(document).ready(function(){        
	$('li img').on('click',function(){
	var src = $(this).attr('src');
	var img = '<img src="' + src + '" class="img-responsive"/>';
	
//start of new code new code
	var index = $(this).parent('li').index();   
	var html = '';
	html += img;                
	html += '<div style="height:50px;clear:both;display:block;">';
	html += '<a class="btn btn-success controls previous" style="color:green;font:12px arial;vertical-align:middle;float:left;margin-top:20px;padding-left:2px;margin-left:10px;" href="' + (index) + '"><i class="fa fa-arrow-left"></i>  prev </a>';
	html += '<a class="btn btn-success controls next" style="color:green;font:12px arial;vertical-align:middle;float:right;margin-top:20px;padding-right:5px;margin-right:10px;" href="'+ (index+2) + '">next <i class="fa fa-arrow-right"></i></a>';
	html += '<a class="btn btn-primary submit" data-dismiss="modal" style="color:white;float:left;margin-left:35%;margin-top:20px;font:12px arial;vertical-align:middle;">close</a>'
	html += '</div>';
	$('#lightbox').modal();
		$('#lightbox').on('shown.bs.modal', function(){
			$('#lightbox .modal-body').html(html);
			//new code
			$('a.controls').trigger('click');
		})
		$('#lightbox').on('hidden.bs.modal', function(){
			$('#lightbox .modal-body').html('');
		});
   });
})

//new code

$(document).on('click', 'a.controls', function(){
	var index = $(this).attr('href');
	var src = $('ul.row li:nth-child('+ index +') img').attr('src');             
	
	$('.modal-body img').attr('src', src);
	
	var newPrevIndex = parseInt(index) - 1; 
	var newNextIndex = parseInt(newPrevIndex) + 2; 
	
	if($(this).hasClass('previous')){               
		$(this).attr('href', newPrevIndex); 
		$('a.next').attr('href', newNextIndex);
	}else{
		$(this).attr('href', newNextIndex); 
		$('a.previous').attr('href', newPrevIndex);
	}
	
	var total = $('ul.row li').length + 1; 
	//hide next button
	if(total === newNextIndex){
		$('a.next').hide();
	}else{
		$('a.next').show()
	}            
	//hide previous button
	if(newPrevIndex === 0){
		$('a.previous').hide();
	}else{
		$('a.previous').show()
	}
	
	
	return false;
});

