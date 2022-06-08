let myLibrary = [
    
];
const table = document.querySelector('table');
const newBook = document.querySelector('.newBook')
const deleteButton = document.getElementsByClassName('delete')
const readButton = document.getElementsByClassName('read')
let titleRow = document.querySelector('.titleRow')
let authorRow = document.querySelector('.authorRow')
let pagesRow = document.querySelector('.pagesRow')
let readRow = document.querySelector('.readRow')
let deleteRow = document.querySelector('.deleteRow')


function Book (title, author, pages, read, index) {
    this.index = index,
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}

Book.prototype.changeRead = (index) => {
    let readProp = myLibrary[index].read;
    readProp = readProp.toLowerCase();
    console.log(readProp);
    if (readProp === 'yes') {
        myLibrary[index].read = 'No'
    } else if (readProp === 'no') {
        myLibrary[index].read = 'Yes'
    } else {
        alert('Invalid Read Value')
    }

    resetTable();
    addCells();
}




const addBookToLibrary = () => {
    const inputTitle = prompt('Input Title')
    const inputAuthor = prompt('Input Author')
    const inputPages = prompt('Input Number of Pages')
    const inputRead = prompt('Have you read this book? Input (Yes/No)')
    const index = myLibrary.length
    const addBook = new Book(inputTitle, inputAuthor, inputPages, inputRead, index)
    myLibrary.push(addBook)
    resetTable();
    addCells();

}



newBook.addEventListener('click', addBookToLibrary)




const resetTable = () => {
    const customCells = document.querySelectorAll('.customCell')

    customCells.forEach(cell => {
        cell.remove();
    })
}

const addCells = () => {
    for (i = 0; i < myLibrary.length; i++) {
        let titleHead = document.createElement('th')
        let authorCell = document.createElement('td')
        let pagesCell = document.createElement('td')
        let readCell = document.createElement('td')
        readCell.classList.add('read')
        readCell.id = i
        let deleteCell =document.createElement('td')
        deleteCell.classList.add('customCell')
        deleteCell.classList.add('delete')
        deleteCell.id = i
        let deleteIcon = document.createElement('img')
        deleteIcon.src = 'icons/delete.svg'
        deleteIcon.id = i
        deleteCell.appendChild(deleteIcon)
        titleHead.id = i
        titleHead.textContent = myLibrary[i].title
        titleHead.classList.add('customCell')
        authorCell.textContent = myLibrary[i].author
        authorCell.classList.add('customCell')
        pagesCell.textContent = myLibrary[i].pages
        pagesCell.classList.add('customCell')
        readCell.textContent = myLibrary[i].read
        readCell.classList.add('customCell')
        titleRow.appendChild(titleHead)
        authorRow.appendChild(authorCell)
        pagesRow.appendChild(pagesCell)
        readRow.appendChild(readCell)
        deleteRow.appendChild(deleteCell)
    }

    console.log(deleteButton);
    for(i = 0; i < deleteButton.length; i++) {
        deleteButton[i].addEventListener('click', e => {
            selectedIndex = e.target.id
            myLibrary.splice(selectedIndex, 1)
            resetTable();
            addCells();
        })
    }

    for(i = 0; i < readButton.length; i++) {
        readButton[i].addEventListener('click', e => {
            bookID = e.target.id
            myLibrary[bookID].changeRead(bookID);
        })
    }
}



