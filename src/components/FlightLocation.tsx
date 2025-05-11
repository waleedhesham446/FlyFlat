import { 
  Typography, 
} from "@mui/material";
import Grid from "@mui/material/GridLegacy";

export interface FlightLocationProps {
  airport: string;
  city: string;
  isStart: boolean;
}

export const FlightLocation = ({ airport, city, isStart }: FlightLocationProps) => {
  return (
    <Grid item xs={5} sx={{ display: "flex", flexDirection: "column", alignItems: isStart ? "flex-start" : "flex-end" }}>
      <Typography sx={{ fontWeight: 700, fontSize: '1.125rem', lineHeight: '1.75rem' }}>
        {city}
      </Typography>
      <Typography sx={{ fontWeight: 700, fontSize: '1.875rem', lineHeight: '2.25rem' }}>
        {airport}
      </Typography>
    </Grid>
  );
};
