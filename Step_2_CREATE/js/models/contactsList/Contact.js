Application.Model.extend({
  name: "contactsList/Contact",
  defaults: {
  	firstname: "",
  	lastname: "",
  	phone: "",
  	email: "",
  }
});

// Instances of this model can be created by calling:
// new Application.Models["contactsList/Contact"]()