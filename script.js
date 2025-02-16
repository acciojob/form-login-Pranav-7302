let submitBtn = document.getElementById('button')
let fname = document.querySelector('.fname')
let lname = document.querySelector('.lname')
function getFormvalue(){
  alert(`${fname.value} ${lname.value}`)
}

submitBtn.addEventListener('click',()=>{
  getFormvalue()
})