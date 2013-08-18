jQuery(document).ready(function($) {
	
	$( '.select-all' ).click( function( e ) {
		e.preventDefault();
		
		var active_panel = $( this ).closest( 'div' ).find( '.tabs-panel-active' ).attr( 'id' ),
			items = $( '#' + active_panel + ' input[type="checkbox"]:visible' );
		
		if ( items.length === items.filter( ':checked' ).length )
			items.removeAttr( 'checked' );
		else
			items.prop( 'checked', true );
	});

	// Filter feature
	$("input[id^='toggleBoxes-']").click( function( e ) {

		var value = $(this).val();

		if(value == 'all') {
			// Check all the checkboxes
			if($(this).is(":checked")) {
				$("input[id^='toggleBoxes-']").attr('checked', true);
				$("div[class^='userlevel-']").show();
			} 
			// Uncheck all the checkboxes
			else {
				$("input[id^='toggleBoxes-']").attr('checked', false);
				$("div[class^='userlevel-']").hide();
			}
		} else {
			// Show selected box(es)
			if($(this).is(":checked")) {
				$('.userlevel-'+value).show();
			} 
			// Hide selected box(es)
			else {
				$('.userlevel-'+value).hide();
				$(':input[value="all"]').attr('checked', false);
			}
		}
	});
});