function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    // Source: https://stackoverflow.com/questions/3809401/what-is-a-good-regular-expression-to-match-a-url
    let expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    let regex = new RegExp(expression);
    if (inputText.match(regex)) {
      console.log("Valid url");
      return true;
    } else {
      console.log("Invalid url");
      return false;
    }
}

export { checkForName }
