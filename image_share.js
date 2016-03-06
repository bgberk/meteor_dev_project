Images = new Mongo.Collection("images");

if (Meteor.isClient) {
    Template.images.helpers({images:Images.find()});

    Template.images.events({
      'click .js-hide-image':function(event) {
        var img_id = this._id;
        $("#"+img_id).hide('slow')
      } //end of click event
    })
}