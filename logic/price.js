'use strict'

function Prices() {
  function calculateFinalPrice(basePrice, passengerType, flightType) {
    const finalPrice = (basePrice + (passengerType / 100 * basePrice)) * (1 + flightType / 100);
    return finalPrice.toFixed(2);
  }

  function calculateDefaultFinalPrice(basePrice, passengerType, flightType) {
    let rateByPassenger;
    let rateByFlight;

    if (passengerType.toUpperCase() === "VIP") {
      rateByPassenger = 0.05;
    } else if (passengerType.toUpperCase() === "REGULAR") {
      rateByPassenger = -0.05;
    } else {
      throw new Error(`The passenger type ${passengerType} is not supported.`);
    }

    if (flightType.toUpperCase() === "BUSINESS") {
      rateByFlight = 0.1;
    } else if (flightType.toUpperCase() === "ECONOMY") {
      rateByFlight = -0.03;
    } else {
      throw new Error(`The flight type ${flightType} is not supported.`);
    }

    const finalPrice = (basePrice + rateByPassenger * basePrice) * (1 + rateByFlight);
    return finalPrice.toFixed(2);
  }

  function calculateTotalFinalPrice(
    numOfSeats,
    passengerType,
    flightType,
    basePrice) {
    const finalPrice = Number(numOfSeats) * calculateDefaultFinalPrice(basePrice, passengerType, flightType);
    return finalPrice.toFixed(2);
  }

  return { calculateFinalPrice, calculateDefaultFinalPrice, calculateTotalFinalPrice };
}

module.exports = Prices();