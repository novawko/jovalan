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
  url: "https://jovalan.netlify.app/",
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
    species: ['All', 'Kanpolo', 'Deep Sea Kanpolo', 'Freshwater Kanpolo', 'Hyper Kanpolo', 'Cracke’D', 'Kumiyaa', 'Burgvoir', 'Liz’ae', 'Bood Shark', 'Tech-Alipo', 'Vanguard', 'Cedave', 'Serum X', 'Koekanook', 'Humboroon', 'Noodle Moth', 'Heavian', 'Woobar', 'Sylvarian', 'Yohl’Tonir'],
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
  sitePage: 'mainmasterlist',
  dexSelector: 'charadex',
  profileProperty: 'design',

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
  sitePage: 'petsmasterlist',
  dexSelector: 'charadex',
  profileProperty: 'design',

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
    
    [charadex.sheet.pages.mainMasterlist]: {

      // This imports the config from the masterlist
      // So you dont have to repeat yourself
      ...charadex.page.mainMasterlist, 

      sheetPage: charadex.sheet.pages.mainMasterlist,
      sitePage: 'mainmasterlist',
      primaryProperty: 'username',
      relatedProperty: 'owner',
      dexSelector: 'designs',
      profileProperty: 'design',
      profileToggle: false,

    }

  },

 [charadex.sheet.pages.petsMasterlist]: {

      // This imports the config from the masterlist
      // So you dont have to repeat yourself
      ...charadex.page.petMasterlist, 

      sheetPage: charadex.sheet.pages.petsMasterlist,
      sitePage: 'petsmasterlist',
      primaryProperty: 'username',
      relatedProperty: 'owner',
      dexSelector: 'designs',
      profileProperty: 'design',
      profileToggle: false,

    }

  },


/* Index
/* --------------------------------------------------------------- */
charadex.page.index = {

  designs: {
    ... charadex.page.mainMasterlist,
    dexSelector: 'design',
    amount: 8,
  },

  designs: {
    ... charadex.page.petsMasterlist,
    dexSelector: 'design',
    amount: 4,
  }

};


export { charadex };
