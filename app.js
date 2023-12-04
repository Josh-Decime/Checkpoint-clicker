console.log('its clicking time!')

let clickUpgrades = [
    {
        name: 'Tools',
        price: 5,
        quantity: 0,
        multiplier: 1,
        unlocked: false,
        // quantityStatID: 'toolQuantity',
        // details: 'hammer',
        // nameTwo: 'please',
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
let autoPower = 0
// let upgradeNewPrice = 0


function mine() {
    presents += clickPower
    console.log(presents)

    updatePresents()
}

function updatePresents() {
    let giftElm = document.getElementById('presents')
    giftElm.innerHTML = presents.toString()
}

function drawClickPower() {
    let clickElm = document.getElementById('Click Power')
    clickElm.innerHTML = clickPower.toString()
}

function drawAutoPower() {

    let autoElm = document.getElementById('Auto Power')
    autoElm.innerHTML = autoPower.toString()
}

// function drawToolQuantity() {
//     let toolElm = document.getElementById('toolQuantity')
//     toolElm.innerHTML = clickUpgrades.quantity
// }


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

// lol i was way over complicating it... i need to FIND the upgrade and display it
function drawClickUpgradePrice(upgradeName) {

    let clickUpgrade = clickUpgrades.find(upgrade => upgrade.name == upgradeName)
    console.log('finding upgrade', clickUpgrade)
    console.log('price', clickUpgrade.price)
    let upgradeElm = document.getElementById(upgradeName)
    upgradeElm.innerHTML = clickUpgrade.price.toString()
    // uuugh why are you saying cant set property of null??? It literally is console logging price in the line right above it!! 
    // figured it out, there was an issue with the HTML. when i was calling it I had '' around Tools.. so it said 'Tools'
}

// function drawClickQuantity(UpgradeId) {
//     let clickUpgrade = clickUpgrades.find(Upgrade => Upgrade.Details == UpgradeId)
//     console.log('find ID', clickUpgrade)
// }

function drawAutoUpgradePrice(upgradeName) {
    let autoUpgrade = automaticUpgrades.find(upgrade => upgrade.name == upgradeName)
    console.log('finding upgrade', autoUpgrade)
    console.log('Price', autoUpgrade.price)
    let upgradeElm = document.getElementById(upgradeName)
    upgradeElm.innerHTML = autoUpgrade.price.toString()
}

// doesnt work & I am not sure why.. i checked for typos in function, array & HTML. even changed names & updated them all a couple times
// function drawClickStatQuantity(quantityStatID) {
//     let clickUpgradeStat = clickUpgrades.find(upgrade => upgrade.statQuantityID == quantityStatID)
//     console.log('finding upgrades stat', clickUpgradeStat)
//     console.log('quantity', clickUpgradeStat.quantity)
//     let upgradeElm = document.getElementById(quantityStatID)
//     upgradeElm.innerHTML = clickUpgradeStat.quantity.toString()
// }

function drawToolQuantity() {
    let toolQuantityElm = document.getElementById('toolQuantity')
    toolQuantityElm.innerHTML = clickUpgrades[0].quantity.toString()
}

function drawWorkshopQuantity() {
    let workshopQuantityElm = document.getElementById('workshopQuantity')
    workshopQuantityElm.innerHTML = clickUpgrades[1].quantity.toString()
}

function drawYoungElfQuantity() {
    let youngElfQuantityElm = document.getElementById('youngElfQuantity')
    youngElfQuantityElm.innerHTML = automaticUpgrades[0].quantity.toString()
}

function drawPapaElfQuantity() {
    let papaElfQuantityElm = document.getElementById('papaElfQuantity')
    papaElfQuantityElm.innerHTML = automaticUpgrades[1].quantity.toString()
}

function drawToolMultiplier() {
    let toolMultiplierElm = document.getElementById('toolMultiplier')
    toolMultiplierElm.innerHTML = (clickUpgrades[0].quantity * clickUpgrades[0].multiplier).toString()
}


function drawWorkshopMultiplier() {
    let workshopMultiplierElm = document.getElementById('workshopMultiplier')
    workshopMultiplierElm.innerHTML = (clickUpgrades[1].quantity * clickUpgrades[1].multiplier).toString()
}

function drawYoungElfMultiplier() {
    let youngElfMultiplierElm = document.getElementById('youngElfMultiplier')
    youngElfMultiplierElm.innerHTML = (automaticUpgrades[0].quantity * automaticUpgrades[0].multiplier).toString()
}

function drawPapaElfMultiplier() {
    let papaElfMultiplierElm = document.getElementById('papaElfMultiplier')
    papaElfMultiplierElm.innerHTML = (automaticUpgrades[1].quantity * automaticUpgrades[1].multiplier).toString()
}


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
        // ANCHOR this is an attempt to update upgrade cost, it can probably be commented out
        // upgradeNewPrice = upgrade.price
        console.log('upgrade price:', upgrade)

        updatePresents()
        drawClickPower()
        drawClickUpgradePrice(upgradeName)
        // updateUpgradePrice()

        // drawClickStatQuantity(upgradeName)
        drawToolQuantity()
        drawWorkshopQuantity()
        drawToolMultiplier()
        drawWorkshopMultiplier()
    }
}

function buyAutomaticUpgrades(upgradeName) {
    let upgrade = automaticUpgrades.find(item => item.name == upgradeName)
    console.log(upgradeName, '|', upgrade)
    if (presents >= upgrade.price) {
        presents -= upgrade.price
        upgrade.quantity++
        console.log('Auto Upgrade amount', upgrade.quantity)

        autoPower += upgrade.multiplier
        console.log('auto power', autoPower)
        upgrade.price = Math.round(upgrade.price * 1.5)
        console.log('upgrade price', upgrade)


        updatePresents()
        drawAutoPower()
        drawAutoUpgradePrice(upgradeName)

        drawYoungElfQuantity()
        drawPapaElfQuantity()
        drawYoungElfMultiplier()
        drawPapaElfMultiplier()
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