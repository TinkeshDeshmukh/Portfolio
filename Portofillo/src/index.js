const Skill_Link=document.getElementById("Link_1");
const l_1=document.getElementById("l-1");
const l_2=document.getElementById("l-2");
const l_3=document.getElementById("l-3");
const l_4=document.getElementById("l-4");
const l_5=document.getElementById("l-5");
const images=document.querySelectorAll(".img");
const imageSlideshow = () => {
    
    setInterval(() => {
      const selectedImage = images[Math.floor(Math.random() * images.length)];
  
      images.forEach((image) => {
        image.style.opacity = image === selectedImage ? "1" : "0";
        if (image === selectedImage) {
          imagerPeak(image);
        }
      });
    }, 2000);
  };
  
  // Highlight selected image
  const imagerPeak = (image) => {
    image.style.transition = "opacity 0.7s ease-in-out, transform 0.7s ease-in-out";
    image.style.transform = "scale(1.1)";
    setTimeout(() => {
      image.style.transform = "scale(1)";
    }, 1900);
  };
  imageSlideshow();
  Skill_Link.addEventListener("click",()=>{
    l_1.style.animation="l1 3s ease 1"
    l_2.style.animation="l2 3s ease 1"
    l_3.style.animation="l3 3s ease 1"
    l_4.style.animation="l4 3s ease 1"
    l_5.style.animation="l5 3s ease 1"
    setTimeout(() => {
      l_1.style.animation="none"
    l_2.style.animation="none"
    l_3.style.animation="none"
    l_4.style.animation="none"
    l_5.style.animation="none"
    }, 3000);
  })
