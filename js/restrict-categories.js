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
	
    /**
     * This piece of code automatically allow you to select/unselect all children categories checkbox by clicking a parent category checkbox.
     * 
     * Added by Lorenzo Sanzari (ulisse73 on GitHub)
     */
    $('.tabs-panel ul li input[type=checkbox]').each(function(index, item) {
        $(this).click(
                function() {

                    if ($(this).prop("checked")) {
                        $(this).parent().parent().find('ul.children li input[type=checkbox]').prop("checked", true);
                    } else {
                        $(this).parent().parent().find('ul.children li input[type=checkbox]').prop("checked", false);
                    }
                }
        );
    });
	
	
});
