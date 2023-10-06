import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

// Initialize AOS with your desired configuration
AOS.init({
  duration: 1000, // Animation duration in milliseconds
  once: true, // Whether the animation should only occur once
});

export default AOS;
