Application.Collection.extend({
  name: "contactsList/Contacts",
  model: Application.Models["contacts/Contact"]
});

// Instances of this collection can be created by calling:
// new Application.Collections["contactsList/Contacts"]()