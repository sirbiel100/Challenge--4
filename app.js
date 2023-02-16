const sharediv = document.querySelector('.share-div')
const shareContent = document.querySelector('.share-content')
const arrow = document.querySelector('.share')


sharediv.addEventListener("mouseover", () => {
    if (innerWidth > 600){
    sharediv.style.backgroundColor = "hsl(217, 19%, 35%)"
    arrow.style.filter = 'brightness(3)'
    }
})

sharediv.addEventListener("mouseout", () => {
    if (innerWidth > 600) {
    sharediv.style.backgroundColor = "hsl(210, 46%, 95%)"
    arrow.style.filter = 'brightness(1)'
    }
})


sharediv.addEventListener("click", () => 
{
    if (shareContent.style.display == " " || shareContent.style.display =="none")
    {
    shareContent.style.display = "flex"
    sharediv.style.backgroundColor = 'hsl(217, 19%, 35%)';
    arrow.style.filter = 'brightness(3)'
    
    if (innerWidth < 600)
    {
        sharediv.style.backgroundColor = "hsl(214, 17%, 51%)"
        sharediv.style.zIndex = '2';

    } 
     } else {
        shareContent.style.display = "none"
        sharediv.style.backgroundColor = 'hsl(210, 46%, 95%)'
        sharediv.style.zIndex = '1';
        arrow.style.filter = 'brightness(1)'

    }
})



