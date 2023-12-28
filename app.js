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
let autoPower = 0



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


function drawClickUpgradePrice(upgradeName) {

    let clickUpgrade = clickUpgrades.find(upgrade => upgrade.name == upgradeName)
    console.log('finding upgrade', clickUpgrade)
    console.log('price', clickUpgrade.price)
    let upgradeElm = document.getElementById(upgradeName)
    upgradeElm.innerHTML = clickUpgrade.price.toString()
}



function drawAutoUpgradePrice(upgradeName) {
    let autoUpgrade = automaticUpgrades.find(upgrade => upgrade.name == upgradeName)
    console.log('finding upgrade', autoUpgrade)
    console.log('Price', autoUpgrade.price)
    let upgradeElm = document.getElementById(upgradeName)
    upgradeElm.innerHTML = autoUpgrade.price.toString()
}



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
        console.log(upgrade, 'upgrade we are purchasing')
        clickPower += upgrade.multiplier
        console.log(clickPower, 'clickPower')
        upgrade.price = Math.round(upgrade.price * 1.5)
        console.log('upgrade price:', upgrade)

        updatePresents()
        drawClickPower()
        drawClickUpgradePrice(upgradeName)



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


// test timer
// let countdownTime = 1 * 10 * 1000

let countdownTime = 12 * 60 * 1000

function updateTimer() {
    countdownTime -= 1000

    let minutes = Math.floor(countdownTime / (1000 * 60))
    let seconds = Math.floor((countdownTime % (1000 * 60)) / 1000)

    document.getElementById('timer').innerHTML = `${minutes}m ${seconds}s`

    if (countdownTime == 0 && presents < 100000) {
        alert('Christmas is Ruined!')
    }
    if (countdownTime == 0 && presents > 100000) {
        alert('You saved christmas!')
    }
}


setInterval(updateTimer, 1000)


updateTimer()