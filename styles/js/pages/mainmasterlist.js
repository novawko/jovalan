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
    charadex.page.mainMasterlist,
    null, 
    async (listData) => {

      if (listData.type == 'profile') {

        // Create the log dex
        if (charadex.tools.checkArray(listData.profileArray[0].mainMasterlistLog)) {
          let mainmasterlistlogs = await charadex.initialize.page(
            listData.profileArray[0].mainMasterlistLog,
            charadex.page.mainMasterlist.relatedData['main masterlist log']
          );
        }

      }

    }
  );
  
  charadex.tools.loadPage('.softload', 500);

});                          
