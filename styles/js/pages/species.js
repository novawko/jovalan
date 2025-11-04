/* ==================================================================== */
/* Import Charadex
======================================================================= */
import { charadex } from '../charadex.js';


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

/* ==================================================================== */
/* View the collapsed link when visited
======================================================================= */
        if (targetElement && targetElement.classList.contains('collapse')) {
            // For Bootstrap accordions
            $(targetElement).collapse('show');
        } else if (targetElement && targetElement.classList.contains('tab-pane')) {
            // For Bootstrap tabs, find the corresponding tab link and click it
            const tabLink = document.querySelector(`a[href="${hash}"]`);
            if (tabLink) {
                tabLink.click();
            }
        }
});
