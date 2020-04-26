class Item{
    constructor(name,quantity,price){
        this.name=name;
        this.quantity=quantity;
        this.price=price;
    }
}

//UI
class UI{
    static display() {
       
    
        const items = store.getItems();

        items.forEach((item)=>{
            UI.addItemToList(item)
        });
    }

   

    static addItemToList(item){
        const list=document.querySelector('#item-list');

        const row=document.createElement('tr');

        row.innerHTML=`
        <td> ${item.name}</td>
        <td> ${item.quantity}</td>
        <td> ${item.price}</td>
        <td> <a href="#" class="btn btn-danger btn-sm delete"> X </a></td>
        `;

        list.appendChild(row);
}


    static deleteItem(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
        }

    }

    static alert(msg,className){
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(msg));
        const container=document.querySelector('.container');
        const form =document.querySelector('#item-form');
        container.insertBefore(div,form);
        setTimeout(()=> document.querySelector('.alert').remove(),3000);
    };

    
}

//display default

//store
class store{
     static getItems(){
        let items;
        if(localStorage.getItem('items')===null){
            items=[];
        }

        else{
            items = JSON.parse(localStorage.getItem('items'));
        }

        return items;

     }

     static addItem(item){
        const items = store.getItems();

        items.push(item);

        localStorage.setItem('items', JSON.stringify(items));
     }

     /*static removeBook(id){
         
        const books= store.getBooks();

        books.forEach((book,index)=>{
            if(book.id === id){
                books.splice(index,1);
            }
        });

        localStorage.setItem('books',JSON.stringify(books));
     }*/
}

//events:display
UI.display();

document.addEventListener('DomContentLoaded',UI.display);

//events:add
document.querySelector('#book-form').addEventListener('submit', (e)=>{

    e.preventDefault();

    const title=document.querySelector('#title').value;
    const author=document.querySelector('#author').value;
    const id=document.querySelector('#id').value;

    //validate
    if(title==='' || author==='' || id===''){

        UI.alert('please fill all the fields','danger');
    }
   
    else{
    //instantiate
    const book=new Book(title,author,id);

    //add
    UI.addBookToList(book)

    //add book to store
    store.addBook(book);

    //success
    UI.alert('book added','success')

    //clear feild
    UI.clearfield();
    }  
});

//remove
document.querySelector('#book-list').addEventListener('click',(e)=>{
    UI.deletebook(e.target)

    store.removeBook(e.target.parentElement.previousElementSibling.textContent);

    UI.alert('book removed','success')
});


console.log(localStorage); 