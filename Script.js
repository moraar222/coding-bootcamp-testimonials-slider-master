// Array to hold testimonial data
const testimonials = [
    {
      text: "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
      image: "./images/image-tanya.jpg",
      name: "Tanya Sinclair",
      title: "UX Engineer"
    },
    {
      text: "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
      image: "./images/image-john.jpg",
      name: "John Tarkpor",
      title: "Junior Front-end Developer"
    }
  ];
  
  // Track the current testimonial index
  let currentTestimonial = 0;
  
  // Function to update the testimonial content
  function updateTestimonial() {
    const testimonialText = document.getElementById('testimonial-text');
    const testimonialImage = document.getElementById('testimonial-image');
    const nameElement = document.querySelector('.name');
    const name2Element = document.querySelector('.name2');
  
    testimonialText.innerHTML = testimonials[currentTestimonial].text;
    testimonialImage.src = testimonials[currentTestimonial].image;
    nameElement.innerText = testimonials[currentTestimonial].name;
    name2Element.innerText = testimonials[currentTestimonial].title;
  }
  
  // Function to show the next testimonial
  function nextSlide() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    updateTestimonial();
  }
  
  // Function to show the previous testimonial
  function prevSlide() {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    updateTestimonial();
  }
  
  // Initialize the first testimonial on page load
  document.addEventListener('DOMContentLoaded', updateTestimonial);
  