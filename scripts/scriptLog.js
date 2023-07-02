const emailInput = document.querySelector(`.email`)
const usernameInput = document.querySelector(`.username`)
const passwordInput = document.querySelector(`.password`)
const btn = document.querySelector(`.login--btn--reg`)
const params = [1,2,3,3,4]
 function  fetchGet(url,postOrGet){
    fetch(url).then((response)=>response.json())
    .then((data)=>{
        console.log(data);
    })
}
btn.addEventListener(`click`, async()=>{
    let data = {
        "email" : emailInput.value,
        "phone":usernameInput.value,
        "pass":passwordInput.value
    }
    // let arrFromDb = await fetchGet(`../db/db.json`)  
    fetchPost(`../db/db.json`,data)
})
async function fetchPost(url, data) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      if (!response.ok) {
        throw new Error('Ошибка при выполнении запроса POST');
      }
      
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.log(error);
    }
  }
  
    
