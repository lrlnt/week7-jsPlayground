console.log('Yo from JS');
const images=["pic1","pic2","pic3","pic4","pic5"];
const mainImage=document.querySelector("img");
const mainButton=document.querySelector(".btn");

mainButton.addEventListener('click', () => {
    changePicture();
})

function changePicture() {
    let randomIndex=Math.floor(Math.random() * images.length);

    while (mainImage.src.indexOf(images[randomIndex]) >= 0) {
        randomIndex=Math.floor(Math.random() * images.length);
    } // while
    
    console.log("mainImage:"+mainImage.src+"; rnd new image: " + images[randomIndex] + "; indexOf: " + mainImage.src.indexOf(images[randomIndex]));
    mainImage.src="images/"+images[randomIndex]+".jpg";
} // changePicture