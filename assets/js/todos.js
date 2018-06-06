// Check Off specific Todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// Click onX to delete Todo

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		// grabbing new Todo text from input
		var TodoText = $(this).val();
		$(this).val("");
		// create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + TodoText + "</li>")
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});