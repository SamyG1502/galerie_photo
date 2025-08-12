 /*Name this external file gallery.js*/
const owew =()=>{
    const images = document.querySelectorAll('.preview');
images.forEach((element,i)=>{
      this.upDate(element);
  element.setAttribute("tabindex","0"); 

})}

function tabFocus(previewPic) {
    console.log("Li pati")
    upDate(previewPic);
    
}


function upDate(previewPic){
 /* In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image

   */
    console.log(previewPic)
   let imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    imageDiv.innerHTML = previewPic.alt;
	}
	

	function unDo(){
      
     let imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Hover over an image below to display here.";
	}

    // let gallery = ["https://cdn.pixabay.com/photo/2022/10/23/19/10/car-7541935_1280.jpg","https://cdn.pixabay.com/photo/2019/08/09/06/12/car-racing-4394450_1280.jpg","https://cdn.pixabay.com/photo/2023/10/19/17/13/bmw-8327275_1280.jpg",
    //     "https://s3-us-west-2.amazonaws.com/s.cdpn.io/389177/bacon3.jpg",
    //     "https://upload.wikimedia.org/wikipedia/commons/e/ec/The_Citadelle_Laferri%C3%A8re%2C_Haiti_%287761638618%29.jpg",
    //     "https://upload.wikimedia.org/wikipedia/commons/e/ec/The_Citadelle_Laferri%C3%A8re%2C_Haiti_%287761638618%29.jpg"
    // ]
    
    // let images = document.getElementsByTagName('img');
    // for(i = 0; i < images; i++);

    // images[i].setAttribute("tabindex", "0")

window.onload=owew()

