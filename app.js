const heroSpan = document.querySelector('#hero')
const villainSpan = document.querySelector('#villain')
const resultSpan = document.querySelector('#result')
const launcherBtn = document.querySelector('button')

launcherBtn.addEventListener('click', () => {
    console.log('click')
})

const heroes = ['Harry Potter', 'Luke Skywalker', 'Lara Croft', 'Superman', 'Garfield'];
const villains = ['Lord Voldemort', 'Darth Vader', 'Saruman', 'Joker', 'Cruella']
const weapon = ['plastic fork', 'banana peel', 'flip-flop', 'magic wand', 'wooden sword', 'rotten egg']

const randomHeroIndex = Math.floor(Math.random() * heroes.length);
const randomHero = heroes[randomHeroIndex];

const randomHeroWeaponIndex = Math.floor(Math.random() * weapon.length)
const RandomHeroWeapon = weapon[randomHeroWeaponIndex]

const randomVillainIndex = Math.floor(Math.random() * villains.length)
const randomVillain = villains[randomVillainIndex]

const randomVillainWeaponIndex = Math.floor(Math.random() * weapon.length)
const randomVillainWeapon = weapon[randomHeroWeaponIndex]

const heroStrike = randomHero.length + RandomHeroWeapon.length;
const villainStrike = randomVillain.length + randomVillainWeapon.length

if(heroStrike === villainStrike){
    console.log('it is a draw!')
} else if (heroStrike > villainStrike) {
    console.log(`${randomHero} defeats ${randomVillain}, and saves the day!`)

} else {
    console.log(`${randomVillain} defeats ${randomHero}, the dark side wins!`)
}

