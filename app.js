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
        price: 20,
        quantity: 0,
        multiplier: 5,
        unlocked: false
    },

]

let automaticUpgrades = [
    {
        name: 'Reaper',
        price: 100,
        quantity: 0,
        multiplier: 1,
        unlocked: false
    },
    {
        name: 'Soul Sucker',
        price: 250,
        quantity: 0,
        multiplier: 3,
        unlocked: false
    },
]

let souls = 0
let clickPower = 1


function mine() {
    souls += clickPower
    console.log(souls)

    updateSouls()
}

function updateSouls() {
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
        // console.log(upgrade, 'upgrade we are purchasing')
        clickPower += upgrade.multiplier
        // console.log(clickPower, 'clickPower')

        updateSouls()
    }
}

function buyAutomaticUpgrades(upgradeName) {
    let upgrade = automaticUpgrades.find(item => item.name == upgradeName)
    console.log(upgradeName, '|', upgrade)
    if (souls >= upgrade.price) {
        souls -= upgrade.price
        upgrade.quantity++
        console.log('Auto Upgrade amount', upgrade.quantity)

        updateSouls()
    }
}

function automaticIncrease() {
    automaticUpgrades.forEach(upgrade => {
        if (upgrade.quantity > 0) {
            let autoGains = upgrade.quantity * upgrade.multiplier
            souls += autoGains
            // console.log('upgrade', upgrade, '|', 'autoGains', autoGains, '|', 'souls', souls)

            updateSouls()
        }
    })
}

let autoInterval = setInterval(automaticIncrease, 1000)



// function clickValue() {
// we want to increase clickPower by the multiplier * quantity forEach clickUpgrades

// clickUpgrades.forEach(upgrade => {
//     console.log(upgrade)
// })

// i think this is Sam's code
// clickUpgrades.forEach(upgrade => {
//     console.log('upgrade', upgrade)
//     let upgradePower = upgrade.multiplier * upgrade.quantity
//     console.log(upgradePower, 'power')
//     clickPower += upgradePower
// })

// clickPower += (upgradeAmount * upgradePower)
// console.log('click Power:', clickPower)
// }

// or maybe this was hers? i wrote one of these.. so wow.. i basically had it..
// clickUpgrades.forEach(upgrade => {
//     if (upgrade.quantity > 0) {
//         let upgradePower = upgrade.multiplier * upgrade.quantity
//         souls += upgradePower
//     }
// })