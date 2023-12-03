console.log('its clicking time!')

let clickUpgrades = [
    {
        name: 'Tools',
        price: 5,
        quantity: 0,
        multiplier: 1,
        unlocked: false,
    },
    {
        name: 'Workbench',
        price: 20,
        quantity: 0,
        multiplier: 5,
        unlocked: false,
    },

]

let automaticUpgrades = [
    {
        name: 'Young Elf',
        price: 100,
        quantity: 0,
        multiplier: 1,
        unlocked: false,
    },
    {
        name: 'Papa Elf',
        price: 250,
        quantity: 0,
        multiplier: 3,
        unlocked: false,
    },
]

let presents = 0
let clickPower = 1
let toolsPrice = 0


function mine() {
    presents += clickPower
    console.log(presents)

    updatePresents()
}

function updatePresents() {
    let giftElm = document.getElementById('presents')
    giftElm.innerHTML = presents.toString()
}

// would update all prices, i need a for each loop
// function updateUpgradePrice() {
//     let upgradeElm = document.getElementById('Upgrade Price')
//     upgradeElm.innerHTML = upgradeNewPrice.toString()
// }

// from our examples I don't see any way to update the price of each upgrade with one function.. but I do know how to do it individually, so I will just do that then
// function updateUpgradesPrice() {
//     clickUpgrades.forEach(upgrade => {
//         let updateElm = document.getElementById(upgrade.price)
//         console.log('update elm', updateElm)
//     })
// }

function buyClickUpgrade(upgradeName) {
    let upgrade = clickUpgrades.find(item => item.name == upgradeName)
    console.log(upgradeName, '|', upgrade)
    if (presents >= upgrade.price) {
        console.log('purchased')
        presents -= upgrade.price
        console.log('new presents count:', presents)
        upgrade.quantity++
        console.log('power-up count:', upgrade.quantity)
        // console.log(upgrade, 'upgrade we are purchasing')
        clickPower += upgrade.multiplier
        // console.log(clickPower, 'clickPower')
        upgrade.price = Math.round(upgrade.price * 1.5)
        upgradeNewPrice = upgrade.price
        console.log('upgrade price:', upgrade)

        updatePresents()
        // updateUpgradePrice()
    }
}

function buyAutomaticUpgrades(upgradeName) {
    let upgrade = automaticUpgrades.find(item => item.name == upgradeName)
    console.log(upgradeName, '|', upgrade)
    if (presents >= upgrade.price) {
        presents -= upgrade.price
        upgrade.quantity++
        console.log('Auto Upgrade amount', upgrade.quantity)

        updatePresents()
    }
}

function automaticIncrease() {
    automaticUpgrades.forEach(upgrade => {
        if (upgrade.quantity > 0) {
            let autoGains = upgrade.quantity * upgrade.multiplier
            presents += autoGains
            // console.log('upgrade', upgrade, '|', 'autoGains', autoGains, '|', 'presents', presents)

            updatePresents()
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
//         presents += upgradePower
//     }
// })