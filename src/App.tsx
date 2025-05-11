import { useState, useEffect } from "react";
import { 
  Box, 
  Typography, 
  Container, 
  AppBar, 
  Toolbar, 
  Accordion,
  AccordionSummary,
  AccordionDetails,
  CircularProgress,
  Stack
} from "@mui/material";
import { 
  ExpandMore
} from '@mui/icons-material';
import Grid from "@mui/material/GridLegacy";
import { FlightDeal, flightDeals } from "./flight-deals-dataset";
import { ComparisonCard } from "./components/ComparisonCard";
import { AvaiableCard } from "./components/AvailableCard";
import { useFlights } from "./API/useFlights";
import toast from "react-hot-toast";
import { Filters } from "./components/Filters";

const App = () => {
  const [selectedFlights, setSelectedFlights] = useState<FlightDeal[]>([]);
  const [availableFlights, setAvailableFlights] = useState<FlightDeal[]>([]);
  const [priceRange, setPriceRange] = useState([1000, 3000]);
  const [maxPrice, setMaxPrice] = useState(3000);
  const [minPrice, setMinPrice] = useState(1000);

  const { filteredAvailableFlights, loading, error } = useFlights(priceRange[0], priceRange[1]);

  useEffect(() => {
    const prices = flightDeals.map(flight => flight.CostFloat);
    setMinPrice(Math.floor(Math.min(...prices) / 100) * 100);
    setMaxPrice(Math.ceil(Math.max(...prices) / 100) * 100);
    setPriceRange([Math.floor(Math.min(...prices) / 100) * 100, Math.ceil(Math.max(...prices) / 100) * 100]);
  }, []);

  useEffect(() => {
    if (!filteredAvailableFlights) return;

    setSelectedFlights(prev => {
      if (prev.length === 0) {
        setAvailableFlights(filteredAvailableFlights.slice(3));
        return filteredAvailableFlights.slice(0, 3);
      } else {
        const newAvailableFlights = filteredAvailableFlights.filter(flight => !prev.some(selectedFlight => selectedFlight.PurchasingId === flight.PurchasingId));
        setAvailableFlights(newAvailableFlights);
        return prev;
      }
    });
  }, [filteredAvailableFlights]);

  useEffect(() => {
    if (error)
      toast.error("Error fetching flights: " + error);
  }, [error]);

  const handleRemoveFlight = (flightId: string) => {
    const flightToRemove = selectedFlights.find(flight => flight.PurchasingId === flightId);
    setSelectedFlights(selectedFlights.filter(flight => flight.PurchasingId !== flightId));
    if (flightToRemove) {
      setAvailableFlights([flightToRemove, ...availableFlights]);
    }
  };

  const handleAddFlight = (flightId: string) => {
    const flightToAdd = availableFlights.find(flight => flight.PurchasingId === flightId);
    setAvailableFlights(availableFlights.filter(flight => flight.PurchasingId !== flightId));
    if (flightToAdd) {
      setSelectedFlights([...selectedFlights, flightToAdd]);
    }
  };

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      <AppBar position="static" color="primary" sx={{ mb: 4 }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            FlyFlat Flight Comparison
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="xl" sx={{ pb: 4 }}>
        {/* Filters Section */}
        <Filters  minPrice={minPrice} maxPrice={maxPrice} priceRange={priceRange} setPriceRange={setPriceRange} />

        {/* Selected Flights Comparison */}
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
          Flight Comparison
        </Typography>
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {selectedFlights.map((flight) => (
            <ComparisonCard
              key={flight.PurchasingId}
              flight={flight}
              enableRemove={selectedFlights.length > 1}
              flightsLoading={loading}
              handleRemove={handleRemoveFlight}
            />
          ))}
        </Grid>

        {/* Available Flights Section */}
        {(availableFlights.length > 0 || loading) && (
          <>
            <Accordion
              defaultExpanded
              sx={{ mb: 4, backgroundColor: "transparent", boxShadow: "none", "&::before": { display: "none" } }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="available-flights-content"
                id="available-flights-header"
                sx={{ backgroundColor: "transparent", p: 0, paddingInlineEnd: 4 }}
              >
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mt: 4, mb: 2 }}>
                  {!loading && availableFlights.length} Available Flights
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 0 }}>
                { loading ?
                  <Stack direction="row" justifyContent="center" alignItems="center" sx={{ my: 4 }}>
                    <CircularProgress size={140} />
                  </Stack> :
                  <Grid container spacing={3}>
                    {availableFlights.map((flight) => (
                      <AvaiableCard
                        key={flight.PurchasingId}
                        flight={flight}
                        enableAdd={selectedFlights.length < 3}
                        handleAdd={handleAddFlight}
                      />
                    ))}
                  </Grid>
                }
              </AccordionDetails>
            </Accordion>
          </>
        )}
      </Container>
    </Box>
  );
};

export default App;