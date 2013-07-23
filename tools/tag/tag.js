function showOverlay() {
	$.blockUI({
		message: '<h1>Loading...</h1>',
		overlayCSS: {
			backgroundColor: 'white',
			opacity: 1.0,
			cursor: 'default'
		},
		css: {
			border: 'none',
			'padding': 'none',
			'font-size': '12px',
			'font-family': 'Helvetica, sans-serif',
			position: 'fixed',
			top: 0,
			left: 0,
			width: '100%',
			backgroundColor: '#009ce8',
			opacity: 0.8,
			color: 'white',
			cursor: 'default'
		}
	});
}
$(document).ajaxStart(function() {
	showOverlay();
});
$(document).ajaxComplete(function(event, request, settings) {
	$.unblockUI();
});
$("#form").submit(function() {
	$('#content').empty();
	$.get("fetch.php", $(this).serializeArray()).done(function(data) {
		if (jQuery.isEmptyObject(data)) {
			var errorMessage = $('<p class="help">No photos.</p>');
			errorMessage.appendTo('#content');
		} else {
			$("#content").append(data);
		}
	});
	event.preventDefault();
});
$(document).ready(function() {
	$('#form input').focus();
});