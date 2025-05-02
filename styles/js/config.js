/* ==================================================================== */
/* Charadex
=======================================================================  /

  The charadex namespace. You can use it if you like, but this should
  prevent charadex from messing with any other imported code.
    
======================================================================= */
let charadex = {};

/* ==================================================================== */
/* Site
/* If you don't want to hard code your site information, you
/* can fill this out instead
/* Any preview links will still show Charadex's information
/* ==================================================================== */
charadex.site = {
  title: "Jovalan",
  url: "https://cancriplasm.github.io/jovalan/",
  description: `An aquatic multi-species world.`
}

/* ==================================================================== */
/* Sheet Config
/* Your sheet configuration
/* ==================================================================== */
charadex.sheet = {

  id: "1VyY57-VYntqhYeGbn8kQhVyX5CJi6KfhW8Fp6Ukj03M",

  pages: {
    mainMasterlist:    "main masterlist",
    mainMasterlistLog: "main masterlist log",
    petsMasterlist: "pets masterlist",
    petsLog:       "pets log",
    faq:           "faq",
    staff:         "mods",
  },

  options: {

    designTypes: ['All', 'Owner Design', 'Staff Design', 'MYO', 'Event', 'Gacha', 'NPC', 'Custom', 'Bred', 'Premade'],
    statuses: ['All', 'Resell', 'Trade', 'Gift', 'Voided', 'For Sale', 'Purchased', 'WIP', 'Not For Trade'],
    petStatuses: ['All', 'Yes', 'No'],
    rarity: ['All', 'Common', 'Uncommon', 'Rare', 'Mythical', 'Legendary', 'Unique', 'Etherial', 'Tier1', 'Tier2', 'Royal Tier', 'Open', 'Closed', 'Unlisted', 'Voided'],
    species: ['All', 'Kanpolo', 'Deep Sea Kanpolo', 'Freshwater Kanpolo', 'Hyper Kanpolo', 'Cracke'D', 'Kumiyaa', 'Burgvoir', 'Liz'ae', 'Bood Shark', 'Tech-Alipo', 'Vanguard', 'Cedave', 'Serum X', 'Koekanook', 'Humboroon', 'Noodle Moth', 'Heavian', 'Woobar', 'Sylvarian', 'Yohl'Tonir'],
    petSpecies: ['All', 'Cooinowee', 'Narrasael', 'Cuid', 'Jovian Sea Serpent', 'Maambacor', 'Gorwahna', 'Quecko', 'Wottlepodl', 'Chubbö', 'Kiutu', 'Yuecoatl', 'Cuttle-Poddl'],
  }

}


/* ==================================================================== */
/* Page configuration
/* ==================================================================== */
charadex.page = {};


/* Staff
/* --------------------------------------------------------------- */
charadex.page.staff = {

  sheetPage: charadex.sheet.pages.staff,
  sitePage: 'inventories',
  dexSelector: 'charadex',
  profileProperty: 'username',

  sort: {
    toggle: false,
    key: "username",
    order: "asc",
    parameters: []
  },

  pagination: {
    toggle: false,
    bottomToggle: false,
    amount: 12,
  },

  filters: {
    toggle: false,
    parameters: {
      'TBA': [],
    }
  },

  fauxFolder: {
    toggle: false,
    folderProperty: '',
    parameters: [],
  },

  search: {
    toggle: true,
    filterToggle: false,
    parameters: ['Username']
  },

  prevNext: {
    toggle: false,
  },

};


/* FAQ
/* --------------------------------------------------------------- */
charadex.page.faq = {

  sheetPage: charadex.sheet.pages.faq,
  sitePage: 'faq',
  dexSelector: 'charadex',
  profileProperty: 'id',

  sort: {
    toggle: false,
    key: "id",
    order: "asc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 12,
  },

  filters: {
    toggle: false,
    parameters: {
      'TBA': [],
    }
  },

  fauxFolder: {
    toggle: false,
    folderProperty: '',
    parameters: [],
  },

  search: {
    toggle: true,
    filterToggle: true,
    parameters: ['All', 'Question', 'Answer', 'Tags']
  },

  prevNext: {
    toggle: false,
  },

}



/* Masterlist
/* --------------------------------------------------------------- */
charadex.page.mainMasterlist = {

  sheetPage: charadex.sheet.pages.mainMasterlist,
  sitePage: 'mainMasterlist',
  dexSelector: 'charadex',
  profileProperty: 'mainDesign',

  sort: {
    toggle: true,
    key: "id",
    order: "desc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 12,
  },

  filters: {
    toggle: true,
    parameters: {
      'Design Type': charadex.sheet.options.designTypes,
      'Status': charadex.sheet.options.statuses,
      'Rarity': charadex.sheet.options.rarity,
    }
  },

  fauxFolder: {
    toggle: true,
    folderProperty: 'Species',
    parameters: charadex.sheet.options.species,
  },

  search: {
    toggle: true,
    filterToggle: true,
    parameters: ['All', 'ID', 'Design', 'Owner', 'Designer', 'Artist', 'Traits']
  },

  prevNext: {
    toggle: true,
  },

  relatedData: {

    [charadex.sheet.pages.mainMasterlistLog]: {

      sheetPage: charadex.sheet.pages.mainMasterlistLog,
      primaryProperty: 'id',
      relatedProperty: 'id',
      dexSelector: 'log',
      profileProperty: 'design',
      profileToggle: false,

      sort: {
        toggle: true,
        key: "timestamp",
        order: "desc",
        parameters: []
      },

      pagination: {
        toggle: true,
        bottomToggle: false,
        amount: 12,
      },

    }

  }

};

/* Pets Masterlist
/* --------------------------------------------------------------- */
charadex.page.petsMasterlist = {

  sheetPage: charadex.sheet.pages.petsMasterlist,
  sitePage: 'petsMasterlist',
  dexSelector: 'charadex',
  profileProperty: 'petDesign',

  sort: {
    toggle: true,
    key: "id",
    order: "desc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 12,
  },

  filters: {
    toggle: true,
    parameters: {
      'Status': charadex.sheet.options.statuses,
      'Active': charadex.sheet.options.petStatuses,
    }
  },

  fauxFolder: {
    toggle: true,
    folderProperty: 'Species',
    parameters: charadex.sheet.options.petSpecies,
  },

  search: {
    toggle: true,
    filterToggle: true,
    parameters: ['All', 'ID', 'Design', 'Owner', 'Designer', 'Artist', 'Traits']
  },

  prevNext: {
    toggle: true,
  },

  relatedData: {

    [charadex.sheet.pages.petsLog]: {

      sheetPage: charadex.sheet.pages.petsLog,
      primaryProperty: 'id',
      relatedProperty: 'id',
      dexSelector: 'petsLog',
      profileProperty: 'petDesign',
      profileToggle: false,

      sort: {
        toggle: true,
        key: "timestamp",
        order: "desc",
        parameters: []
      },

      pagination: {
        toggle: true,
        bottomToggle: false,
        amount: 12,
      },

    }

  }

};

/* Inventory
/* --------------------------------------------------------------- */
charadex.page.inventory = {

  // Dex Set Up
  sheetPage: charadex.sheet.pages.inventory,
  sitePage: 'inventories',
  dexSelector: 'charadex',
  profileProperty: 'username',

  // Dex Options
  sort: {
    toggle: true,
    key: "username",
    order: "asc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 24,
  },

  filters: {
    toggle: false,
    parameters: {}
  },

  fauxFolder: {
    toggle: false,
    folderProperty: '',
    parameters: [],
  },

  search: {
    toggle: true,
    filterToggle: false,
    parameters: ['Username']
  },

  prevNext: {
    toggle: false,
  },


  // Related Data
  relatedData: {

    [charadex.sheet.pages.inventoryLog]: {

      sheetPage: charadex.sheet.pages.inventoryLog,
      sitePage: 'inventories',
      primaryProperty: 'username',
      relatedProperty: 'username',
      dexSelector: 'log',
      profileProperty: 'id',
      profileToggle: false,

      pagination: {
        toggle: true,
        bottomToggle: false,
        amount: 12,
      },

    },
    

    [charadex.sheet.pages.masterlist]: {

      // This imports the config from the masterlist
      // So you dont have to repeat yourself
      ...charadex.page.masterlist, 

      sheetPage: charadex.sheet.pages.masterlist,
      sitePage: 'masterlist',
      primaryProperty: 'username',
      relatedProperty: 'owner',
      dexSelector: 'designs',
      profileProperty: 'design',
      profileToggle: false,

    }

  },

  
  // This is a special config for their inventory
  inventoryConfig: {

    sheetPage: charadex.sheet.pages.items,
    sitePage: 'items',
    dexSelector: 'inventory',
    profileProperty: 'item',
    profileToggle: false,

    sort: {
      toggle: true,
      sortProperty: "item",
      order: "asc",
      parametersKey: 'type', 
      parameters: charadex.sheet.options.itemTypes
    },

    search: {
      toggle: true,
      filterToggle: false,
      parameters: ['Item']
    },

    filters: {
      toggle: true,
      parameters: {
        'Type': charadex.sheet.options.itemTypes,
        'Rarity': charadex.sheet.options.rarity,
      }
    },

  }

};


/* Index
/* --------------------------------------------------------------- */
charadex.page.index = {

  staff: {
    ... charadex.page.staff,
    dexSelector: 'staff',
    amount: 6,
  },

  designs: {
    ... charadex.page.masterlist,
    dexSelector: 'mainDesign',
    amount: 8,
  }

  designs: {
    ... charadex.page.petsMasterlist,
    dexSelector: 'petDesign',
    amount: 4,
  }

};


export { charadex };
