const ireland = ['Dublin','Galway','Cprl'];
const love = ireland.map(function(name)
{
    return `I love ${name}!`;
});

const loveArrow = ireland.map((name) =>
{
    return `I love ${name}!`;
});
const loveArrowSingleLine = ireland.map(name =>`I love ${name}!`);

const loveChain = ireland
.filter(name => name ==='Dublin')
.map(name => `I love ${name}!`);

console.log(love);
console.log(loveArrow);
console.log(loveArrowSingleLine);
console.log(loveChain);