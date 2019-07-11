$(function() {
  $('.nav-bar li span').click(function() {
    $('.active').removeClass('active');
    $(this).addClass('active');

    $('.container').toggleClass('change');
  });

  $('.circle').click(function() {
    $('.circle').addClass('grow');
  });
});

function performAuth() {
  const authElement = Array.from(document.getElementsByClassName('active'))[0];
  authElement.id == 'login' ? login() : signup();
}

function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  if (!username || !password) return alert('All login fields are required');
  postRequest('/login', {username, password});
}

function signup() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;
  if (!username || !password || !confirmPassword) {
    return alert('All sign up fields are required');
  }
  if (password != confirmPassword) {
    return alert('password mismatch with password confirmation field');
  }
  postRequest('/signup', {username, password});
}

function postRequest(url, body) {
  $.ajax({
    type: 'POST',
    url: url,
    data: JSON.stringify(body),
    dataType: 'json',
    contentType: 'application/json',
    processData: false,
    success: function(data) {
      alert(data.success);
      window.location.href = data.redirect || '/';
    },
    failure: function(data) {
      alert(data.error);
    },
  });
}
