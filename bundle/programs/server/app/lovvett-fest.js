(function(){if (Meteor.isClient) {
  $('.text-content').fadeIn(1000)
  // This code only runs on the client
  Template.body.helpers({
    rooms: [
      { text: "This is room 1" },
      { text: "This is room 2" },
      { text: "This is room 3" }
    ]
  });
};

})();
