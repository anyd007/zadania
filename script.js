// let result = ''
// const newDiv = document.createElement('div');
// const newClass = document.querySelector('.result');
// newDiv.classList.add('result');
// document.body.append(newDiv);
// result = ''
// for(let i = 0; i<=100; i++){
// result+=i+' ,';
// newDiv.textContent = result
// }


// const wiersz = document.querySelector('.dom1');
// const wiersz2 = document.querySelector('.dom2')
// for(let i = 0; i<= 10; i++){
//   let number = document.createElement('tr');
//   wiersz.append(number);
//   number.textContent = i
// }
// for(let i = 0; i<=10; i++){
//   let number2 = document.createElement('tr');
//   wiersz2.append(number2);
//   number2.textContent = i*i
// }


// let result
// const newUl = document.createElement('ul');
// document.body.append(newUl);
// for(let i = 0; i<= 6; i++){
// let newLi = document.createElement('li');
// newUl.append(newLi);
// newLi.textContent = i
// }

const elements = document.querySelectorAll('.ele');
const show = document.querySelector('#opis');

let test = function(){
   show.textContent = this.id
   setTimeout(() => {
     show.textContent = ''
   },1000)
}


for(const element of elements){
  element.addEventListener('click', test)
}






