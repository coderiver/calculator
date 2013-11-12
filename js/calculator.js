$(document).ready(function(){


// calculator
	
	$(".go").click(function(){
		var weight_val = $("#weight").val();
		var volume_val = $("#volume").val();
		var	oversized = 1;
		var	packing = 0;
		var packing_price = $("#packing").attr("data-price");
		// валидация инпута веса
		if(weight_val == ''){
			$("#weight").addClass('error');
		}
		// валидация инпута обьема
		if(volume_val == ''){
			$("#volume").addClass('error');
		}
		else {
			if($("#oversized").prop("checked")){
				var oversized = 1.333;
			}
			if($("#packing").prop("checked")){
				var packing = (+volume_val*packing_price);
			}
			var result = (((+weight_val + +volume_val)*100)*oversized + packing);
			$("#result").text(result);
		} 
	});

});	