const testimonials = ["Testimonial 1", "Testimonial 2", "Testimonial 3"];
let currentIndex = 0;
function showNextTestimonial() {
  currentIndex = (currentIndex + 1) % testimonials.length;
  document.getElementById("testimonial").innerText = testimonials[currentIndex];
}
