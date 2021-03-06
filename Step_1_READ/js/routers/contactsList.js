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

  	var contactsView = new Application.Views["contactsList/ContactsView"]({
  		collection: Application.Collections.contacts
  	});

  	Application.setView(contactsView);

  }
}));