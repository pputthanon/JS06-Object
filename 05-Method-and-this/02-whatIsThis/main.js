var name = 'Joe';
function makeUser() {
  return {
    name: 'John',
    ref: this
  };
}
let user = makeUser();
console.log(user.ref.name); // Joe

// call in window == solve in window
// user.ref == in window then use name in window