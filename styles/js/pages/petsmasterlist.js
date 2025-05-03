/* ==================================================================== */
/* Import Charadex
======================================================================= */
import { charadex } from '../charadex.js';


/* ==================================================================== */
/* Load
======================================================================= */
document.addEventListener("DOMContentLoaded", async () => {

  let dex = await charadex.initialize.page(
    null,
    charadex.page.petsmasterlist,
    null, 
    async (listData) => {

      if (listData.type == 'profile') {

           // Create the log dex
        if (charadex.tools.checkArray(listData.profileArray[0].petsLog)) {
          let logs = await charadex.initialize.page(
            listData.profileArray[0].petsLog,
            charadex.page.petsmasterlist.relatedData['pets log']
          );
        }

      }

    }
  );
  
  charadex.tools.loadPage('.softload', 500);
  
});
