console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe");
}

// The exercise starts here!
// Task 1
function showWelcomeMessage(userName) {
  console.log(`Welcome ${userName}! You are logged in now.`);
}

handleUserLogin(showWelcomeMessage);

// Task 2
handleUserLogin(function (userName) {
  console.log(`Welcome ${userName}! You are logged in now.`);
});
