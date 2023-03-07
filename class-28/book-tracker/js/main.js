//Event listeners for buttons
document.querySelector('.add').addEventListener('click', getFetch)
document.querySelector('.clear').addEventListener('click', clear)
//checking for booklist memory that loading into dom if true
if(localStorage.getItem('bookList')){
  let bookArr = localStorage.getItem('bookList').split('~')
        bookArr.forEach(x => {
          const bookLi = document.createElement('li')
          bookLi.style.color = 'red'
          bookLi.textContent = x
          document.querySelector('ul').appendChild(bookLi)
        })
}
//function for clearing list memory 
function clear(){
  localStorage.clear()
  document.querySelector('ul').innerHTML = ''
}
//function for getting data from isdn saving to locat storage and appending to dom 
function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://openlibrary.org/isbn/${choice}.json`
  
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        //alert if input invalid
        if(!data.title){
          alert('Not a valid ISDN')
        //get data and save as string to local storage  
        } else {
          //for no existing memory case
          if(!localStorage.getItem('bookList')){
            localStorage.setItem('bookList', data.title)
          //for already existing memory case
          }else{
            let bookList = localStorage.getItem('bookList') + '~' + data.title
            localStorage.setItem('bookList', bookList)
          }
        //split local storage string into array and loop through appending each to dom
        document.querySelector('ul').innerHTML = ''
        let bookArr = localStorage.getItem('bookList').split('~')
        bookArr.forEach(x => {
          const bookLi = document.createElement('li')
          bookLi.style.color = 'red'
          bookLi.textContent = x
          document.querySelector('ul').appendChild(bookLi)
        })
        }
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

