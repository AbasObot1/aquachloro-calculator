// Load header.html into the header div
fetch('../partials/header.html')
.then(response => response.text())
.then(data => {
   document.getElementById('header').innerHTML = data;
});

// Load footer.html into the footer div
fetch('../partials/footer.html')
.then(response => response.text())
.then(data => {
   document.getElementById('footer').innerHTML = data;
});