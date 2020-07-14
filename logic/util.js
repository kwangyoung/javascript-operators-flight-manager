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

  return { calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers };
}

module.exports = Util();
