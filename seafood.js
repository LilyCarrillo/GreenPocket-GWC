(function($) {

	$(function() {


		var	$window = $(window),
			$body = $('body');

			$window.on('load', function() {
				renderYogurtData();

			});

		var renderYogurtData = function() {
			// var ajaxData = {
			// 	APIKEY: "8209a83761",
			// 	ZipCode: "94578"
			// }
		 //    $.getJSON(
		 //    	{url: "http://www.SupermarketAPI.com/api.asmx/StoresByZip", 
		 //    	contentType: "application/x-www-form-urlencoded",
		 //    	data: ajaxData,
		 //    	success: function(result){
		 //    		alert(result);
			// 	}}
			// );
			var dummyYogurtPrice = [{storeID :"1", price:"2.10-Tuna"}, {storeID : "2" , price : "4.40-FreeRange Salmon"}, {storeID : "3" , price : "4.10-Sushi"}];
			var yogurtAndStoreData = [];

			//
			for (var i = 0; i < dummyYogurtPrice.length ; i++) {
				var tempt = dummyYogurtPrice[i]; //{storeID :"1" , price: "2.10"}
				var storeId = tempt.storeID; // "1"
				var storePrice = tempt.price;
				var storeData = dummyStoreData[storeId]; // {storeName: "Safeway", storeAddress: "78 83th ave", storeCity: "Sunnyvale", storeZip: "94065"}
				var rowString = "<tr><td>" + storeData.storeName  + " - " + storeData.storeAddress + " , " + storeData.storeCity + " , " + storeData.storeZip + "</td>";
				rowString += "<td> $" +  storePrice + " </td></tr>";
				$("#yogurtTable").append(rowString);
			}
			
		}
	});
})(jQuery);