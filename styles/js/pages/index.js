/* ==================================================================== */
/* Import Charadex
======================================================================= */
import { charadex } from '../charadex.js';


/* ==================================================================== */
/* Load
======================================================================= */
document.addEventListener("DOMContentLoaded", async () => {

  /* Prompts
  ===================================================================== */
  let prompts = await charadex.initialize.page(null, charadex.page.index.prompts, (arr) => {

    // Splice the silly little array
    let sliceAmount = charadex.page.index.prompts.amount || 4;
    arr.splice(sliceAmount, arr.length);

  }, (data) => {

    // Add the silly little prompt stuff here too
    $('.cd-prompt-background').each(function(i) {
      const element = $(this);
      const image = data.array[i]?.image;
      element.attr('style', `background-image: url(${image})`);
    });
    
  });


  /* Staff
  ===================================================================== */
  let staff = await charadex.initialize.page(null, charadex.page.index.staff, (arr) => {
    
    // Splice the silly little array
    let sliceAmount = charadex.page.index.staff.amount || 6;
    arr.splice(sliceAmount, arr.length);

  });


  /* Main Designs
  ===================================================================== */
  let designs = await charadex.initialize.page(null, charadex.page.index.mainMasterlist, (arr) => {
    
    // Splice the silly little array
    let sliceAmount = charadex.page.index.mainDesigns.amount || 6;
    arr.splice(sliceAmount, arr.length);

  });

    /* Pet Designs
  ===================================================================== */
  let designs = await charadex.initialize.page(null, charadex.page.index.petsMasterlist, (arr) => {
    
    // Splice the silly little array
    let sliceAmount = charadex.page.index.petDesigns.amount || 6;
    arr.splice(sliceAmount, arr.length);

  });


  /* Load Page
  ===================================================================== */
  charadex.tools.loadPage('.softload', 500);

});
