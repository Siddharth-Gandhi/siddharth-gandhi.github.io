const birthYear = 2001;
const currentYear = new Date().getFullYear();
const age =
  new Date() > new Date(`11/24/${currentYear}`)
    ? currentYear - birthYear
    : currentYear - birthYear - 1;
document.getElementById('age').innerText = `${age}`;

// particlesJS.load(@dom-id, @path-json, @callback (optional));
particlesJS.load('particles-js', 'particles.json', function () {
  console.log('callback - particles.js config loaded');
});
