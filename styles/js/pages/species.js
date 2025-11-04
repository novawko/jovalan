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
document.addEventListener("DOMContentLoaded", function () {
    // Function to handle opening the correct collapse section
    function openCollapseByHash() {
        const hash = window.location.hash; // Get the hash from the URL (#collapseOne)

        if (hash) {
            // Remove the 'active' class from all currently active sections
            document.querySelectorAll('.collapse-content.active').forEach(el => {
                el.classList.remove('active');
            });

            // Find the target element using the hash as a selector
            const targetElement = document.querySelector(hash);

            if (targetElement && targetElement.classList.contains('collapse-content')) {
                // Add the 'active' class to show the target element
                targetElement.classList.add('active');
                
                // Optional: Scroll to the opened section smoothly
                // Adding a slight delay can ensure the element is fully expanded before scrolling
                setTimeout(() => {
                    targetElement.scrollIntoView({ behavior: 'auto', block: 'start' });
                }, 100);
            }
        }
    }

    // 1. Call the function on page load (in case a hash is in the initial URL)
    openCollapseByHash();

    // 2. Add event listener for hash changes within the same page (e.g., clicking the links)
    // This event fires when the fragment identifier changes
    window.addEventListener('hashchange', openCollapseByHash);
});
