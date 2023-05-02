var i = 0;
var txt = 'As a young woman who is still figuring out my life, I am constantly striving to find\n' +
  'inner harmony and peace. I have recently found comfort in practising my faith as a\n' +
  'dedicated Muslim, which has helped me to address my inner problems and become\n' +
  'a better influence on those around me.\n' +
  'Kindness is a value that I highly prioritize in myself and others. I believe that by being\n' +
  'kind to ourselves and others, we can make the world a better place. My main priority\n' +
  'in life is to be content with myself, and to achieve this, I try to listen to myself instead\n' +
  'of being swayed by the opinions of others.\n' +
  'In my journey to find my path in life, I have tried many different things that I believe\n' +
  'are healthy and helpful, such as exploring new hobbies and interests. As a senior\n' +
  'student with a passion for learning, I am eager to pursue a career that will allow me\n' +
  'to continue growing and developing my skills.\n' +
  'Ultimately, my vision for the future is to find a career that aligns with my values and\n' +
  'allows me to make a positive impact on the world. I am still exploring my options,\n' +
  'but I am open to pursuing a profession in fields such as healthcare, education, or\n' +
  'social work, where I can use my skills and passion to help others and make a\n' +
  'difference in their lives.';
var speed = 300;

function isInViewport() {
  const rect = document.getElementById("thoughts").getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("thoughts").innerHTML += txt.charAt(i)
    i++
    setTimeout(typeWriter, speed)
  }
}

document.addEventListener('scroll', function () {
  if (isInViewport()) typeWriter()
}, {
  passive: true
})
