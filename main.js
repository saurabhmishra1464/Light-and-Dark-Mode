const  changeThemeBtn = document.querySelector('.change-theme-btn');
const body = document.querySelector('body');

changeThemeBtn.addEventListener('click', ()=>{
    body.setAttribute('data-theme', 'dark')
    if(body.setAttribute('data-theme', 'dark')){
        body.setAttribute('data-theme',null)
    }else{
        body.setAttribute('data-theme', 'dark')
    }
})