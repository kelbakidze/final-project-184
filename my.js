function toggleRegistrationForm() {
    var form = document.getElementById('registrationForm');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
}

function menuFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }