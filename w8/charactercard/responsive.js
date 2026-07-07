const stats = document.querySelector('.flavor');
const attackBtn = document.querySelector('#attack');
const levelUp = document.querySelector('#level-up');
 

const gobboEnemy = {
    portraitSource: 'mind-goblin.webp',
    title: 'Mind Goblin',
    class: 'Aberrant Goblinoid',
    baseLevel: 5,
    baseHealth: 100,

    attacked: function() {
        this.baseHealth -= 20;
    },
    levelUp: function() {
        this.baseLevel += 1;
    }
}
refresh();

function refresh() {
    stats.innerHTML = `
    <img class="image" src="${gobboEnemy.portraitSource}">
    <h1 class="name">${gobboEnemy.title}</h1>
    <section class="stats">
        <p><strong>Class:</strong> ${gobboEnemy.class}</p>
        <p><strong>Level:</strong> ${gobboEnemy.baseLevel}</p>
        <p><strong>Health:</strong> ${gobboEnemy.baseHealth}</p>
    </section>
    `;
}

attackBtn.addEventListener("click", function(){
    gobboEnemy.attacked();
    if (gobboEnemy.baseHealth === 0) {
        alert("Goblin is dead");
    }
    refresh();
});

levelUp.addEventListener("click", function(){
    gobboEnemy.levelUp();
    refresh();
});



