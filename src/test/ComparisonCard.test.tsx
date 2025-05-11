import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ComparisonCard } from '../components/ComparisonCard';
import { FlightDeal } from '../flight-deals-dataset';
import moment from 'moment';
import { FlightCardHeaderProps } from '../components/FlightCardHeader';
import { FlightLocationProps } from '../components/FlightLocation';

// Mock the child components
jest.mock('../components/FlightCardHeader', () => ({
  FlightCardHeader: ({ flight, type, enableButton, handleButtonClick }: FlightCardHeaderProps) => (
    <div data-testid="flight-card-header">
      Mock Header
      {enableButton && (
        <button 
          data-testid="remove-button" 
          onClick={() => handleButtonClick(flight.PurchasingId)}
        >
          Remove
        </button>
      )}
    </div>
  ),
}));

jest.mock('../components/FlightLocation', () => ({
  FlightLocation: ({ airport, city, isStart }: FlightLocationProps) => (
    <div data-testid={`flight-location-${isStart ? 'origin' : 'destination'}`}>
      {airport} {city}
    </div>
  ),
}));

// Mock Material UI icons
jest.mock('@mui/icons-material', () => ({
  ArrowRightAlt: () => <span data-testid="arrow-icon">→</span>,
}));

describe('ComparisonCard', () => {
  const mockHandleRemove = jest.fn();
  
  const mockFlight: FlightDeal = {
    TravelClass: "Business",
    Origin: "SFO",
    OriginAirportName: "San Francisco International Airport",
    OriginCityName: "San Francisco",
    OriginCountry: "United States",
    OriginTimeZone: "America/Los_Angeles",
    Destination: "LHR",
    DestinationAirportName: "London Heathrow Airport",
    DestinationCityName: "London",
    DestinationCountry: "United Kingdom",
    DestinationTimeZone: "Europe/London",
    IsDirect: false,
    DepartureTime: "2025-05-20T15:45:00",
    ArrivalTime: "2025-05-21T14:30:00",
    TotalTravelTimeMinutes: "645",
    FlightNumbers: ["UA876", "BA18"],
    BaggageAmount: "2",
    BaggageType: "Checked",
    Cost: "$3,499.99",
    CostFloat: 3499.99,
    PurchasingId: "UASFO-LHR-052025-B",
    connections: ["JFK"],
    Legs: [
      {
        DepartureAirport: "SFO",
        ArrivalAirport: "JFK",
        DepartureTime: "2025-05-20T15:45:00",
        ArrivalTime: "2025-05-21T00:15:00",
        FlightNumber: "UA876",
        AirlineName: "United Airlines",
        AircraftType: "Boeing 787-9"
      },
      {
        DepartureAirport: "JFK",
        ArrivalAirport: "LHR",
        DepartureTime: "2025-05-21T07:30:00",
        ArrivalTime: "2025-05-21T14:30:00",
        FlightNumber: "BA18",
        AirlineName: "British Airways",
        AircraftType: "Airbus A380-800"
      }
    ],
    CostBelowAverage: 520.00,
    PercentBelowAverage: 12.94,
    SeatsAvailable: 8
  };

  const defaultProps = {
    flight: mockFlight,
    enableRemove: true,
    flightsLoading: false,
    handleRemove: mockHandleRemove,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders the component with all key flight information', () => {
    render(<ComparisonCard {...defaultProps} />);
    
    // Check flight locations are rendered
    expect(screen.getByTestId('flight-location-origin')).toBeInTheDocument();
    expect(screen.getByTestId('flight-location-destination')).toBeInTheDocument();
    
    // Check connection information
    expect(screen.getByText('1 Stop')).toBeInTheDocument();
    
    // Check flight numbers
    expect(screen.getByText(/UA876 - BA18/)).toBeInTheDocument();
    
    // Check departure and arrival information (use regex to match part of the date format)
    const formattedDeparture = moment(mockFlight.DepartureTime).format('ddd, MMM D, YYYY [at] h:mm A');
    const formattedArrival = moment(mockFlight.ArrivalTime).format('ddd, MMM D, YYYY [at] h:mm A');
    
    expect(screen.getByText(new RegExp(formattedDeparture))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(formattedArrival))).toBeInTheDocument();
    
    // Check price information
    expect(screen.getByText('3499.99')).toBeInTheDocument();
    expect(screen.getByText('4019.99')).toBeInTheDocument(); // CostFloat + CostBelowAverage
    
    // Check discount information
    expect(screen.getByText('12.94% OFF')).toBeInTheDocument();
    
    // Check seats available
    expect(screen.getByText('8 seats left')).toBeInTheDocument();
    
    // Check See Details button exists
    expect(screen.getByText('See Details')).toBeInTheDocument();
  });

  test('renders the FlightCardHeader with correct props', () => {
    render(<ComparisonCard {...defaultProps} />);
    expect(screen.getByTestId('flight-card-header')).toBeInTheDocument();
  });

  test('shows correct text for single seat left', () => {
    const singleSeatFlight = {
      ...mockFlight,
      SeatsAvailable: 1,
    };
    
    render(<ComparisonCard {...defaultProps} flight={singleSeatFlight} />);
    expect(screen.getByText('1 seat left')).toBeInTheDocument();
  });

  test('correctly formats travel duration', () => {
    render(<ComparisonCard {...defaultProps} />);
    expect(screen.getByText('(10h 45m)')).toBeInTheDocument();
  });

  test('shows travel duration with only minutes when less than an hour', () => {
    const shortFlight = {
      ...mockFlight,
      TotalTravelTimeMinutes: '45', // 45 minutes
    };
    
    render(<ComparisonCard {...defaultProps} flight={shortFlight} />);
    expect(screen.getByText('(0h 45m)')).toBeInTheDocument();
  });

  test('disables See Details button when flightsLoading is true', () => {
    render(<ComparisonCard {...defaultProps} flightsLoading={true} />);
    const button = screen.getByText('See Details');
    expect(button).toBeDisabled();
  });

  test('calls handleRemove when remove button is clicked', () => {
    render(<ComparisonCard {...defaultProps} />);
    
    const removeButton = screen.getByTestId('remove-button');
    fireEvent.click(removeButton);
    
    expect(mockHandleRemove).toHaveBeenCalledWith('UASFO-LHR-052025-B');
  });

  test('does not show remove button when enableRemove is false', () => {
    render(<ComparisonCard {...defaultProps} enableRemove={false} />);
    expect(screen.queryByTestId('remove-button')).not.toBeInTheDocument();
  });

  test('does not show remove button when flightsLoading is true', () => {
    render(<ComparisonCard {...defaultProps} flightsLoading={true} />);
    expect(screen.queryByTestId('remove-button')).not.toBeInTheDocument();
  });
});