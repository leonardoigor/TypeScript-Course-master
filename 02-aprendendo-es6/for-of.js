var text ='ireland';
var it = text[Symbol.iterator]();

// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// console.log(it.next());

for(letter of text)
{
    console.log(letter);
    // if(letter ==='l')break;
}