document.addEventListener("DOMContentLoaded", () => {

    let scrollB = 300
    let scrollM = 480
    //svg placement
    document.querySelector('#svg-container').style.top = `${scrollB + scrollM + 100}px`
    window.onscroll = function() {

        //contact bottom
        if (window.pageYOffset < scrollB + scrollM - 90) {
            document.querySelector('#footer-title').style.top = '220px'
            document.querySelector('#footer-title').style.opacity = '0%'
            let links = document.getElementsByClassName('contact-bottom');
            for (let i = 0; i < links.length; i++) {
                links[i].style.opacity = '0%';
                links[i].style.left = '300px';
            }
            document.querySelector('#bottom-text').style.opacity = '0%'
            document.querySelector('#svg-container').style.opacity = '0%'
        } else {
            document.querySelector('#footer-title').style.top = '0px'
            document.querySelector('#footer-title').style.opacity = '100%'
            let links = document.getElementsByClassName('contact-bottom');
            for (let i = 0; i < links.length; i++) {
                links[i].style.opacity = '100%';
                links[i].style.left = '0px';
            }
            document.querySelector('#bottom-text').style.opacity = '100%'
            document.querySelector('#svg-container').style.opacity = '100%'
        }

        if (window.pageYOffset < scrollB + scrollM - 200) {
            document.querySelector('#svg-container').style.opacity = '0%'
        } else {
            document.querySelector('#svg-container').style.opacity = '100%'
        }

        //scribble placement
        let scribbles = [...document.querySelectorAll('.scribbles')]
        if (window.innerWidth > 1300) {
            scribbles.forEach(item => {
                item.style.display = 'none'
            })
        } 
    }




})