function validateLoginForm() {
  var username = document.forms["loginForm"]["username"].value;
  var password = document.forms["loginForm"]["password"].value;

  if (username == null || username == "") {
    alert("Username must be filled out");
    return false;
  }

  if (password == null || password == "") {
    alert("Password must be filled out");
    return false;
  }

  if (username !== "admin" || password !== "1234") {
    alert("Wrong username or password");
    return false;
  }

  alert("Login successful!");
  return true;
}

document.querySelector(".registration-form").addEventListener("submit", function(event) {
  var password = document.querySelector('input[name="password"]').value;
  var confirmPassword = document.querySelector('input[name="confirm_password"]').value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    event.preventDefault();
    return false;
  }

  event.preventDefault();
  alert("Registered Successfully!");
  window.location.href = "mainPage.html";
  return true;
});

function changeHeart() {
  const heartIcon = document.getElementById('heart');
  if (heartIcon.src.includes('heartIcon.png')) {
    heartIcon.src = 'Photos/favorite.png';
    alert("Thank you for Liking our Page");
  } else {
    heartIcon.src = 'Photos/heartIcon.png';
  }
}


