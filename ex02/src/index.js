class Book {
    constructor(title){
    this.title = title;
}
get title(){
    return this._title;
}
set title(newTitle) {
    this._title = newTitle;
}
}


const littlePrince = new Book();
console.log(littlePrince.title);
littlePrince.title = "Le Petit Prince";
console.log(littlePrince.title);

module.exports = Book;