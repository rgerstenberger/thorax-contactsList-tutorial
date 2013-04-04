Application.View.extend({
  name: "contactsList/ContactUpdateView",
  events: {
  	"submit form": function(event){
  		event.preventDefault();
  		var attributes = this.serialize();
  		var newContact = new Application.Models["contactsList/Contact"](attributes);
  		Application.Collections.contacts.add(newContact);
		$('input[type!="submit"]').val('');	
  	}
}  
});

// Instances of this view can be created by calling:
// new Application.Views["contactsList/ContactUpdateView"]()