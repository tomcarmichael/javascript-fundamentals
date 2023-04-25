class User {
  constructor(name) {
    this.name = name;
  }

  getIntroduction() {
    return `Hi, my name is ${this.name}`
  }
}

class UserBase {
  constructor(usersArray) {
    this.users = usersArray;
  }

  getNames() {
    return this.users.map((user) => {
      return user.name;      
    })
  }

  count() {
    return this.users.length;
  }

  getIntroductions() {
    return this.users.map((user) => {
      return user.getIntroduction();
    })
  }
}

// const user = new User('Tom')

// console.log(user.name);

// console.log(user.getIntroduction());

const users = [
  new User('Uma'),
  new User('Josh'),
  new User('Ollie')
];

const userBase = new UserBase(users);

console.log(userBase.getIntroductions());

console.log(userBase.getNames());


module.exports = {
  User: User, 
  UserBase: UserBase
}