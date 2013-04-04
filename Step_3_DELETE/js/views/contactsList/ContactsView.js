Application.View.extend({
  name: "contactsList/ContactsView",
  events: {
  	"click button[name='delete']": function(event){
  		event.preventDefault();
  		var modelClicked = $(event.target).model();
  		Application.Collections.contacts.remove(modelClicked);
  	}
  }
});

// Instances of this view can be created by calling:
// new Application.Views["contactsList/ContactsView"]()