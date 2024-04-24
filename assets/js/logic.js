
// WHEN I click the light mode/dark mode toggle, THEN the page content's styles update to reflect the selection.

const toggleMode = document.getElementById('toggle-mode');


// I received help from a TA for this function:

toggleMode.addEventListener('change', function () {
  const isChecked = this.checked;

  if (isChecked === true) {
    document.body.classList.toggle('dark-mode');

  } else {
    document.body.classList.remove('dark-mode');
  }

});
