'use strict'

function Flights() {
  function calculateNumberOfFlights(numberOfPassengers, flightCapacity) {
    let numberOfFlights;
    const passengers = Number(numberOfPassengers);
    const capacity = Number(flightCapacity);

    if (!Number.isInteger(passengers) || passengers <= 0) {
      throw new Error("The number of passengers must be a positive integer value");
    }

    if (!Number.isInteger(capacity) || capacity <= 0) {
      throw new Error("The capacity of the flight must be a positive integer value");
    }

    numberOfFlights = Math.floor(passengers / capacity);

    if (passengers % capacity) {
      numberOfFlights++;
    }

    return numberOfFlights;
  }

  function checkAircraftRevision(distanceLimit, distances) {
    let totalDistance = 0;
    const limit = Number(distanceLimit);
    distances.forEach(distance => {
      totalDistance += Number(distance);
    });

    if (totalDistance <= limit / 2) {
      return "The revision needs to be done within the next 3 months";
    } else if ((totalDistance > limit / 2) && (totalDistance <= limit * 0.75)) {
      return "The revision needs to be done within the next 2 months";
    } else if ((totalDistance > limit * 0.75) && (totalDistance <= limit)) {
      return "The revision needs to be done within the next month";
    } else if (totalDistance > limit) {
      throw new Error("Total distance is more than the distance limit");
    }
  }

  return { calculateNumberOfFlights, checkAircraftRevision };
}

module.exports = Flights();
