console.log("Printing my name 5 times:");

// A for loops
for (var count = 0 ; count < 5 ; count++) {
    console.log("Gobind");
}

/*

Star pattern 1

*
* *
* * *
* * * *
* * * * *

*/

console.log("Start pattern 1:");

for (var row = 0 ; row < 5 ; row++) {
    var output = "";
    for (var column = 0 ; column <= row ; column++) {
        output += "* ";
    }
    console.log(output);
}

/*

Star pattern 2

* * * * *
* * * *
* * *
* *
*

*/

console.log("Start pattern 2:");

for (var row = 5 ; row > 0 ; row--) {
    output = "";
    for (var column = row ; column >= 1 ; column--) {
        output += "* ";
    }
    console.log(output);
}
