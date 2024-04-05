const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce((currentValue, number) => {
    return number + currentValue
}, 0)
console.log(total)
