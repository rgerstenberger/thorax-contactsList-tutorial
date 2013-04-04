Application.View.extend({
  name: "contactsList/ContactUpdateView",
  events: {
  	"submit form": function(event){
        event.preventDefault();
        var attributes = this.serialize();
        var contact = this.model;
        if(!contact){
          contact = new Application.Models["contactsList/Contact"](attributes);
          contact.set('id', Application.idCounter);
          Application.idCounter++;
          Application.Collections.contacts.add(contact);
          
        } else {        
          contact.set(attributes);
        }
        $('input[type!="submit"]').val('');
        Backbone.history.navigate("detail/" + contact.get("id"), true);
    }
}  
});

// Instances of this view can be created by calling:
// new Application.Views["contactsList/ContactUpdateView"]()