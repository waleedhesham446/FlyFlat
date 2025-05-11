import { 
  Box, 
  Card, 
  CardContent, 
  Typography, 
  Chip, 
  Button, 
  Divider,
  Stack,
} from "@mui/material";
import { 
  ArrowRightAlt,
} from '@mui/icons-material';
import Grid from "@mui/material/GridLegacy";
import { FlightDeal } from "../flight-deals-dataset";
import { FlightLocation } from "./FlightLocation";
import moment from "moment";
import { useMemo } from "react";
import { FlightCardHeader } from "./FlightCardHeader";

interface ComparisonCardProps {
  flight: FlightDeal;
  enableRemove: boolean;
  flightsLoading: boolean;
  handleRemove: (id: string) => void;
}

export const ComparisonCard = ({ flight, enableRemove, flightsLoading, handleRemove }: ComparisonCardProps) => {

  const travelDuration = useMemo(() => {
    const TotalTravelTimeMinutes = Number(flight.TotalTravelTimeMinutes);
    return {
      hours: Math.floor(TotalTravelTimeMinutes / 60),
      minutes: TotalTravelTimeMinutes % 60,
    };
  }, [flight]);
  
  return (
    <Grid item xs={12} md={4} key={flight.PurchasingId}>
      <Card sx={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 3 }}>
        <FlightCardHeader flight={flight} type="comparison" enableButton={enableRemove && !flightsLoading} handleButtonClick={handleRemove} />
        <CardContent sx={{ flexGrow: 1, pb: 0 }}>
          <Grid container spacing={2}>
            <FlightLocation
              airport={flight.Origin}
              city={flight.OriginCityName}
              isStart={true}
            />

            <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Box textAlign="center">
                <Typography sx={{ fontWeight: 600, fontSize: 14 }}>{flight.connections.length} Stop</Typography>
                <ArrowRightAlt sx={{ width: '100%' }} fontSize="large" />
              </Box>
            </Grid>

            <FlightLocation
              airport={flight.Destination}
              city={flight.DestinationCityName}
              isStart={false}
            />
          </Grid>
          
          <Divider sx={{ my: 2 }} />
          
          <Typography sx={{ fontWeight: 600 }}>
            <strong>Flight Numbers:</strong> {flight.FlightNumbers.join(" - ")}
          </Typography>
          
          <Divider sx={{ my: 2 }} />
          
          <Box sx={{ mb: 2 }}>
            <Typography sx={{ fontWeight: 600, color: 'rgb(71, 84, 103)' }}>
              Departs: 
            </Typography>
            <Typography sx={{ color: '#1D2939' }}>
              {moment(flight.DepartureTime).format('ddd, MMM D, YYYY [at] h:mm A')}
              <span style={{color: '#666'}}> ({ flight.OriginTimeZone })</span>
            </Typography>
          </Box>

          <span style={{color: '#666'}}>({`${travelDuration.hours}h`} {`${travelDuration.minutes}m`})</span>
          
          <Box sx={{ my: 2 }}>
            <Typography sx={{ fontWeight: 600, color: 'rgb(71, 84, 103)' }}>
              Arrives: 
            </Typography>
            <Typography sx={{ color: '#1D2939' }}>
              {moment(flight.ArrivalTime).format('ddd, MMM D, YYYY [at] h:mm A')}
              <span style={{color: '#666'}}> ({ flight.DestinationTimeZone })</span>
            </Typography>
          </Box>
          
          <Divider sx={{ my: 2 }} />
          
          <Box display="flex" justifyContent="space-between" alignItems="flex-start">
            <Stack gap={1.5}>
              <Stack direction="row" alignItems="center">
                <img src="https://deals.fly-flat.com/FF%20LogomarkBlack.svg" alt="FlyFlat Logo" style={{ width: 24, height: 24, marginRight: 8 }} />
                <Typography component="span" sx={{ color: '#475467', fontWeight: 600 }}>FlyFlat </Typography>
                <Chip 
                  label={`${flight.PercentBelowAverage}% OFF`} 
                  size="small" 
                  sx={{ ml: 2, backgroundColor: 'rgba(255, 148, 61, 0.2)', color: 'rgb(254, 125, 20)', fontWeight: 700, borderRadius: 2, px: 1, py: 2, fontSize: 14 }}
                />
              </Stack>

              <Typography variant="h5" component="span" sx={{ fontSize: 'clamp(1.25rem,.804rem + 1.116vw,1.875rem)', lineHeight: 'clamp(1.75rem,1.39rem + .89vw,2.25rem)' }}>
                <span style={{ color: 'rgb(152, 162, 179)' }}>$</span>{' '}
                <span style={{ color: '#1D2939', fontWeight: 600 }}>{flight.CostFloat}</span>
              </Typography>
            </Stack>

            <Stack gap={1.5}>
              <Typography sx={{ fontWeight: 600, color: '#98A2B3' }}>
                Retail:
              </Typography>

              <Typography 
                variant="body1" 
                component="span" 
                sx={{ color: '#98A2B3', fontSize: 'clamp(1.25rem,.804rem + 1.116vw,1.875rem)', lineHeight: 'clamp(1.75rem,1.39rem + .89vw,2.25rem)' }}
              >
                <span>$</span>{' '}
                <span style={{ fontWeight: 600, textDecoration: 'line-through' }}>{flight.CostBelowAverage + flight.CostFloat}</span>
              </Typography>
            </Stack>
          </Box>
        </CardContent>
        
        <Box sx={{ p: 2, pt: 0, textAlign: 'center' }}>
          <Divider sx={{ my: 2 }} />
          
          <Button variant="contained" color="secondary" fullWidth sx={{ borderRadius: 2, textTransform: 'none', fontWeight: 600, color: '#FFF' }} size="large" disabled={flightsLoading}>
            See Details
          </Button>
          
          <Divider sx={{ my: 2 }} />
          
          <Typography sx={{ mt: 2, fontSize: '1.125rem', lineHeight: '1.75rem', color: flight.SeatsAvailable <= 1 ? 'error.main' : 'rgb(71, 84, 103)' }}>
            {flight.SeatsAvailable} {flight.SeatsAvailable === 1 ? 'seat' : 'seats'} left
          </Typography>
        </Box>
      </Card>
    </Grid>
  );
};
