const ko = require("knockout");
const createUser = require("sdk");

class ViewModel {
  constructor() {
    this.name = ko.observable("");
    this.email = ko.observable("");
    this.age = ko.observable("");
    this.step = ko.observable(1);
    this.subscribe = ko.observable(false);
    this.submitForm = function () {};
  }
}

const vm = new ViewModel();
ko.applyBindings(vm);
vm.submitForm = function (form) {
  const name = form.elements["name"] ? form.elements["name"].value : "";
  const email = form.elements["email"] ? form.elements["email"].value : "";
  const age = form.elements["age"] ? form.elements["age"].value : "";
  const subscribe = form.elements["subscribe"]
    ? form.elements["subscribe"].value === "on"
    : false;
  if (![name.length, email.length, age.length].includes(0)) {
    createUser({ name, email, age }).then((res) => {
      vm.step(2);
    });
  }
  if (subscribe) {
    console.log("subscribed");
  }
};
