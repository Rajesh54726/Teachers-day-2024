// Add event listener to button
document.addEventListener("DOMContentLoaded", function() {
  const btnPrimary = document.querySelector(".btn-primary");
  btnPrimary.addEventListener("click", function() {
    // Toggle professor grid visibility
    const professorGrid = document.querySelector(".professor-grid");
    professorGrid.classList.toggle("visible");
  });
});
// Add event listener to the toggle button
document.getElementById('professor-grid-toggle').addEventListener('click', function() {
  // Toggle the visibility of the professor grid
  var professorGrid = document.querySelector('.professor-grid');
  professorGrid.classList.toggle('visible');
});
