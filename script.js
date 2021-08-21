document.querySelector('button').addEventListener('click', noDefault);
document.querySelector('a').addEventListener('click', noDefault);

function noDefault () {
  e.preventDefault();
}