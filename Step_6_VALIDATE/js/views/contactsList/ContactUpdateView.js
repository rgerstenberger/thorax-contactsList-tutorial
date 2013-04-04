Application.View.extend({
  name: "contactsList/ContactUpdateView",
  events: {
  	"submit form": function(event){
      $('.error_message').remove();
      event.preventDefault();
      this.serialize(function(attributes){
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
      });
    },

    error: function(errors){
      _.each(errors, function(e){
        $('label[for="' + e.name + '"]').append('<span class="error_message">' + e.message + '</span>');
      });
    }
  },

  validateInput: function(attributes){
    var errors = [];

    if(attributes.firstname.trim() === ""){
      errors.push({
        name: "firstname",
        message: "please enter a First Name"
      });
    }
    
    return errors;
  }


});

// Instances of this view can be created by calling:
// new Application.Views["contactsList/ContactUpdateView"]()