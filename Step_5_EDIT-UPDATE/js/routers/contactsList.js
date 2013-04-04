new (Backbone.Router.extend({
  routes: module.routes,
  index: function(){
  	var contactOne = new Application.Models["contactsList/Contact"]({
  		firstname: "John",
  		lastname: "Doe",
  		email: "johnd@example.com",
  		phone: "666 666 6666",
     		id: 1
  	});

  	var contactTwo = new Application.Models["contactsList/Contact"]({
  		firstname: "Jane",
  		lastname: "Doe",
  		email: "janed@example.com",
  		phone: "555 555 5555",
      		id: 2
  	});

  	Application.Collections.contacts = new Application.Collections["contactsList/Contacts"]([
  		contactOne,
  		contactTwo
  	]);

    Application.idCounter = 3;

  	var contactsView = new Application.Views["contactsList/ContactsView"]({
      collection: Application.Collections.contacts,
    });

  	Application.setView(contactsView);

  },

  detail: function(id){
    var detailView = new Application.Views["contactsList/ContactDetails"]({
         model: Application.Collections.contacts.get(id)
    });
    Application.setView(detailView);
  },

  home: function(){
    var contactUpdateView = new Application.Views["contactsList/ContactUpdateView"]();
    var contactsView = new Application.Views["contactsList/ContactsView"]({
         collection: Application.Collections.contacts,
         newContactForm: contactUpdateView
       });
      Application.setView(contactsView);
  },

  addNew: function(){
    var contactUpdateView = new Application.Views["contactsList/ContactUpdateView"]();
    Application.setView(contactUpdateView);
  },

  edit: function(){
    var contactClicked = $(event.target).model();
    var contactUpdateView = new Application.Views["contactsList/ContactUpdateView"]({
      model: contactClicked
    });
    contactUpdateView.populate(contactClicked.toJSON);
    Application.setView(contactUpdateView);
  }


}));