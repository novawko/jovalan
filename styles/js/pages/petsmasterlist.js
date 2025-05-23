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
    charadex.page.petsMasterlist,
    null, 
    async (listData) => {

      if (listData.type == 'profile') {

           // Create the log dex
        if (charadex.tools.checkArray(listData.profileArray[0].petsLog)) {
          let petslogs = await charadex.initialize.page(
            listData.profileArray[0].petsLog,
            charadex.page.petsMasterlist.relatedData['pets log']
          );
        }

      }

    }
  );
  
  charadex.tools.loadPage('.softload', 500);
  
});
