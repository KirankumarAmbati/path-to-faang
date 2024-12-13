/**
 * Read FAQs section on the left for more information on how to use the editor
 **/
/** Do not delete or change any function name **/

function getUserById(id, callback) {
    // simulating async request
    const randomRequestTime = Math.floor(Math.random() * 100) + 200;
  
    setTimeout(() => {
      callback("User" + id);
    }, randomRequestTime);
  }
  
  function mapLimit(inputs, limit, iterateeFn, callback) {
    // write your solution here
    let index = 0;
  
    const result = [];
  
    function callbackPostTaskComplete(reqIndex, response) {
      result[reqIndex] = response;
  
      if (result.length === inputs.length) {
        callback(result);
        return;
      }

      if(index < inputs.length) {
        iterateeFn(inputs[index], callbackPostTaskComplete.bind(null, index));
        index += 1;
      }
    }
  
    while (index < limit) {
      iterateeFn(inputs[index], callbackPostTaskComplete.bind(null, index));
      index += 1;
    }
  }
  
  mapLimit([1, 2, 3, 4, 5], 2, getUserById, (allResults) => {
    console.log("output:", allResults); // ["User1", "User2", "User3", "User4", "User5"]
  });
  