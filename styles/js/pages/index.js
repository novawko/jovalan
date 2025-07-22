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
  let maindesigns = await charadex.initialize.page(null, charadex.page.index.maindesigns, (arr) => {
    
    // Splice the silly little array
    let sliceAmount = charadex.page.index.maindesigns.amount || 6;
    arr.splice(sliceAmount, arr.length);

  });


    /* Pet Designs
  ===================================================================== */
  let petdesigns = await charadex.initialize.page(null, charadex.page.index.petdesigns, (arr) => {
    
    // Splice the silly little array
    let sliceAmount = charadex.page.index.petdesigns.amount || 6;
    arr.splice(sliceAmount, arr.length);

  });


  /* Load Page
  ===================================================================== */
  charadex.tools.loadPage('.softload', 500);

});


  /* Main Designs Sort Fix
  ===================================================================== */
let maindesigns = await charadex.initialize.page(null, charadex.page.index.maindesigns, (arr) => {
  // Force sliceAmount to 8
  let sliceAmount = 8;

  // Get the last 8 (or fewer if less than 8 exist)
  let recent = arr.slice(-sliceAmount);

  // Overwrite original array in-place
  arr.length = 0;
  arr.push(...recent);
});

  /* Pet Designs Sort Fix
  ===================================================================== */
let petdesigns = await charadex.initialize.page(null, charadex.page.index.petdesigns, (arr) => {
  // Force sliceAmount to 8
  let sliceAmount = 8;

  // Get the last 8 (or fewer if less than 8 exist)
  let recent = arr.slice(-sliceAmount);

  // Overwrite original array in-place
  arr.length = 0;
  arr.push(...recent);
});
