// all h1 tags
const urls = document.querySelectorAll('.urlText');

//used for loading everything in on page load
window.addEventListener('load', (event) => {
    console.log('page loaded');
    for (let i=0; i<urls.length; i++) {
        if( urls[i].classList.contains('d-none')){
            setTimeout(() => { 
                urls[i].classList.remove('d-none'); 
                if(urls[i].id == 'urlTextOne') urls[i].classList.add('fadeInOne');
                if(urls[i].id == 'urlTextTwo') urls[i].classList.add('fadeInTwo');
                if(urls[i].id == 'urlTextThree') urls[i].classList.add('fadeInThree');
                if(urls[i].id == 'urlTextFour') urls[i].classList.add('fadeInFour');
                if(urls[i].id == 'urlTextFive') urls[i].classList.add('fadeInFive');
                if(urls[i].classList.contains('urlTextHead')) urls[i].classList.add('fadeInHead');
            }, i * 1000);
        }
    }
});