
/**
 * toCamelCase()
 *
 * Write a `toCamelCase` function that takes a multi word string as an argument
 * and returns a string that follows camel case convention
 *
 */
function toCamelCase(text) {
    var tempText = text.split(" ");
    var tempWord = [];
    for (let i = 1; i < tempText.length; i++) {
        tempWord = tempText[i].split('');
        for (let j = 0; j < tempWord.length; j++) {
        tempWord[j]=tempWord[j].toLowerCase();
        }
        tempWord[0]=tempWord[0].toUpperCase();
        tempText[i] = tempWord.join('');
    }
    x = tempText.join('');    
    return x;
}

//~+~+~+~+~+~+~+~Don't Touch~+~+~++~+~+~+~+~+~+~+
console.log("[1] Should return 'fetchRecords'");
console.assert(toCamelCase("fetch records") === 'fetchRecords')
console.log("====================================");
console.log();

console.log("[2] Should return 'createTableRow'");
console.assert(  toCamelCase("create table row") === 'createTableRow'  )
console.log("====================================");
console.log();

console.log("[3] Should return 'convertToHtml'");
console.assert(  toCamelCase("convert to HTML") === 'convertToHtml'  )
console.log("====================================");
console.log();

console.log("[4] Should return 'getUserAccountId'");
console.assert(  toCamelCase("get user account ID") === 'getUserAccountId'  )
console.log("====================================");
