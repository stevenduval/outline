const body = document.querySelector('body');

const generateOutline = (data) => {
    data.results.forEach( result => {
        result.skills_today.skills.forEach(skill => console.log(skill.name));
        //result.skills_future.skills.forEach(skill => console.log(skill.name));
        body.insertAdjacentHTML('afterend', `
        <img src="${result.picture.thumbnail}" />
        ${result.name.first}
        ${result.name.last}
        ${result.skills_future.skills}
        
        `);
    });
} 




fetch('https://raw.githubusercontent.com/stevenduval/outline/master/js/data.js')
    .then(response => response.json())
    .then(generateOutline)
    .catch((error) => console.log('error fetching json data'));

   