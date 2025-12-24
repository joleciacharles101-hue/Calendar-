function showMonth(monthId) {
  const months = document.querySelectorAll('.month');
  months.forEach(month => {
    month.classList.remove('active');
  });

  document.getElementById(monthId).classList.add('active');
}
