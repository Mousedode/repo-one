
const link = document.querySelector(".header__loop");
const search = document.querySelector(".header__search");
const button = document.querySelector(".header__button");
const login = document.querySelector(".modal__login");
const register = document.querySelector(".modal__register");
const logexit = document.querySelector(".login__exit");
const regexit = document.querySelector(".register__exit");
const regbutton = document.querySelector(".register__link");
const logbutton = document.querySelector(".login__link");

link.addEventListener("click",function(evt){
    evt.preventDefault();
    search.classList.remove("header__search--hide");
    link.addEventListener("click",function(evt){
        evt.preventDefault();
        search.classList.add("header__search--hide")
    
    });
    
});


button.addEventListener("click",function(even){
    even.preventDefault();
    login.classList.remove("hidden");
});
logexit.addEventListener("click", function(evt){
    evt.preventDefault();
    login.classList.add("hidden")
});
regbutton.addEventListener("click",function(even){
    even.preventDefault();
    register.classList.remove("hidden");
    login.classList.add("hidden");

});
regexit.addEventListener("click", function(evt){
    evt.preventDefault();
    register.classList.add("hidden");
});
logbutton.addEventListener("click",function(even){
    even.preventDefault();
    login.classList.remove("hidden");
    register.classList.add("hidden");
    

});

