const body = document.querySelector('body');

body.insertAdjacentHTML('afterbegin', '<div class="loading" style="margin: 50vh auto; text-align:center;">Loading....</div>');

const generateOutline = (data) => {
    document.querySelector('.loading').remove()
    data.results.forEach( result => {
        body.insertAdjacentHTML('afterbegin', `
            <div class="card-container">
                <div class="card-image">
                    <img src="${result.about.thumbnail}"/> 
                </div>
                <div class="card-name">
                    <h2>${result.about.first_name} ${result.about.last_name}</h2>
                    <h3>${result.about.title}</h3>
                </div>
                <div class="card-info">
                    <h2>Current Skills</h2>
                    <div class="skill">
                    </div>
                    <h2>Future Skills</h2>
                    <div class="skill">
                    </div>
                </div>
            </div>      
        `);
        result.skills_today.skills.slice().reverse().forEach(skill => {
            document.querySelectorAll('.skill')[0].insertAdjacentHTML("afterbegin", `
                <span class="name">${skill.name}</span>
                <span class="rating"><span style="width:${skill.rating * 10}%">${skill.rating * 10}%<span></span>
            `)
        });
        result.skills_future.skills.slice().reverse().forEach(skill => {
            document.querySelectorAll('.skill')[1].insertAdjacentHTML("afterbegin", `
                <span class="name">${skill.name}</span>
                <span class="rating" style="background:#f44336;">coming soon!</span>
            `)
        });
    });
} 


fetch('https://raw.githubusercontent.com/stevenduval/outline/master/js/data.js')
    .then(response => response.json())
    .then(generateOutline)
    .catch((error) => body.insertAdjacentHTML('afterbegin', `<div class="loading" style="margin-top: 50vh; text-align: center;">Oops something went wrong. Please try again!</div>`));