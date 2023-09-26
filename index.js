const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Use the reduce method to calculate the total number of batteries
const totalBatteries = batteryBatches.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(totalBatteries); 
// This will print the total number of batteries


