/**
 * 
 * AVEC JS NATIF
 * 
 */

// on récupère toutes images thumbnail
/*
let mesThumbnails = document.querySelectorAll('.thumbnail img');
console.log(mesThumbnails);

// on a récupéré une collection (un tableau array) contenant tous nos éléments, pour leur appliquer un évènement à chacun : une boucle
for(let i = 0; i < mesThumbnails.length; i++) {
    mesThumbnails[i].addEventListener('click', function () {
        // console.log(this.alt);
        // console.log(this.getAttribute('data-full'));
        this.classList.add("animate__animated");
        this.classList.add("animate__shakeX");

        let valeurAlt = this.getAttribute('alt'); // on récupère la valeur de l'attribut alt
        let valeurDataFull = this.getAttribute('data-full'); // on récupère la valeur de l'attribut data-full

        // on envoie la valeur de valeurDataFull dans le src de la grande image (id="full")
        // document.getElementById('full').src = valeurDataFull;
        document.getElementById('full').setAttribute('src', valeurDataFull);

        // on change le contenu texte du div id="legende" pour placer le contenu du alt de l'image cliquée.
        document.getElementById('legende').textContent = valeurAlt;

        this.addEventListener('mouseout', function () {
            this.classList.remove("animate__animated");
            this.classList.remove("animate__shakeX");
        });


    });
}
*/

window.addEventListener('scroll', function(e) {

    // window.scrollY nous permet d'avoir la distance entre le haut et le scroll effectué
    console.log(window.scrollY)

    if(window.scrollY > 100) {
        document.getElementById('back-to-top').style.display = 'block';
    } else {
        document.getElementById('back-to-top').style.display = 'none';
    }
});

document.getElementById('back-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({top: 0, behavior: 'smooth'});
});





/**
 * 
 * AVEC JQUERY
 * 
 */
$(document).ready(function() {

    $('.thumbnail img').on('click', function() {
        $('#full').attr('src', $(this).attr('data-full'));
        $('#legende').text($(this).attr('alt'));

        $(this).addClass('animate__animated animate__shakeX');

        $(this).on('mouseout', function () {
            $(this).removeClass('animate__animated animate__shakeX');
        })
    });

});

