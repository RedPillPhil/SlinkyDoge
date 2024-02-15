// Define the Typed.js configuration
var typing = new Typed(".text", {
  strings: [
    "Slinky Swap.",
    "Geysers.",
    "NFT GAME.",
    "Marketing.",
    "Moon. <span id='moon-emoji'>🌕</span>" // Include the moon emoji within a span element
  ],
  typeSpeed: 10,
  backSpeed: 10,
  loop: true,
  contentType: 'html' // Set content type to HTML
});

// Hide the moon emoji initially
document.getElementById('moon-emoji').style.display = 'none';

// Function to toggle the display of the moon emoji
function toggleMoonEmoji() {
  var moonEmoji = document.getElementById('moon-emoji');
  moonEmoji.style.display = moonEmoji.style.display === 'none' ? 'inline' : 'none'; // Toggle the display property
}

// Example usage: Call the toggleMoonEmoji() function when needed
setTimeout(toggleMoonEmoji, 5000); // Display the moon emoji after 5 seconds
setTimeout(toggleMoonEmoji, 10000); // Hide the moon emoji after 10 seconds


// GSAP
gsap.registerPlugin(ScrollTrigger);
const introsplitTypes = document.querySelectorAll(".left-part h1");
introsplitTypes.forEach((char, i) => {
  const i_text = new SplitType(char);
  gsap.to(i_text.chars, {
    y: 0,
    stagger: 0.08, // text splitting transition
    duration: 0.3 // full text duration
  });
});