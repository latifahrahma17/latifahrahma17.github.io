// alert()
// alert("Website Anda berhasil dimuat!!!");

// addEventListener()
const press = document.getElementById("about");
press.addEventListener("click", function(){
    const x = document.getElementById("ab1");
    if(x.style.display == 'none'){
        x.style.display = 'block';
    }else{
        x.style.display = 'none';
    }
});