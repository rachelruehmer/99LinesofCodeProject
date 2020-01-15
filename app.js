let friends = ['Nyya', 'CJ', 'Seth', 'Chad', 'Hallie'];

for (i = 0; i < friends.length; i++) {
    for (j = 99; j > 0; j--) {
        if (j > 1) {
            console.log(`${j} lines of code on the wall, ${j} lines of code, ${friends[i]} takes one out, strikes it all out ${j} lines of code in a file `)
        }
        else if (j == 1) {
            console.log(`${j} line of code on the wall, ${j} line of code, ${friends[i]} takes one out, strikes it all out, ${j} line of code in the file!`)
        }
    }
}
