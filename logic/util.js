'use strict'

function Util() {
  function calculateTotalDistributedPassengers({
    vipPassengersWithBusinessSeats,
    vipPassengersWithEconomySeats,
    regularPassengersWithBusinessSeats,
    regularPassengersWithEconomySeats
  }) {
    const totalNumberOfPassengers =
      vipPassengersWithBusinessSeats + vipPassengersWithEconomySeats + regularPassengersWithBusinessSeats + regularPassengersWithEconomySeats;

    return totalNumberOfPassengers;
  }

  function calculateTotalNumberOfPassengers(passengers) {
    let totalNumberOfPassengers = 0;
    passengers.forEach(numOfPassenger => {
      totalNumberOfPassengers += Number(numOfPassenger);
    });

    return totalNumberOfPassengers;
  }

  function checkInput(input) {
    if (!input) {
      throw new Error("The input should not be empty");
    }
    if (input.isNaN()) {
      throw new Error("The input should be a number");
    }
    return;
  }

  function calculateTotalDistance(distances) {
    let totalDistance = 0;
    for (let distance of distances) {
      if (Number(distance) > 0) {
        totalDistance += Number(distance);
      } else {
        continue;
      }
    }
    return totalDistance;
  }

  function calculateBonusPoints(distanceByBusiness, distanceByEconomy, businessBonus, economyBonus) {
    const totalBusinessDistance = calculateTotalDistance(distanceByBusiness);
    const totalEconomyDistance = calculateTotalDistance(distanceByEconomy);
    const bonusPoints = totalBusinessDistance * businessBonus / 100 + totalEconomyDistance * economyBonus / 100;
    return bonusPoints;
  }

  return {
    calculateTotalDistributedPassengers,
    calculateTotalNumberOfPassengers,
    checkInput,
    calculateTotalDistance,
    calculateBonusPoints
  };
}

module.exports = Util();
