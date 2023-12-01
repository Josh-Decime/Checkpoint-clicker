console.log('its clicking time!')

let clickUpgrades = [
    {
        name: 'Scythe',
        price: 5,
        quantity: 0,
        multiplier: 1,
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
        // quantity++
        // console.log(upgrade.quantity)

    }
}