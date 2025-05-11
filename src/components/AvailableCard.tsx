import { 
  Box, 
  Card, 
  CardContent, 
  Typography, 
  Chip, 
  Divider,
} from "@mui/material";
import { 
  ArrowRightAlt,
} from '@mui/icons-material';
import Grid from "@mui/material/GridLegacy";
import { FlightDeal } from "../flight-deals-dataset";
import { FlightLocation } from "./FlightLocation";
import { FlightCardHeader } from "./FlightCardHeader";

interface AvaiableCardProps {
  flight: FlightDeal;
  enableAdd: boolean;
  handleAdd: (id: string) => void;
}

export const AvaiableCard = ({ flight, enableAdd, handleAdd }: AvaiableCardProps) => {
  return (
    <Grid item xs={12} md={4} key={flight.PurchasingId}>
      <Card sx={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 3 }}>
        <FlightCardHeader flight={flight} type="available" enableButton={enableAdd} handleButtonClick={handleAdd} />
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
          
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6" component="span" sx={{ fontWeight: 'bold' }}>
              ${flight.CostFloat}
            </Typography>
            <Chip 
              label={`${flight.SeatsAvailable} ${flight.SeatsAvailable === 1 ? 'seat' : 'seats'} left`} 
              size="small" 
              color={flight.SeatsAvailable <= 1 ? "error" : "default"}
            />
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};
