// throw 'myException';
// throw true;

try {
  throw "myException";
} catch (ex) {
  console.log(`Got an error: ${ex}`);
  // logError(ex);
} finally {
  console.log("Code that always will run");
}
