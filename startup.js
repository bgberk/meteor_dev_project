if (Meteor.isServer) {
	Meteor.startup(function(){
		if (Images.find().count() == 0) {
			for (var i = 1; i < 7; i++) {
				Images.insert(
				{
					img_src:"me"+i+".jpg",
					img_alt:"faerie production photo "+i
				}); //end of insert
			} //end of for loop
		} //end of if have no images
	}); //end of startup function
}