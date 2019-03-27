function* genNames()
{
    yield'Willian';
    yield'Jonas';
    yield'Gabi';
}

const names =genNames();
console.log(names.next());
console.log(names.next());
console.log(names.next());
console.log(names.next());
