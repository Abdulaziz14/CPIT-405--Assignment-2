var books = [{
        title: 'Title: JavaScript: The Good Parts',
        date_published: 2008,
        author: 'by Douglas Crockford ',
        rate: 4.23,
        img: 'https://images.gr-assets.com/books/1328834793s/2998152.jpg'
    }, {
        title: 'Title: JavaScript Patterns',
        date_published: 2010,
        author: 'by Stoyan Stefanov',
        rate: 4.17,
        img: 'https://images.gr-assets.com/books/1344668503s/9422683.jpg'
    }, {
        title: 'Title: Eloquent JavaScript: A Modern Introduction to Programming',
        date_published: 2008,
        author: 'by Marijn Haverbeke',
        rate: 4.13,
        img: 'https://images.gr-assets.com/books/1308260856s/8910666.jpg'
    },
    {
        title: 'Title: Maintainable JavaScript',
        date_published: 2012,
        author: 'by Nicholas C. Zakas',
        rate: 3.86,
        img: 'https://images.gr-assets.com/books/1337560878s/13591032.jpg'
    }


]



function createBookItem(bookObj) {
    var lists = document.getElementById("listOfBooks");
    var liElem = document.createElement('li')


    var img = document.createElement('img')
    img.src = bookObj.img;
    liElem.appendChild(img);

    var BTitle = document.createElement("p")
    var Ttext = document.createTextNode(bookObj.title)
    BTitle.appendChild(Ttext)
    liElem.appendChild(BTitle)

    var author = document.createElement("p")
    var atext = document.createTextNode(bookObj.author)
    author.appendChild(atext)
    liElem.appendChild(author)

    var date = document.createElement("p")
    var dtext = document.createTextNode("Year of publish: "+bookObj.date_published)
    date.appendChild(dtext)
    liElem.appendChild(date);

    var rev = document.createElement("p")
    var rtext = document.createTextNode("Rate: "+bookObj.rate)
    rev.appendChild(rtext)
    liElem.appendChild(rev)


    return liElem
}


function sortByTitle() {
    books.sort(function (a, b) {
        var x = a.title.toLowerCase();
        var y = b.title.toLowerCase();
        if (x > y) {
            return 1;
        }
        if (x < y) {
            return -1;
        }
        return 0;

    })

}

function sortByRate() {
    books.sort(function (a, b) {

        return b.rate - a.rate;
    })

}

function sortByAuthor() {
    books.sort(function (a, b) {
        var x = a.author.toLowerCase();
        var y = b.author.toLowerCase();
        if (x > y) {
            return 1;
        }
        if (x < y) {
            return -1;
        }
        return 0;

    })

}

function sortByDate() {
    books.sort(function (a, b) {
        return b.date_published - a.date_published;
    })

}



function upDateDOM() {
    var ulBooks = document.getElementById('listOfBooks')
    ulBooks.innerHTML = ''
    for (item of books) {
        ulBooks.appendChild(createBookItem(item))
    }
}

// Sort by, select event
var select = document.getElementById("sort")
select.onchange = function () {
    if (select.value === 'byTitle') {
        sortByTitle();
        upDateDOM();
    } else if (select.value === 'byAuthor') {
        sortByAuthor();
        upDateDOM()
    } else if (select.value === 'byRate') {
        sortByRate()
        upDateDOM()
    } else if (select.value === 'byDate') {
        sortByDate()
        upDateDOM()
    }
}
upDateDOM();
