// This ensures that the 'calculateTotalCoast' is called when the user clicks the button
document.addEventListener('DOMContentLoaded', function() {
  const calculateBtn = document.getElementById('calculateBtn');
  calculateBtn.addEventListener('click', calculateTotalCost);
});

function calculateTotalCost() { //This is responsible for calculating the total cost of petrol based on the input of the user.
  //These lines retrieves the value entered by the user then converts into a string value into a floating-point number.
  const costPerLiter = parseFloat(document.getElementById('costPerLiter').value);
  const litersPurchased = parseFloat(document.getElementById('litersPurchased').value);
  const distance = parseFloat(document.getElementById('distance').value);
  const fuelEfficiency = 10; // This assigns the value of 10 which is the value represents the fuel efficiency.

  // This calculates the total liters needed based on distance traveled inputed by the user
  const totalLitersNeeded = distance / fuelEfficiency;

  // This calculates the total cost based on total liters inputed by the user
  const totalCost = (litersPurchased + totalLitersNeeded) * costPerLiter;

  // This displays total cost
  document.getElementById('totalCost').textContent = `Total Cost: AED ${totalCost.toFixed(2)}`;
}
