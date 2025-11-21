/* ==================================================================== */
/* Import Charadex
======================================================================= */
import { charadex } from '../charadex.js';


/* ==================================================================== */
/* Load any specific navtabs on all of the site
======================================================================= */
$(function() {
  var hash = window.location.hash;

  if (hash != '') {
    $('.tab-pane').removeClass('active in'); // Remove 'active' from all tab panes
    $(hash).addClass('active in'); // Add 'active' to the target tab pane
    $(`a[href="${hash}"]`).tab('show'); // Show the tab linked to the hash
  }
});


/* ==================================================================== */
/* Load
======================================================================= */
document.addEventListener("DOMContentLoaded", async () => {
  let dex = await charadex.initialize.page(null, charadex.page.species, null, 
  (listData) => {
    let backgroundElement = $('.cd-prompt-background');
    if (listData.type == 'profile') {
      backgroundElement.attr('style', `background-image: url(${listData.profileArray[0].image})`);
    } else {
      backgroundElement.each(function(i) {
        const image = listData.array[i]?.image;
        $(this).attr('style', `background-image: url(${image})`);
      });
    }
  });
  charadex.tools.loadPage('.softload', 500);
});
