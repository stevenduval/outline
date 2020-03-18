fetch('https://raw.githubusercontent.com/stevenduval/outline/master/js/data.js')
    .then(response => response.json)
    .then(data => console.log(data));