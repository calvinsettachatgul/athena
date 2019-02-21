var promise1 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve('foo');
  }, 800);
});
console.log({ promise1 });

promise1.then(function(value) {
  console.log(value);
  // expected output: "foo"
})
.then( () => {
  console.log({ promise1 });
  console.log('done');
})

console.log({ promise1 });

console.log(promise1);
// expected output: [object Promise]

