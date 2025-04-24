
// Question 11 

console.log("Task 1");
console.log("Task 2");
console.log("Task 3");


// question 12 
console.log("Message 1");

setTimeout(() => {
  console.log("Message 2 after 2 seconds");
}, 2000);

console.log("Message 3");


//output would be
// Message 1
// Message 3
// Message 2 after 2 seconds

// question 13 

const loadingInterval = setInterval(() => {
    console.log("Loading...");
  }, 1000);
  
  // Stop logging after 5 seconds and print "Loaded successfully!"
  setTimeout(() => {
    clearInterval(loadingInterval);
    console.log("Loaded successfully!");
  }, 5000);