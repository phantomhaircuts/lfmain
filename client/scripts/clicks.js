if (Meteor.isClient) {
  Template.body.events({
    //SHOW AND HIDE PARTY PAGE============================
    'click .party': function (e) {
      e.preventDefault();
      console.log("reserve a burrito.");
      $(".party-page").css("display", "block"),
      //no display:
      $(".text-content").css("display", "none"),
      $(".play-page").css("display", "none"),
      $(".eat-page").css("display", "none"),
      $(".sleep-page").css("display", "none"),
      $(".relax-page").css("display", "none"),
      $(".travel-page").css("display", "none"),
      $(".no-party-page").css("display", "none"),
      $(".no-play-page").css("display", "none"),
      $(".no-eat-page").css("display", "none"),
      $(".no-sleep-page").css("display", "none"),
      $(".no-relax-page").css("display", "none"),
      $(".no-travel-page").css("display", "none"),
      $(".no-final-page").css("display", "none")
    },
    'click .party-out': function (e) {
      e.preventDefault();
      console.log("burrito out!")
      //no display
      $(".party-page").css("display", "none"),
      $(".play-page").css("display", "none"),
      $(".eat-page").css("display", "none"),
      $(".sleep-page").css("display", "none"),
      $(".relax-page").css("display", "none"),
      $(".travel-page").css("display", "none"),
      $(".no-party-page").css("display", "none"),
      $(".no-play-page").css("display", "none"),
      $(".no-eat-page").css("display", "none"),
      $(".no-sleep-page").css("display", "none"),
      $(".no-relax-page").css("display", "none"),
      $(".no-travel-page").css("display", "none"),
      $(".no-final-page").css("display", "none")
      //display
      $(".text-content").css("display", "block")
    },
    //NO PARTY SHOW AND HIDE========================================
    'click .no-party': function (e) {
      e.preventDefault();
      console.log("no party a burrito.");
      $(".no-party-page").css("display", "block"),
      //no displays
      $(".play-page").css("display", "none"),
      $(".eat-page").css("display", "none"),
      $(".text-content").css("display", "none").fadeOut(1000)
    },
    'click .party-out': function (e) {
      e.preventDefault();
      $(".party-page").css("display", "none"),
      $(".text-content").css("display", "block")
    },

    //SHOW AND HIDE PLAY PAGE=====================================
    'click .play': function (e) {
      e.preventDefault();
      console.log("play a burrito.");
      $(".play-page").css("display", "block"),
      //no display:
      $(".text-content").css("display", "none"),
      $(".party-page").css("display", "none"),
      $(".eat-page").css("display", "none"),
      $(".sleep-page").css("display", "none"),
      $(".relax-page").css("display", "none"),
      $(".travel-page").css("display", "none"),
      $(".no-party-page").css("display", "none"),
      $(".no-play-page").css("display", "none"),
      $(".no-eat-page").css("display", "none"),
      $(".no-sleep-page").css("display", "none"),
      $(".no-relax-page").css("display", "none"),
      $(".no-travel-page").css("display", "none"),
      $(".no-final-page").css("display", "none")
    },
    'click .play-out': function (e) {
      e.preventDefault();
      $(".play-page").css("display", "none"),
      $(".text-content").css("display", "block")
    },

    //NO PLAY SHOW AND HIDE==============================================
    'click .no-play': function (e) {
      e.preventDefault();
      console.log(" don't play a burrito.");
      $(".no-play-page").css("display", "block"),
      $(".text-content").css("display", "none").fadeOut(1000),
      $(".party-page").css("display", "none").fadeOut(1000)
    },
    'click .no-play-out': function (e) {
      e.preventDefault();
      console.log("burrito out!")
      $(".no-play-page").css("display", "none"),
      $(".text-content").css("display", "block")
    },

    // SHOW AND HIDE EAT PAGE===========================================
    'click .eat': function (e) {
      e.preventDefault();
      console.log("eat a burrito.");
      $(".eat-page").css("display", "block"),
      //no diplay:
      $(".text-content").css("display", "none"),
      $(".party-page").css("display", "none"),
      $(".play-page").css("display", "none"),
      $(".sleep-page").css("display", "none"),
      $(".relax-page").css("display", "none"),
      $(".travel-page").css("display", "none"),
      $(".no-party-page").css("display", "none"),
      $(".no-play-page").css("display", "none"),
      $(".no-eat-page").css("display", "none"),
      $(".no-sleep-page").css("display", "none"),
      $(".no-relax-page").css("display", "none"),
      $(".no-travel-page").css("display", "none"),
      $(".no-final-page").css("display", "none")
    },
    'click .eat-out': function (e) {
      e.preventDefault();
      $(".eat-page").css("display", "none"),
      $(".text-content").css("display", "block")
    },

    // NO EAT SHOW AND HIDE==============================================
    'click .no-eat': function (e) {
      e.preventDefault();
      $(".no-eat-page").css("display", "block"),
      //no display:
      $(".text-content").css("display", "none"),
      $(".party-page").css("display", "none"),
      $(".play-page").css("display", "none"),
      $(".sleep-page").css("display", "none"),
      $(".relax-page").css("display", "none"),
      $(".travel-page").css("display", "none"),
      $(".no-party-page").css("display", "none"),
      $(".no-play-page").css("display", "none"),
      $(".eat-page").css("display", "none"),
      $(".no-sleep-page").css("display", "none"),
      $(".no-relax-page").css("display", "none"),
      $(".no-travel-page").css("display", "none"),
      $(".no-final-page").css("display", "none")
    },
    'click .no-eat-out': function (e) {
      e.preventDefault();
      $(".no-eat-page").css("display", "none"),
      $(".text-content").css("display", "block")
    },

    //SLEEP SHOW AND HIDE============================================
    'click .sleep': function (e) {
      e.preventDefault();
      $(".sleep-page").css("display", "block"),
      //no display:
      $(".text-content").css("display", "none"),
      $(".party-page").css("display", "none"),
      $(".play-page").css("display", "none"),
      $(".relax-page").css("display", "none"),
      $(".eat-page").css("display", "none"),
      $(".travel-page").css("display", "none"),
      $(".no-party-page").css("display", "none"),
      $(".no-play-page").css("display", "none"),
      $(".no-eat-page").css("display", "none"),
      $(".no-sleep-page").css("display", "none"),
      $(".no-relax-page").css("display", "none"),
      $(".no-travel-page").css("display", "none"),
      $(".no-final-page").css("display", "none")
    },
    'click .sleep-out': function (e) {
      e.preventDefault();
      $(".sleep-page").css("display", "none"),
      $(".text-content").css("display", "block")
    },

    // NO SLEEP SHOW AND HIDE============================================
    'click .no-sleep': function (e) {
      e.preventDefault();
      $(".no-sleep-page").css("display", "block"),
      $(".text-content").css("display", "none").fadeOut(1000),
      $(".eat-page").css("display", "none").fadeOut(1000)
    },
    'click .no-sleep-out': function (e) {
      e.preventDefault();
      $(".no-sleep-page").css("display", "none"),
      $(".text-content").css("display", "block")
    },

    //Relax SHOW AND HIDE============================================
    'click .relax': function (e) {
      e.preventDefault();
      $(".relax-page").css("display", "block"),
      //no display:
      $(".text-content").css("display", "none"),
      $(".party-page").css("display", "none"),
      $(".play-page").css("display", "none"),
      $(".sleep-page").css("display", "none"),
      $(".eat-page").css("display", "none"),
      $(".travel-page").css("display", "none"),
      $(".no-party-page").css("display", "none"),
      $(".no-play-page").css("display", "none"),
      $(".no-eat-page").css("display", "none"),
      $(".no-sleep-page").css("display", "none"),
      $(".no-relax-page").css("display", "none"),
      $(".no-travel-page").css("display", "none"),
      $(".no-final-page").css("display", "none")
    },
    'click .relax-out': function (e) {
      e.preventDefault();
      $(".relax-page").css("display", "none"),
      $(".text-content").css("display", "block")
    },

    // NO RELAX SHOW AND HIDE============================================
    'click .no-relax': function (e) {
      e.preventDefault();
      $(".no-relax-page").css("display", "block"),
      $(".text-content").css("display", "none").fadeOut(1000),
      $(".sleep-page").css("display", "none").fadeOut(1000)
    },
    'click .no-relax-out': function (e) {
      e.preventDefault();
      $(".no-sleep-page").css("display", "none"),
      $(".text-content").css("display", "block")
    },

    //Travel SHOW AND HIDE============================================
    //display:
    'click .travel': function (e) {
      e.preventDefault();
      $(".travel-page").css("display", "block"),
      //display none:
      $(".text-content").css("display", "none"),
      $(".party-page").css("display", "none"),
      $(".play-page").css("display", "none"),
      $(".sleep-page").css("display", "none"),
      $(".relax-page").css("display", "none"),
      $(".eat-page").css("display", "none"),
      $(".no-party-page").css("display", "none"),
      $(".no-play-page").css("display", "none"),
      $(".no-eat-page").css("display", "none"),
      $(".no-sleep-page").css("display", "none"),
      $(".no-relax-page").css("display", "none"),
      $(".no-travel-page").css("display", "none"),
      $(".no-final-page").css("display", "none")
    },
    //ex out all:
    'click .travel-out': function (e) {
      e.preventDefault();
      $(".travel-page").css("display", "none"),
      $(".text-content").css("display", "block")
    },
    // NO travel SHOW AND HIDE============================================
    'click .no-travel': function (e) {
      e.preventDefault();
      $(".no-travel-page").css("display", "block"),
      $(".text-content").css("display", "none").fadeOut(1000),
      $(".relax-page").css("display", "none").fadeOut(1000)
    },
    'click .no-travel-out': function (e) {
      e.preventDefault();
      $(".no-travel-page").css("display", "none"),
      $(".text-content").css("display", "block")
    },
    // FINAL NO PAGE
    'click .no-final': function (e) {
      e.preventDefault();
      $(".no-final-page").css("display", "block"),
      $(".text-content").css("display", "none").fadeOut(1000),
      $(".travel-page").css("display", "none").fadeOut(1000)
    },
    'click .no-travel-out': function (e) {
      e.preventDefault();
      $(".no-final-page").css("display", "none"),
      $(".text-content").css("display", "block")
    },
  });
};
