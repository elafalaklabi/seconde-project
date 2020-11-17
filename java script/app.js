const options = {
    rootMargin: '0px',
    threshold: 1.0
}
/* called the obsever to observe each section */ 

  let observer = new IntersectionObserver(scrolling,options);
  document.querySelectorAll('section ').forEach(section=>{
      observer.observe(section);
  });
  function scrolling(entries, observer) {
    entries.forEach(entry => {
  if(entry.isIntersecting === true){
  entry.target.classList.toggle('scrolling');
}
});
}
/* when ever it os intersecting it will call the styling class to be in an active state*/

const sections = document.querySelectorAll('section');

for (i = 0; i < sections.length; i++) {
    let li = document.createElement('li');
     let anchor= document.createElement('a'); 

  const menu = document.querySelector('.menu__link');
  menu.appendChild(li);
  li.appendChild(anchor);
}
/* created the navbar using the loop to be dynamic */

document.getElementsByTagName("a")[0].setAttribute("id", "about");
document.getElementsByTagName("a")[1].setAttribute("id", "gallery");
document.getElementsByTagName("a")[2].setAttribute("id", "product");
document.getElementsByTagName("a")[3].setAttribute("id", "contact");
/* create id for each anchor */

about.textContent = 'About Us';
gallery.textContent = 'Gallery';
product.textContent = 'Prodcut';
contact.textContent = 'Contact Us';
/* set names for the links using (text content)*/

about.addEventListener('click',function(){
    window.scroll({
    top:300, behavior:'smooth'
   });
});

gallery.addEventListener('click',function(){
    window.scroll({
    top:1000, behavior: 'smooth'
   });
}); 

product.addEventListener('click',function(){
         
    window.scroll({
    top:1600, behavior: 'smooth'
   });
});

contact.addEventListener('click',function(){
         
    window.scroll({
        top:2300, behavior: 'smooth'
    });
});
/* called the id for each (a) tag and made it scroll to specifc area using window.scroll */




 

 
