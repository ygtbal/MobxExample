import { observable, action } from "mobx";

class MainStore {
    @observable user = {
        firstName: "Yiğit",
        lastName: "Balalan"
    }
    @action changeName(firstName, lastName) {
        this.user.firstName = firstName;
        this.user.lastName = lastName;
    }
}

const store = new MainStore();
export default store;