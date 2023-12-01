console.log('its clicking time!')

let clickUpgrades = [
    {
        name: 'Scythe',
        price: 5,
        quantity: 0,
        multiplier: 1,
        unlocked: false
    },
    {
        name: 'Soul Net',
        price: 10,
        quantity: 0,
        multiplier: 5,
        unlocked: false
    }
]

let automaticUpgrades = [
    {
        name: 'Reaper',
        price: 500,
        quantity: 0,
        multiplier: 20,
        unlocked: false
    }
]

let souls = 0

function clickValue() {
    let clickPower = 1
    // we want to increase clickPower by the multiplier * quantity forEach clickUpgrades name
    clickUpgrades.forEach(upgradePower => {
        upgradePower.quantity * upgradePower.multiplier
        clickPower += upgradePower
        console.log('click Power:', clickPower)
        console.log('upgrade power', upgradePower)
    })
}

function mine() {

    souls++
    console.log(souls)

    update()
}

function update() {
    let soulElm = document.getElementById('souls')
    soulElm.innerHTML = souls.toString()
}

function buyClickUpgrade(upgradeName) {
    let upgrade = clickUpgrades.find(item => item.name == upgradeName)
    console.log(upgradeName, '|', upgrade)
    if (souls >= upgrade.price) {
        console.log('purchased')
        souls -= upgrade.price
        console.log('new souls count:', souls)
        upgrade.quantity++
        console.log('power-up count:', upgrade.quantity)

        update()
    }
}