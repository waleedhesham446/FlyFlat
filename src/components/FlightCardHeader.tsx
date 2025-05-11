import { 
  Box, 
  Typography, 
  IconButton, 
  AvatarGroup,
  Avatar,
} from "@mui/material";
import { 
  Close, 
  Add,
} from '@mui/icons-material';
import { FlightDeal, airlineLogos } from "../flight-deals-dataset";
import moment from "moment";
import { getGMTOffset } from "../utils/timezone";

export interface FlightCardHeaderProps {
  flight: FlightDeal;
  type: 'available' | 'comparison';
  enableButton: boolean;
  handleButtonClick: (id: string) => void;
}

const buttons = {
  available: {
    icon: <Add fontSize="medium" />,
    bgColor: 'rgba(0, 255, 0, 0.2)',
    hoverColor: 'rgba(0, 255, 0, 0.3)',
  },
  comparison: {
    icon: <Close fontSize="medium" />,
    bgColor: 'rgba(255, 0, 0, 0.2)',
    hoverColor: 'rgba(255, 0, 0, 0.3)',
  },
};

export const FlightCardHeader = ({ flight, type, enableButton, handleButtonClick }: FlightCardHeaderProps) => {
  return (
    <>
      <IconButton
        size="medium"
        color={type === 'available' ? 'success' : 'error'}
        sx={{ position: 'absolute', right: 12, top: 12, '&:hover': { backgroundColor: buttons[type].hoverColor }, backgroundColor: buttons[type].bgColor }}
        disabled={!enableButton}
        onClick={() => handleButtonClick(flight.PurchasingId)}
      >
        {buttons[type].icon}
      </IconButton>
      <Box sx={{ backgroundColor: "rgb(8, 20, 55)", color: "white", p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box display="flex" alignItems="center">
          <AvatarGroup max={3} sx={{ mr: 1 }}>
            {flight.Legs.map((leg, index) => (
              <Avatar key={index} alt={airlineLogos[leg.AirlineName]?.id ?? leg.AirlineName} src={airlineLogos[leg.AirlineName]?.logo ?? leg.AirlineName} title={leg.AirlineName} />
            ))}
          </AvatarGroup>
          <Box>
            <Typography sx={{ fontWeight: 600, fontSize: '1.125rem', lineHeight: '1.75rem', color: "rgb(208, 213, 221)" }}>
              {flight.TravelClass} • {Number(flight.BaggageAmount) || ''} {flight.BaggageType} {Number(flight.BaggageAmount) ? 'baggage' : ''}
            </Typography>
            <Typography sx={{ fontWeight: 700, fontSize: '1.125rem', lineHeight: '1.75rem', color: "rgb(255, 255, 255)" }}>
              {moment(flight.DepartureTime).format('h:mm A')} ({getGMTOffset(flight.OriginTimeZone)}) • {moment(flight.DepartureTime).format('DD MMM')}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
