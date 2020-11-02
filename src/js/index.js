const ko = require("knockout");
const createUser = require("sdk");

class ViewModel {
  constructor() {
    this.name = ko.observable("");
    this.email = ko.observable("");
    this.age = ko.observable("");
    this.step = ko.observable(0);
    this.submitForm = function (form) {
      const name = form.elements["name"].value;
      const email = form.elements["email"].value;
      const age = form.elements["age"].value;
      if (![name.length, email.length, age.length].includes(0)) {
        createUser({ name, email, age }).then((res) => {
          console.log(res);
        });
        this.step = ko.observable(1);
      }
    };
  }
}

ko.applyBindings(new ViewModel());
