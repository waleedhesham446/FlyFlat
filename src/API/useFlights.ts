import { useEffect, useState } from 'react';
import { FlightDeal, flightDeals } from '../flight-deals-dataset';

export const useFlights = (min: number, max: number) => {
  const [filteredAvailableFlights, setFilteredAvailableFlights] = useState<FlightDeal[] | undefined>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    setFilteredAvailableFlights(undefined);
    new Promise<FlightDeal[]>(async (resolve) => {
      await new Promise((res) => setTimeout(res, 3000));
      resolve(flightDeals.filter((flight) => flight.CostFloat >= min && flight.CostFloat <= max));
    })
      .then((data) => {
        setFilteredAvailableFlights(data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [min, max]);

  return {
    filteredAvailableFlights,
    loading,
    error,
  };
};
