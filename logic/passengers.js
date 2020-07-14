function Passengers() {
  function checkFlightCapacity(flightCapacity, passengersNumbers) {
    let totalNumberOfPassengers = 0;
    const capacity = Number(flightCapacity);

    passengersNumbers.forEach(numberOfPassengers => {
      totalNumberOfPassengers += Number(numberOfPassengers);
    });

    if (totalNumberOfPassengers <= capacity) {
      return totalNumberOfPassengers;
    } else {
      throw new Error("There are more passengers than the flight capacity");
    }
  }

  function distributeAllSeatsToAllPassengers(
    numVIPPassengers,
    numRegularPassengers,
    numFlights,
    numBusinessSeatsPerFlight,
    numEconomySeatsPerFlight) {
    const totalBusinessSeats = numFlights * numBusinessSeatsPerFlight;
    const totalEconomySeats = numFlights * numEconomySeatsPerFlight;
    let vipPassengersWithBusinessSeats = 0;
    let vipPassengersWithEconomySeats = 0;
    let regularPassengersWithBusinessSeats = 0;
    let regularPassengersWithEconomySeats = 0;

    // VIP 승객수가 Business 좌석수보다 적을 때
    if (numVIPPassengers <= totalBusinessSeats) {
      // VIP 고객 모두 Business 좌석 할당
      vipPassengersWithBusinessSeats = numVIPPassengers;
      // 잔여 Business 좌석 수가 일반 고객수보다 작을 때
      if (totalBusinessSeats - numVIPPassengers < numRegularPassengers) {
        // 잔여 Business 좌석 모두 일반 고객에게 할당 
        regularPassengersWithBusinessSeats = totalBusinessSeats - numVIPPassengers;
        // 일반 고객 중 나머지는 Economy 좌석 할당
        // 일반 고객의 숫자가 잔여 좌석보다 많을 때
        if (numRegularPassengers > totalEconomySeats + regularPassengersWithBusinessSeats) {
          regularPassengersWithEconomySeats = totalEconomySeats;
        } else { // 일반 고객의 숫자가 잔여 좌석보다 적을 때
          regularPassengersWithEconomySeats = numRegularPassengers - regularPassengersWithBusinessSeats;
        }
      } else { // 잔여 Business 좌석 수가 일반 고객수보다 클 때, 모든 일반 고객에게 Business 좌석 할당
        regularPassengersWithBusinessSeats = numRegularPassengers;
      }
    } else { // VIP 승객수가 Business 좌석수보다 많을 때
      // VIP 승객수가 Business와 Economy 좌석 전체합보다 많을 때, 모든 좌석 VIP 고객에게 할당
      if (numVIPPassengers > totalBusinessSeats + totalEconomySeats) {
        vipPassengersWithBusinessSeats = totalBusinessSeats;
        vipPassengersWithEconomySeats = totalEconomySeats;
      } else { // VIP 승객수가 Business와 Economy 좌석 전체합보다 적을 때
        vipPassengersWithBusinessSeats = totalBusinessSeats;
        vipPassengersWithEconomySeats = numVIPPassengers - totalBusinessSeats;
        // 일반 승객 숫자가 잔여 Economy 좌석 수보다 적을 때 
        if (numRegularPassengers < totalEconomySeats - vipPassengersWithEconomySeats) {
          regularPassengersWithEconomySeats = numRegularPassengers;
        } else { // 일반 승객 숫자가 잔여 Economy 좌석 수보다 클 때 
          regularPassengersWithEconomySeats = totalEconomySeats - vipPassengersWithEconomySeats;
        }
      }
    }

    return {
      vipPassengersWithBusinessSeats,
      vipPassengersWithEconomySeats,
      regularPassengersWithBusinessSeats,
      regularPassengersWithEconomySeats
    };
  }

  return { checkFlightCapacity, distributeAllSeatsToAllPassengers };
}

module.exports = Passengers();
