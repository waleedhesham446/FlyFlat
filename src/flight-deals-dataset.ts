// Type definition for FlightLeg
export type FlightLeg = {
  DepartureAirport: string;
  ArrivalAirport: string;
  DepartureTime: string;
  ArrivalTime: string;
  FlightNumber: string;
  AirlineName: string;
  AircraftType: string;
};

// Type definition for FlightDeal
export type FlightDeal = {
  TravelClass: string;
  Origin: string;
  OriginAirportName: string;
  OriginCityName: string;
  OriginCountry: string;
  OriginTimeZone: string;
  Destination: string;
  DestinationAirportName: string;
  DestinationCityName: string;
  DestinationCountry: string;
  DestinationTimeZone: string;
  IsDirect: boolean;
  DepartureTime: string;
  ArrivalTime: string;
  TotalTravelTimeMinutes: string;
  FlightNumbers: string[];
  BaggageAmount: string;
  BaggageType: string;
  Cost: string;
  CostFloat: number;
  PurchasingId: string;
  connections: string[];
  Legs: FlightLeg[];
  CostBelowAverage: number;
  PercentBelowAverage: number;
  SeatsAvailable: number;
};

export const flightDeals: FlightDeal[] = [
  // LAX to JFK - Route 1 (3 options)
  {
    TravelClass: "Economy",
    Origin: "LAX",
    OriginAirportName: "Los Angeles International Airport",
    OriginCityName: "Los Angeles",
    OriginCountry: "United States",
    OriginTimeZone: "America/Los_Angeles",
    Destination: "JFK",
    DestinationAirportName: "John F. Kennedy International Airport",
    DestinationCityName: "New York",
    DestinationCountry: "United States",
    DestinationTimeZone: "America/New_York",
    IsDirect: true,
    DepartureTime: "2025-05-15T08:30:00",
    ArrivalTime: "2025-05-15T17:00:00",
    TotalTravelTimeMinutes: "45",
    FlightNumbers: ["AA123"],
    BaggageAmount: "1",
    BaggageType: "Checked",
    Cost: "$299.99",
    CostFloat: 299.99,
    PurchasingId: "AALAX-JFK-052425-E",
    connections: [],
    Legs: [
      {
        DepartureAirport: "LAX",
        ArrivalAirport: "JFK",
        DepartureTime: "2025-05-15T08:30:00",
        ArrivalTime: "2025-05-15T17:00:00",
        FlightNumber: "AA123",
        AirlineName: "American Airlines",
        AircraftType: "Boeing 777-300ER"
      }
    ],
    CostBelowAverage: 78.50,
    PercentBelowAverage: 20.75,
    SeatsAvailable: 23
  },
  {
    TravelClass: "Economy",
    Origin: "LAX",
    OriginAirportName: "Los Angeles International Airport",
    OriginCityName: "Los Angeles",
    OriginCountry: "United States",
    OriginTimeZone: "America/Los_Angeles",
    Destination: "JFK",
    DestinationAirportName: "John F. Kennedy International Airport",
    DestinationCityName: "New York",
    DestinationCountry: "United States",
    DestinationTimeZone: "America/New_York",
    IsDirect: true,
    DepartureTime: "2025-05-15T11:15:00",
    ArrivalTime: "2025-05-15T19:40:00",
    TotalTravelTimeMinutes: "325",
    FlightNumbers: ["DL546"],
    BaggageAmount: "1",
    BaggageType: "Checked",
    Cost: "$321.50",
    CostFloat: 321.50,
    PurchasingId: "DLLAX-JFK-052425-E",
    connections: [],
    Legs: [
      {
        DepartureAirport: "LAX",
        ArrivalAirport: "JFK",
        DepartureTime: "2025-05-15T11:15:00",
        ArrivalTime: "2025-05-15T19:40:00",
        FlightNumber: "DL546",
        AirlineName: "Delta Air Lines",
        AircraftType: "Boeing 767-300"
      }
    ],
    CostBelowAverage: 56.99,
    PercentBelowAverage: 15.05,
    SeatsAvailable: 16
  },
  {
    TravelClass: "Economy",
    Origin: "LAX",
    OriginAirportName: "Los Angeles International Airport",
    OriginCityName: "Los Angeles",
    OriginCountry: "United States",
    OriginTimeZone: "America/Los_Angeles",
    Destination: "JFK",
    DestinationAirportName: "John F. Kennedy International Airport",
    DestinationCityName: "New York",
    DestinationCountry: "United States",
    DestinationTimeZone: "America/New_York",
    IsDirect: true,
    DepartureTime: "2025-05-15T06:00:00",
    ArrivalTime: "2025-05-15T14:20:00",
    TotalTravelTimeMinutes: "320",
    FlightNumbers: ["B6642"],
    BaggageAmount: "0",
    BaggageType: "No free checked baggage",
    Cost: "$279.00",
    CostFloat: 279.00,
    PurchasingId: "B6LAX-JFK-052425-E",
    connections: [],
    Legs: [
      {
        DepartureAirport: "LAX",
        ArrivalAirport: "JFK",
        DepartureTime: "2025-05-15T06:00:00",
        ArrivalTime: "2025-05-15T14:20:00",
        FlightNumber: "B6642",
        AirlineName: "JetBlue",
        AircraftType: "Airbus A321"
      }
    ],
    CostBelowAverage: 99.49,
    PercentBelowAverage: 26.28,
    SeatsAvailable: 8
  },

  // SFO to LHR - Route 2 (3 options)
  {
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
  },
  {
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
    IsDirect: true,
    DepartureTime: "2025-05-20T19:30:00",
    ArrivalTime: "2025-05-21T13:45:00",
    TotalTravelTimeMinutes: "615",
    FlightNumbers: ["BA286"],
    BaggageAmount: "2",
    BaggageType: "Checked",
    Cost: "$3,850.00",
    CostFloat: 3850.00,
    PurchasingId: "BASFO-LHR-052025-B",
    connections: [],
    Legs: [
      {
        DepartureAirport: "SFO",
        ArrivalAirport: "LHR",
        DepartureTime: "2025-05-20T19:30:00",
        ArrivalTime: "2025-05-21T13:45:00",
        FlightNumber: "BA286",
        AirlineName: "British Airways",
        AircraftType: "Boeing 777-300ER"
      }
    ],
    CostBelowAverage: 169.99,
    PercentBelowAverage: 4.23,
    SeatsAvailable: 3
  },
  {
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
    DepartureTime: "2025-05-20T13:15:00",
    ArrivalTime: "2025-05-21T11:50:00",
    TotalTravelTimeMinutes: "635",
    FlightNumbers: ["DL588", "VS4"],
    BaggageAmount: "2",
    BaggageType: "Checked",
    Cost: "$3,299.50",
    CostFloat: 3299.50,
    PurchasingId: "DLSFO-LHR-052025-B",
    connections: ["JFK"],
    Legs: [
      {
        DepartureAirport: "SFO",
        ArrivalAirport: "JFK",
        DepartureTime: "2025-05-20T13:15:00",
        ArrivalTime: "2025-05-20T21:50:00",
        FlightNumber: "DL588",
        AirlineName: "Delta Air Lines",
        AircraftType: "Boeing 767-400ER"
      },
      {
        DepartureAirport: "JFK",
        ArrivalAirport: "LHR",
        DepartureTime: "2025-05-21T00:30:00",
        ArrivalTime: "2025-05-21T11:50:00",
        FlightNumber: "VS4",
        AirlineName: "Virgin Atlantic Airways",
        AircraftType: "Airbus A350-1000"
      }
    ],
    CostBelowAverage: 720.49,
    PercentBelowAverage: 17.92,
    SeatsAvailable: 5
  },

  // DXB to SYD - Route 3 (3 options)
  {
    TravelClass: "First",
    Origin: "DXB",
    OriginAirportName: "Dubai International Airport",
    OriginCityName: "Dubai",
    OriginCountry: "United Arab Emirates",
    OriginTimeZone: "Asia/Dubai",
    Destination: "SYD",
    DestinationAirportName: "Sydney Airport",
    DestinationCityName: "Sydney",
    DestinationCountry: "Australia",
    DestinationTimeZone: "Australia/Sydney",
    IsDirect: true,
    DepartureTime: "2025-06-10T22:30:00",
    ArrivalTime: "2025-06-11T18:40:00",
    TotalTravelTimeMinutes: "790",
    FlightNumbers: ["EK412"],
    BaggageAmount: "3",
    BaggageType: "Checked",
    Cost: "$6,850.00",
    CostFloat: 6850.00,
    PurchasingId: "EKDXB-SYD-061025-F",
    connections: [],
    Legs: [
      {
        DepartureAirport: "DXB",
        ArrivalAirport: "SYD",
        DepartureTime: "2025-06-10T22:30:00",
        ArrivalTime: "2025-06-11T18:40:00",
        FlightNumber: "EK412",
        AirlineName: "Emirates",
        AircraftType: "Airbus A380-800"
      }
    ],
    CostBelowAverage: 1250.00,
    PercentBelowAverage: 15.43,
    SeatsAvailable: 3
  },
  {
    TravelClass: "First",
    Origin: "DXB",
    OriginAirportName: "Dubai International Airport",
    OriginCityName: "Dubai",
    OriginCountry: "United Arab Emirates",
    OriginTimeZone: "Asia/Dubai",
    Destination: "SYD",
    DestinationAirportName: "Sydney Airport",
    DestinationCityName: "Sydney",
    DestinationCountry: "Australia",
    DestinationTimeZone: "Australia/Sydney",
    IsDirect: false,
    DepartureTime: "2025-06-10T21:45:00",
    ArrivalTime: "2025-06-11T20:15:00",
    TotalTravelTimeMinutes: "870",
    FlightNumbers: ["EK404", "QF2"],
    BaggageAmount: "3",
    BaggageType: "Checked",
    Cost: "$7,199.00",
    CostFloat: 7199.00,
    PurchasingId: "EKDXB-SYD-061025-F2",
    connections: ["SIN"],
    Legs: [
      {
        DepartureAirport: "DXB",
        ArrivalAirport: "SIN",
        DepartureTime: "2025-06-10T21:45:00",
        ArrivalTime: "2025-06-11T09:15:00",
        FlightNumber: "EK404",
        AirlineName: "Emirates",
        AircraftType: "Boeing 777-300ER"
      },
      {
        DepartureAirport: "SIN",
        ArrivalAirport: "SYD",
        DepartureTime: "2025-06-11T12:45:00",
        ArrivalTime: "2025-06-11T20:15:00",
        FlightNumber: "QF2",
        AirlineName: "Qantas",
        AircraftType: "Airbus A380-800"
      }
    ],
    CostBelowAverage: 901.00,
    PercentBelowAverage: 11.12,
    SeatsAvailable: 2
  },
  {
    TravelClass: "First",
    Origin: "DXB",
    OriginAirportName: "Dubai International Airport",
    OriginCityName: "Dubai",
    OriginCountry: "United Arab Emirates",
    OriginTimeZone: "Asia/Dubai",
    Destination: "SYD",
    DestinationAirportName: "Sydney Airport",
    DestinationCityName: "Sydney",
    DestinationCountry: "Australia",
    DestinationTimeZone: "Australia/Sydney",
    IsDirect: true,
    DepartureTime: "2025-06-10T10:15:00",
    ArrivalTime: "2025-06-11T06:30:00",
    TotalTravelTimeMinutes: "795",
    FlightNumbers: ["EK414"],
    BaggageAmount: "3",
    BaggageType: "Checked",
    Cost: "$6,975.50",
    CostFloat: 6975.50,
    PurchasingId: "EKDXB-SYD-061025-F3",
    connections: [],
    Legs: [
      {
        DepartureAirport: "DXB",
        ArrivalAirport: "SYD",
        DepartureTime: "2025-06-10T10:15:00",
        ArrivalTime: "2025-06-11T06:30:00",
        FlightNumber: "EK414",
        AirlineName: "Emirates",
        AircraftType: "Airbus A380-800"
      }
    ],
    CostBelowAverage: 1124.50,
    PercentBelowAverage: 13.88,
    SeatsAvailable: 1
  },

  // NRT to ICN - Route 4 (2 options)
  {
    TravelClass: "Economy",
    Origin: "NRT",
    OriginAirportName: "Narita International Airport",
    OriginCityName: "Tokyo",
    OriginCountry: "Japan",
    OriginTimeZone: "Asia/Tokyo",
    Destination: "ICN",
    DestinationAirportName: "Incheon International Airport",
    DestinationCityName: "Seoul",
    DestinationCountry: "South Korea",
    DestinationTimeZone: "Asia/Seoul",
    IsDirect: true,
    DepartureTime: "2025-05-28T10:15:00",
    ArrivalTime: "2025-05-28T13:05:00",
    TotalTravelTimeMinutes: "170",
    FlightNumbers: ["OZ101"],
    BaggageAmount: "1",
    BaggageType: "Checked",
    Cost: "$185.50",
    CostFloat: 185.50,
    PurchasingId: "OZNRT-ICN-052825-E",
    connections: [],
    Legs: [
      {
        DepartureAirport: "NRT",
        ArrivalAirport: "ICN",
        DepartureTime: "2025-05-28T10:15:00",
        ArrivalTime: "2025-05-28T13:05:00",
        FlightNumber: "OZ101",
        AirlineName: "Asiana Airlines",
        AircraftType: "Airbus A321neo"
      }
    ],
    CostBelowAverage: 42.50,
    PercentBelowAverage: 18.65,
    SeatsAvailable: 45
  },
  {
    TravelClass: "Economy",
    Origin: "NRT",
    OriginAirportName: "Narita International Airport",
    OriginCityName: "Tokyo",
    OriginCountry: "Japan",
    OriginTimeZone: "Asia/Tokyo",
    Destination: "ICN",
    DestinationAirportName: "Incheon International Airport",
    DestinationCityName: "Seoul",
    DestinationCountry: "South Korea",
    DestinationTimeZone: "Asia/Seoul",
    IsDirect: true,
    DepartureTime: "2025-05-28T15:45:00",
    ArrivalTime: "2025-05-28T18:30:00",
    TotalTravelTimeMinutes: "165",
    FlightNumbers: ["KE706"],
    BaggageAmount: "1",
    BaggageType: "Checked",
    Cost: "$198.75",
    CostFloat: 198.75,
    PurchasingId: "KENRT-ICN-052825-E",
    connections: [],
    Legs: [
      {
        DepartureAirport: "NRT",
        ArrivalAirport: "ICN",
        DepartureTime: "2025-05-28T15:45:00",
        ArrivalTime: "2025-05-28T18:30:00",
        FlightNumber: "KE706",
        AirlineName: "Korean Air",
        AircraftType: "Boeing 777-300"
      }
    ],
    CostBelowAverage: 29.25,
    PercentBelowAverage: 12.83,
    SeatsAvailable: 22
  },
  {
    TravelClass: "Economy",
    Origin: "NRT",
    OriginAirportName: "Narita International Airport",
    OriginCityName: "Tokyo",
    OriginCountry: "Japan",
    OriginTimeZone: "Asia/Tokyo",
    Destination: "ICN",
    DestinationAirportName: "Incheon International Airport",
    DestinationCityName: "Seoul",
    DestinationCountry: "South Korea",
    DestinationTimeZone: "Asia/Seoul",
    IsDirect: true,
    DepartureTime: "2025-05-28T08:30:00",
    ArrivalTime: "2025-05-28T11:20:00",
    TotalTravelTimeMinutes: "170",
    FlightNumbers: ["JL91"],
    BaggageAmount: "1",
    BaggageType: "Checked",
    Cost: "$210.25",
    CostFloat: 210.25,
    PurchasingId: "JLNRT-ICN-052825-E",
    connections: [],
    Legs: [
      {
        DepartureAirport: "NRT",
        ArrivalAirport: "ICN",
        DepartureTime: "2025-05-28T08:30:00",
        ArrivalTime: "2025-05-28T11:20:00",
        FlightNumber: "JL91",
        AirlineName: "Japan Airlines",
        AircraftType: "Boeing 787-8"
      }
    ],
    CostBelowAverage: 17.75,
    PercentBelowAverage: 7.79,
    SeatsAvailable: 10
  },

  // CDG to YYZ - Route 5 (3 options)
  {
    TravelClass: "Premium Economy",
    Origin: "CDG",
    OriginAirportName: "Charles de Gaulle Airport",
    OriginCityName: "Paris",
    OriginCountry: "France",
    OriginTimeZone: "Europe/Paris",
    Destination: "YYZ",
    DestinationAirportName: "Toronto Pearson International Airport",
    DestinationCityName: "Toronto",
    DestinationCountry: "Canada",
    DestinationTimeZone: "America/Toronto",
    IsDirect: false,
    DepartureTime: "2025-07-05T14:20:00",
    ArrivalTime: "2025-07-05T23:45:00",
    TotalTravelTimeMinutes: "565",
    FlightNumbers: ["AF356", "AC901"],
    BaggageAmount: "2",
    BaggageType: "Checked",
    Cost: "$849.75",
    CostFloat: 849.75,
    PurchasingId: "AFCDG-YYZ-070525-PE",
    connections: ["LHR"],
    Legs: [
      {
        DepartureAirport: "CDG",
        ArrivalAirport: "LHR",
        DepartureTime: "2025-07-05T14:20:00",
        ArrivalTime: "2025-07-05T15:30:00",
        FlightNumber: "AF356",
        AirlineName: "Air France",
        AircraftType: "Airbus A320"
      },
      {
        DepartureAirport: "LHR",
        ArrivalAirport: "YYZ",
        DepartureTime: "2025-07-05T17:15:00",
        ArrivalTime: "2025-07-05T23:45:00",
        FlightNumber: "AC901",
        AirlineName: "Air Canada",
        AircraftType: "Boeing 787-9"
      }
    ],
    CostBelowAverage: 135.25,
    PercentBelowAverage: 13.73,
    SeatsAvailable: 16
  },
  {
    TravelClass: "Premium Economy",
    Origin: "CDG",
    OriginAirportName: "Charles de Gaulle Airport",
    OriginCityName: "Paris",
    OriginCountry: "France",
    OriginTimeZone: "Europe/Paris",
    Destination: "YYZ",
    DestinationAirportName: "Toronto Pearson International Airport",
    DestinationCityName: "Toronto",
    DestinationCountry: "Canada",
    DestinationTimeZone: "America/Toronto",
    IsDirect: true,
    DepartureTime: "2025-07-05T13:35:00",
    ArrivalTime: "2025-07-05T16:20:00",
    TotalTravelTimeMinutes: "525",
    FlightNumbers: ["AC881"],
    BaggageAmount: "2",
    BaggageType: "Checked",
    Cost: "$915.00",
    CostFloat: 915.00,
    PurchasingId: "ACCDG-YYZ-070525-PE",
    connections: [],
    Legs: [
      {
        DepartureAirport: "CDG",
        ArrivalAirport: "YYZ",
        DepartureTime: "2025-07-05T13:35:00",
        ArrivalTime: "2025-07-05T16:20:00",
        FlightNumber: "AC881",
        AirlineName: "Air Canada",
        AircraftType: "Boeing 787-9"
      }
    ],
    CostBelowAverage: 70.00,
    PercentBelowAverage: 7.10,
    SeatsAvailable: 9
  },
  {
    TravelClass: "Premium Economy",
    Origin: "CDG",
    OriginAirportName: "Charles de Gaulle Airport",
    OriginCityName: "Paris",
    OriginCountry: "France",
    OriginTimeZone: "Europe/Paris",
    Destination: "YYZ",
    DestinationAirportName: "Toronto Pearson International Airport",
    DestinationCityName: "Toronto",
    DestinationCountry: "Canada",
    DestinationTimeZone: "America/Toronto",
    IsDirect: false,
    DepartureTime: "2025-07-05T09:15:00",
    ArrivalTime: "2025-07-05T19:40:00",
    TotalTravelTimeMinutes: "625",
    FlightNumbers: ["LH1029", "LH470"],
    BaggageAmount: "2",
    BaggageType: "Checked",
    Cost: "$795.50",
    CostFloat: 795.50,
    PurchasingId: "LHCDG-YYZ-070525-PE",
    connections: ["FRA"],
    Legs: [
      {
        DepartureAirport: "CDG",
        ArrivalAirport: "FRA",
        DepartureTime: "2025-07-05T09:15:00",
        ArrivalTime: "2025-07-05T10:40:00",
        FlightNumber: "LH1029",
        AirlineName: "Lufthansa",
        AircraftType: "Airbus A320neo"
      },
      {
        DepartureAirport: "FRA",
        ArrivalAirport: "YYZ",
        DepartureTime: "2025-07-05T13:25:00",
        ArrivalTime: "2025-07-05T19:40:00",
        FlightNumber: "LH470",
        AirlineName: "Lufthansa",
        AircraftType: "Boeing 747-8"
      }
    ],
    CostBelowAverage: 189.50,
    PercentBelowAverage: 19.24,
    SeatsAvailable: 5
  },

  // SIN to DEL - Route 6 (3 options)
  {
    TravelClass: "Business",
    Origin: "SIN",
    OriginAirportName: "Singapore Changi Airport",
    OriginCityName: "Singapore",
    OriginCountry: "Singapore",
    OriginTimeZone: "Asia/Singapore",
    Destination: "DEL",
    DestinationAirportName: "Indira Gandhi International Airport",
    DestinationCityName: "Delhi",
    DestinationCountry: "India",
    DestinationTimeZone: "Asia/Kolkata",
    IsDirect: true,
    DepartureTime: "2025-06-15T01:30:00",
    ArrivalTime: "2025-06-15T04:45:00",
    TotalTravelTimeMinutes: "315",
    FlightNumbers: ["SQ402"],
    BaggageAmount: "2",
    BaggageType: "Checked",
    Cost: "$1,575.25",
    CostFloat: 1575.25,
    PurchasingId: "SQSIN-DEL-061525-B",
    connections: [],
    Legs: [
      {
        DepartureAirport: "SIN",
        ArrivalAirport: "DEL",
        DepartureTime: "2025-06-15T01:30:00",
        ArrivalTime: "2025-06-15T04:45:00",
        FlightNumber: "SQ402",
        AirlineName: "Singapore Airlines",
        AircraftType: "Boeing 787-10"
      }
    ],
    CostBelowAverage: 399.75,
    PercentBelowAverage: 20.25,
    SeatsAvailable: 12
  },
  {
    TravelClass: "Business",
    Origin: "SIN",
    OriginAirportName: "Singapore Changi Airport",
    OriginCityName: "Singapore",
    OriginCountry: "Singapore",
    OriginTimeZone: "Asia/Singapore",
    Destination: "DEL",
    DestinationAirportName: "Indira Gandhi International Airport",
    DestinationCityName: "Delhi",
    DestinationCountry: "India",
    DestinationTimeZone: "Asia/Kolkata",
    IsDirect: true,
    DepartureTime: "2025-06-15T16:45:00",
    ArrivalTime: "2025-06-15T19:55:00",
    TotalTravelTimeMinutes: "310",
    FlightNumbers: ["AI381"],
    BaggageAmount: "2",
    BaggageType: "Checked",
    Cost: "$1,699.00",
    CostFloat: 1699.00,
    PurchasingId: "AISIN-DEL-061525-B",
    connections: [],
    Legs: [
      {
        DepartureAirport: "SIN",
        ArrivalAirport: "DEL",
        DepartureTime: "2025-06-15T16:45:00",
        ArrivalTime: "2025-06-15T19:55:00",
        FlightNumber: "AI381",
        AirlineName: "Air India",
        AircraftType: "Boeing 787-8"
      }
    ],
    CostBelowAverage: 276.00,
    PercentBelowAverage: 13.98,
    SeatsAvailable: 6
  },
  {
    TravelClass: "Business",
    Origin: "SIN",
    OriginAirportName: "Singapore Changi Airport",
    OriginCityName: "Singapore",
    OriginCountry: "Singapore",
    OriginTimeZone: "Asia/Singapore",
    Destination: "DEL",
    DestinationAirportName: "Indira Gandhi International Airport",
    DestinationCityName: "Delhi",
    DestinationCountry: "India",
    DestinationTimeZone: "Asia/Kolkata",
    IsDirect: false,
    DepartureTime: "2025-06-15T12:20:00",
    ArrivalTime: "2025-06-15T19:15:00",
    TotalTravelTimeMinutes: "415",
    FlightNumbers: ["TG404", "TG323"],
    BaggageAmount: "2",
    BaggageType: "Checked",
    Cost: "$1,450.50",
    CostFloat: 1450.50,
    PurchasingId: "TGSIN-DEL-061525-B",
    connections: ["BKK"],
    Legs: [
      {
        DepartureAirport: "SIN",
        ArrivalAirport: "BKK",
        DepartureTime: "2025-06-15T12:20:00",
        ArrivalTime: "2025-06-15T13:50:00",
        FlightNumber: "TG404",
        AirlineName: "Thai Airways",
        AircraftType: "Airbus A350-900"
      },
      {
        DepartureAirport: "BKK",
        ArrivalAirport: "DEL",
        DepartureTime: "2025-06-15T16:05:00",
        ArrivalTime: "2025-06-15T19:15:00",
        FlightNumber: "TG323",
        AirlineName: "Thai Airways",
        AircraftType: "Boeing 777-200ER"
      }
    ],
    CostBelowAverage: 524.50,
    PercentBelowAverage: 26.55,
    SeatsAvailable: 2
  },

  // MEX to GRU - Route 7 (3 options)
  {
    TravelClass: "Economy",
    Origin: "MEX",
    OriginAirportName: "Mexico City International Airport",
    OriginCityName: "Mexico City",
    OriginCountry: "Mexico",
    OriginTimeZone: "America/Mexico_City",
    Destination: "GRU",
    DestinationAirportName: "São Paulo–Guarulhos International Airport",
    DestinationCityName: "São Paulo",
    DestinationCountry: "Brazil",
    DestinationTimeZone: "America/Sao_Paulo",
    IsDirect: false,
    DepartureTime: "2025-08-12T07:50:00",
    ArrivalTime: "2025-08-12T22:30:00",
    TotalTravelTimeMinutes: "640",
    FlightNumbers: ["AM456", "LA8078"],
    BaggageAmount: "1",
    BaggageType: "Checked",
    Cost: "$525.50",
    CostFloat: 525.50,
    PurchasingId: "AMMEX-GRU-081225-E",
    connections: ["BOG"],
    Legs: [
      {
        DepartureAirport: "MEX",
        ArrivalAirport: "BOG",
        DepartureTime: "2025-08-12T07:50:00",
        ArrivalTime: "2025-08-12T13:25:00",
        FlightNumber: "AM456",
        AirlineName: "AeroMéxico",
        AircraftType: "Boeing 737-800"
      },
      {
        DepartureAirport: "BOG",
        ArrivalAirport: "GRU",
        DepartureTime: "2025-08-12T15:40:00",
        ArrivalTime: "2025-08-12T22:30:00",
        FlightNumber: "LA8078",
        AirlineName: "LATAM Airlines",
        AircraftType: "Airbus A320"
      }
    ],
    CostBelowAverage: 67.50,
    PercentBelowAverage: 11.38,
    SeatsAvailable: 28
  },
  {
    TravelClass: "Economy",
    Origin: "MEX",
    OriginAirportName: "Mexico City International Airport",
    OriginCityName: "Mexico City",
    OriginCountry: "Mexico",
    OriginTimeZone: "America/Mexico_City",
    Destination: "GRU",
    DestinationAirportName: "São Paulo–Guarulhos International Airport",
    DestinationCityName: "São Paulo",
    DestinationCountry: "Brazil",
    DestinationTimeZone: "America/Sao_Paulo",
    IsDirect: true,
    DepartureTime: "2025-08-12T09:45:00",
    ArrivalTime: "2025-08-12T19:30:00",
    TotalTravelTimeMinutes: "585",
    FlightNumbers: ["LA8123"],
    BaggageAmount: "1",
    BaggageType: "Checked",
    Cost: "$589.25",
    CostFloat: 589.25,
    PurchasingId: "LAMEX-GRU-081225-E",
    connections: [],
    Legs: [
      {
        DepartureAirport: "MEX",
        ArrivalAirport: "GRU",
        DepartureTime: "2025-08-12T09:45:00",
        ArrivalTime: "2025-08-12T19:30:00",
        FlightNumber: "LA8123",
        AirlineName: "LATAM Airlines",
        AircraftType: "Boeing 787-9"
      }
    ],
    CostBelowAverage: 3.75,
    PercentBelowAverage: 0.63,
    SeatsAvailable: 12
  },
  {
    TravelClass: "Economy",
    Origin: "MEX",
    OriginAirportName: "Mexico City International Airport",
    OriginCityName: "Mexico City",
    OriginCountry: "Mexico",
    OriginTimeZone: "America/Mexico_City",
    Destination: "GRU",
    DestinationAirportName: "São Paulo–Guarulhos International Airport",
    DestinationCityName: "São Paulo",
    DestinationCountry: "Brazil",
    DestinationTimeZone: "America/Sao_Paulo",
    IsDirect: false,
    DepartureTime: "2025-08-12T14:20:00",
    ArrivalTime: "2025-08-13T08:40:00",
    TotalTravelTimeMinutes: "740",
    FlightNumbers: ["CM158", "CM702"],
    BaggageAmount: "1",
    BaggageType: "Checked",
    Cost: "$498.75",
    CostFloat: 498.75,
    PurchasingId: "CMMEX-GRU-081225-E",
    connections: ["PTY"],
    Legs: [
      {
        DepartureAirport: "MEX",
        ArrivalAirport: "PTY",
        DepartureTime: "2025-08-12T14:20:00",
        ArrivalTime: "2025-08-12T18:45:00",
        FlightNumber: "CM158",
        AirlineName: "Copa Airlines",
        AircraftType: "Boeing 737-800"
      },
      {
        DepartureAirport: "PTY",
        ArrivalAirport: "GRU",
        DepartureTime: "2025-08-12T20:30:00",
        ArrivalTime: "2025-08-13T08:40:00",
        FlightNumber: "CM702",
        AirlineName: "Copa Airlines",
        AircraftType: "Boeing 737-800"
      }
    ],
    CostBelowAverage: 94.25,
    PercentBelowAverage: 15.89,
    SeatsAvailable: 5
  },

  // HND to LAX - Route 8 (3 options)
  {
    TravelClass: "First",
    Origin: "HND",
    OriginAirportName: "Haneda Airport",
    OriginCityName: "Tokyo",
    OriginCountry: "Japan",
    OriginTimeZone: "Asia/Tokyo",
    Destination: "LAX",
    DestinationAirportName: "Los Angeles International Airport",
    DestinationCityName: "Los Angeles",
    DestinationCountry: "United States",
    DestinationTimeZone: "America/Los_Angeles",
    IsDirect: true,
    DepartureTime: "2025-06-25T19:15:00",
    ArrivalTime: "2025-06-25T13:25:00",
    TotalTravelTimeMinutes: "590",
    FlightNumbers: ["NH106"],
    BaggageAmount: "3",
    BaggageType: "Checked",
    Cost: "$7,250.00",
    CostFloat: 7250.00,
    PurchasingId: "NHHND-LAX-062525-F",
    connections: [],
    Legs: [
      {
        DepartureAirport: "HND",
        ArrivalAirport: "LAX",
        DepartureTime: "2025-06-25T19:15:00",
        ArrivalTime: "2025-06-25T13:25:00",
        FlightNumber: "NH106",
        AirlineName: "All Nippon Airways",
        AircraftType: "Boeing 777-300ER"
      }
    ],
    CostBelowAverage: 1100.00,
    PercentBelowAverage: 13.18,
    SeatsAvailable: 4
  },
  {
    TravelClass: "First",
    Origin: "HND",
    OriginAirportName: "Haneda Airport",
    OriginCityName: "Tokyo",
    OriginCountry: "Japan",
    OriginTimeZone: "Asia/Tokyo",
    Destination: "LAX",
    DestinationAirportName: "Los Angeles International Airport",
    DestinationCityName: "Los Angeles",
    DestinationCountry: "United States",
    DestinationTimeZone: "America/Los_Angeles",
    IsDirect: true,
    DepartureTime: "2025-06-25T17:30:00",
    ArrivalTime: "2025-06-25T11:40:00",
    TotalTravelTimeMinutes: "580",
    FlightNumbers: ["JL62"],
    BaggageAmount: "3",
    BaggageType: "Checked",
    Cost: "$7,485.00",
    CostFloat: 7485.00,
    PurchasingId: "JLHND-LAX-062525-F",
    connections: [],
    Legs: [
      {
        DepartureAirport: "HND",
        ArrivalAirport: "LAX",
        DepartureTime: "2025-06-25T17:30:00",
        ArrivalTime: "2025-06-25T11:40:00",
        FlightNumber: "JL62",
        AirlineName: "Japan Airlines",
        AircraftType: "Boeing 777-300ER"
      }
    ],
    CostBelowAverage: 865.00,
    PercentBelowAverage: 10.36,
    SeatsAvailable: 2
  },
  {
    TravelClass: "Business",
    Origin: "HND",
    OriginAirportName: "Haneda Airport",
    OriginCityName: "Tokyo",
    OriginCountry: "Japan",
    OriginTimeZone: "Asia/Tokyo",
    Destination: "LAX",
    DestinationAirportName: "Los Angeles International Airport",
    DestinationCityName: "Los Angeles",
    DestinationCountry: "United States",
    DestinationTimeZone: "America/Los_Angeles",
    IsDirect: false,
    DepartureTime: "2025-06-25T14:10:00",
    ArrivalTime: "2025-06-25T14:45:00",
    TotalTravelTimeMinutes: "715",
    FlightNumbers: ["KE121", "KE11"],
    BaggageAmount: "3",
    BaggageType: "Checked",
    Cost: "$6,890.50",
    CostFloat: 6890.50,
    PurchasingId: "KEHND-LAX-062525-F",
    connections: ["ICN"],
    Legs: [
      {
        DepartureAirport: "HND",
        ArrivalAirport: "ICN",
        DepartureTime: "2025-06-25T14:10:00",
        ArrivalTime: "2025-06-25T16:50:00",
        FlightNumber: "KE121",
        AirlineName: "Korean Air",
        AircraftType: "Airbus A330-300"
      },
      {
        DepartureAirport: "ICN",
        ArrivalAirport: "LAX",
        DepartureTime: "2025-06-25T19:30:00",
        ArrivalTime: "2025-06-25T14:45:00",
        FlightNumber: "KE11",
        AirlineName: "Korean Air",
        AircraftType: "Airbus A380-800"
      }
    ],
    CostBelowAverage: 1459.50,
    PercentBelowAverage: 17.49,
    SeatsAvailable: 1
  },

  // AMS to CPT - Route 9 (3 options)
  {
    TravelClass: "Premium Economy",
    Origin: "AMS",
    OriginAirportName: "Amsterdam Airport Schiphol",
    OriginCityName: "Amsterdam",
    OriginCountry: "Netherlands",
    OriginTimeZone: "Europe/Amsterdam",
    Destination: "CPT",
    DestinationAirportName: "Cape Town International Airport",
    DestinationCityName: "Cape Town",
    DestinationCountry: "South Africa",
    DestinationTimeZone: "Africa/Johannesburg",
    IsDirect: false,
    DepartureTime: "2025-09-18T10:05:00",
    ArrivalTime: "2025-09-19T08:10:00",
    TotalTravelTimeMinutes: "865",
    FlightNumbers: ["KL592", "BA43"],
    BaggageAmount: "2",
    BaggageType: "Checked",
    Cost: "$1,099.00",
    CostFloat: 1099.00,
    PurchasingId: "KLAMS-CPT-091825-PE",
    connections: ["LHR"],
    Legs: [
      {
        DepartureAirport: "AMS",
        ArrivalAirport: "LHR",
        DepartureTime: "2025-09-18T10:05:00",
        ArrivalTime: "2025-09-18T11:15:00",
        FlightNumber: "KL592",
        AirlineName: "KLM Royal Dutch Airlines",
        AircraftType: "Boeing 737-800"
      },
      {
        DepartureAirport: "LHR",
        ArrivalAirport: "CPT",
        DepartureTime: "2025-09-18T21:30:00",
        ArrivalTime: "2025-09-19T08:10:00",
        FlightNumber: "BA43",
        AirlineName: "British Airways",
        AircraftType: "Boeing 787-9"
      }
    ],
    CostBelowAverage: 178.50,
    PercentBelowAverage: 14.00,
    SeatsAvailable: 11
  },
  {
    TravelClass: "Premium Economy",
    Origin: "AMS",
    OriginAirportName: "Amsterdam Airport Schiphol",
    OriginCityName: "Amsterdam",
    OriginCountry: "Netherlands",
    OriginTimeZone: "Europe/Amsterdam",
    Destination: "CPT",
    DestinationAirportName: "Cape Town International Airport",
    DestinationCityName: "Cape Town",
    DestinationCountry: "South Africa",
    DestinationTimeZone: "Africa/Johannesburg",
    IsDirect: false,
    DepartureTime: "2025-09-18T11:40:00",
    ArrivalTime: "2025-09-19T09:25:00",
    TotalTravelTimeMinutes: "885",
    FlightNumbers: ["LH989", "LH576"],
    BaggageAmount: "2",
    BaggageType: "Checked",
    Cost: "$1,045.75",
    CostFloat: 1045.75,
    PurchasingId: "LHAMS-CPT-091825-PE",
    connections: ["FRA"],
    Legs: [
      {
        DepartureAirport: "AMS",
        ArrivalAirport: "FRA",
        DepartureTime: "2025-09-18T11:40:00",
        ArrivalTime: "2025-09-18T12:55:00",
        FlightNumber: "LH989",
        AirlineName: "Lufthansa",
        AircraftType: "Airbus A320"
      },
      {
        DepartureAirport: "FRA",
        ArrivalAirport: "CPT",
        DepartureTime: "2025-09-18T22:05:00",
        ArrivalTime: "2025-09-19T09:25:00",
        FlightNumber: "LH576",
        AirlineName: "Lufthansa",
        AircraftType: "Airbus A340-600"
      }
    ],
    CostBelowAverage: 231.75,
    PercentBelowAverage: 18.15,
    SeatsAvailable: 7
  },
  {
    TravelClass: "Premium Economy",
    Origin: "AMS",
    OriginAirportName: "Amsterdam Airport Schiphol",
    OriginCityName: "Amsterdam",
    OriginCountry: "Netherlands",
    OriginTimeZone: "Europe/Amsterdam",
    Destination: "CPT",
    DestinationAirportName: "Cape Town International Airport",
    DestinationCityName: "Cape Town",
    DestinationCountry: "South Africa",
    DestinationTimeZone: "Africa/Johannesburg",
    IsDirect: false,
    DepartureTime: "2025-09-18T14:50:00",
    ArrivalTime: "2025-09-19T12:15:00",
    TotalTravelTimeMinutes: "925",
    FlightNumbers: ["KL598", "KL597"],
    BaggageAmount: "2",
    BaggageType: "Checked",
    Cost: "$1,175.25",
    CostFloat: 1175.25,
    PurchasingId: "KLAMS-CPT-091825-PE2",
    connections: ["JNB"],
    Legs: [
      {
        DepartureAirport: "AMS",
        ArrivalAirport: "JNB",
        DepartureTime: "2025-09-18T14:50:00",
        ArrivalTime: "2025-09-19T01:20:00",
        FlightNumber: "KL598",
        AirlineName: "KLM Royal Dutch Airlines",
        AircraftType: "Boeing 777-300ER"
      },
      {
        DepartureAirport: "JNB",
        ArrivalAirport: "CPT",
        DepartureTime: "2025-09-19T10:40:00",
        ArrivalTime: "2025-09-19T12:15:00",
        FlightNumber: "KL597",
        AirlineName: "KLM Royal Dutch Airlines",
        AircraftType: "Boeing 737-800"
      }
    ],
    CostBelowAverage: 102.25,
    PercentBelowAverage: 8.01,
    SeatsAvailable: 3
  },

  // IST to CAI - Route 10 (3 options)
  {
    TravelClass: "Economy",
    Origin: "IST",
    OriginAirportName: "Istanbul Airport",
    OriginCityName: "Istanbul",
    OriginCountry: "Turkey",
    OriginTimeZone: "Europe/Istanbul",
    Destination: "CAI",
    DestinationAirportName: "Cairo International Airport",
    DestinationCityName: "Cairo",
    DestinationCountry: "Egypt",
    DestinationTimeZone: "Africa/Cairo",
    IsDirect: true,
    DepartureTime: "2025-07-30T09:45:00",
    ArrivalTime: "2025-07-30T10:55:00",
    TotalTravelTimeMinutes: "130",
    FlightNumbers: ["TK690"],
    BaggageAmount: "1",
    BaggageType: "Checked",
    Cost: "$199.99",
    CostFloat: 199.99,
    PurchasingId: "TKIST-CAI-073025-E",
    connections: [],
    Legs: [
      {
        DepartureAirport: "IST",
        ArrivalAirport: "CAI",
        DepartureTime: "2025-07-30T09:45:00",
        ArrivalTime: "2025-07-30T10:55:00",
        FlightNumber: "TK690",
        AirlineName: "Turkish Airlines",
        AircraftType: "Airbus A321"
      }
    ],
    CostBelowAverage: 45.01,
    PercentBelowAverage: 18.37,
    SeatsAvailable: 34
  },
  {
    TravelClass: "Economy",
    Origin: "IST",
    OriginAirportName: "Istanbul Airport",
    OriginCityName: "Istanbul",
    OriginCountry: "Turkey",
    OriginTimeZone: "Europe/Istanbul",
    Destination: "CAI",
    DestinationAirportName: "Cairo International Airport",
    DestinationCityName: "Cairo",
    DestinationCountry: "Egypt",
    DestinationTimeZone: "Africa/Cairo",
    IsDirect: true,
    DepartureTime: "2025-07-30T15:20:00",
    ArrivalTime: "2025-07-30T16:30:00",
    TotalTravelTimeMinutes: "130",
    FlightNumbers: ["MS738"],
    BaggageAmount: "1",
    BaggageType: "Checked",
    Cost: "$219.50",
    CostFloat: 219.50,
    PurchasingId: "MSIST-CAI-073025-E",
    connections: [],
    Legs: [
      {
        DepartureAirport: "IST",
        ArrivalAirport: "CAI",
        DepartureTime: "2025-07-30T15:20:00",
        ArrivalTime: "2025-07-30T16:30:00",
        FlightNumber: "MS738",
        AirlineName: "EgyptAir",
        AircraftType: "Boeing 737-800"
      }
    ],
    CostBelowAverage: 25.50,
    PercentBelowAverage: 10.40,
    SeatsAvailable: 15
  },
  {
    TravelClass: "Economy",
    Origin: "IST",
    OriginAirportName: "Istanbul Airport",
    OriginCityName: "Istanbul",
    OriginCountry: "Turkey",
    OriginTimeZone: "Europe/Istanbul",
    Destination: "CAI",
    DestinationAirportName: "Cairo International Airport",
    DestinationCityName: "Cairo",
    DestinationCountry: "Egypt",
    DestinationTimeZone: "Africa/Cairo",
    IsDirect: true,
    DepartureTime: "2025-07-30T23:45:00",
    ArrivalTime: "2025-07-31T00:55:00",
    TotalTravelTimeMinutes: "130",
    FlightNumbers: ["TK692"],
    BaggageAmount: "1",
    BaggageType: "Checked",
    Cost: "$184.25",
    CostFloat: 184.25,
    PurchasingId: "TKIST-CAI-073025-E2",
    connections: [],
    Legs: [
      {
        DepartureAirport: "IST",
        ArrivalAirport: "CAI",
        DepartureTime: "2025-07-30T23:45:00",
        ArrivalTime: "2025-07-31T00:55:00",
        FlightNumber: "TK692",
        AirlineName: "Turkish Airlines",
        AircraftType: "Airbus A321"
      }
    ],
    CostBelowAverage: 60.75,
    PercentBelowAverage: 24.80,
    SeatsAvailable: 28
  }
];

export const airlineLogos: { [key: string]: { id: string; lcc: string; name: string; logo: string; }; } = {
  "88": {
    "id": "47",
    "lcc": "0",
    "name": "88",
    "logo": "https://images.kiwi.com/airlines/64/47.png"
  },
  "Autostradale": {
    "id": "AUTOSTRAD",
    "lcc": "None",
    "name": "Autostradale",
    "logo": "https://images.kiwi.com/airlines/64/AUTOSTRAD.png"
  },
  "East Midlands Trains": {
    "id": "EASTMIDLAN",
    "lcc": "None",
    "name": "East Midlands Trains",
    "logo": "https://images.kiwi.com/airlines/64/EASTMIDLAN.png"
  },
  "Flibco": {
    "id": "FLIBCO",
    "lcc": "0",
    "name": "Flibco",
    "logo": "https://images.kiwi.com/airlines/64/FLIBCO.png"
  },
  "Sundair": {
    "id": "SR",
    "lcc": "0",
    "name": "Sundair",
    "logo": "https://images.kiwi.com/airlines/64/SR.png"
  },
  "Sagales": {
    "id": "SAGALES",
    "lcc": "None",
    "name": "Sagales",
    "logo": "https://images.kiwi.com/airlines/64/SAGALES.png"
  },
  "Eurolines": {
    "id": "EUROLINES",
    "lcc": "0",
    "name": "Eurolines",
    "logo": "https://images.kiwi.com/airlines/64/EUROLINES.png"
  },
  "Isilines": {
    "id": "ISILINES",
    "lcc": "0",
    "name": "Isilines",
    "logo": "https://images.kiwi.com/airlines/64/ISILINES.png"
  },
  "Nomago": {
    "id": "NOMAGO",
    "lcc": "None",
    "name": "Nomago",
    "logo": "https://images.kiwi.com/airlines/64/NOMAGO.png"
  },
  "WestJet Encore": {
    "id": "WR",
    "lcc": "1",
    "name": "WestJet Encore",
    "logo": "https://images.kiwi.com/airlines/64/WR.png"
  },
  "Cyprus Airways": {
    "id": "CY",
    "lcc": "0",
    "name": "Cyprus Airways",
    "logo": "https://images.kiwi.com/airlines/64/CY.png"
  },
  "Flixtrain": {
    "id": "FLIXTRAIN",
    "lcc": "0",
    "name": "Flixtrain",
    "logo": "https://images.kiwi.com/airlines/64/FLIXTRAIN.png"
  },
  "Air Kenya": {
    "id": "P2",
    "lcc": "1",
    "name": "Air Kenya",
    "logo": "https://images.kiwi.com/airlines/64/P2.png"
  },
  "interCaribbean Airways": {
    "id": "JY",
    "lcc": "0",
    "name": "interCaribbean Airways",
    "logo": "https://images.kiwi.com/airlines/64/JY.png"
  },
  "Air Austral": {
    "id": "UU",
    "lcc": "0",
    "name": "Air Austral",
    "logo": "https://images.kiwi.com/airlines/64/UU.png"
  },
  "Scandinavian Airlines Ireland": {
    "id": "SZS",
    "lcc": "None",
    "name": "Scandinavian Airlines Ireland",
    "logo": "https://images.kiwi.com/airlines/64/SZS.png"
  },
  "Greyhound": {
    "id": "GREYHOUND",
    "lcc": "0",
    "name": "Greyhound",
    "logo": "https://images.kiwi.com/airlines/64/GREYHOUND.png"
  },
  "Lao Airlines": {
    "id": "QV",
    "lcc": "0",
    "name": "Lao Airlines",
    "logo": "https://images.kiwi.com/airlines/64/QV.png"
  },
  "NextJet": {
    "id": "2N",
    "lcc": "1",
    "name": "NextJet",
    "logo": "https://images.kiwi.com/airlines/64/2N.png"
  },
  "Air Algerie": {
    "id": "AH",
    "lcc": "0",
    "name": "Air Algerie",
    "logo": "https://images.kiwi.com/airlines/64/AH.png"
  },
  "Tandem Aero": {
    "id": "TQ",
    "lcc": "0",
    "name": "Tandem Aero",
    "logo": "https://images.kiwi.com/airlines/64/TQ.png"
  },
  "Armenia Aircompany": {
    "id": "RM",
    "lcc": "0",
    "name": "Armenia Aircompany",
    "logo": "https://images.kiwi.com/airlines/64/RM.png"
  },
  "National Express": {
    "id": "NATEXPRESS",
    "lcc": "0",
    "name": "National Express",
    "logo": "https://images.kiwi.com/airlines/64/NATEXPRESS.png"
  },
  "Avianca Argentina": {
    "id": "A0",
    "lcc": "1",
    "name": "Avianca Argentina",
    "logo": "https://images.kiwi.com/airlines/64/A0.png"
  },
  "JetGo": {
    "id": "JG",
    "lcc": "1",
    "name": "JetGo",
    "logo": "https://images.kiwi.com/airlines/64/JG.png"
  },
  "SkyJet Airlines": {
    "id": "M8",
    "lcc": "1",
    "name": "SkyJet Airlines",
    "logo": "https://images.kiwi.com/airlines/64/M8.png"
  },
  "Aero Mongolia": {
    "id": "M0",
    "lcc": "1",
    "name": "Aero Mongolia",
    "logo": "https://images.kiwi.com/airlines/64/M0.png"
  },
  "Canadian North": {
    "id": "5T",
    "lcc": "0",
    "name": "Canadian North",
    "logo": "https://images.kiwi.com/airlines/64/5T.png"
  },
  "Pelita": {
    "id": "6D",
    "lcc": "0",
    "name": "Pelita",
    "logo": "https://images.kiwi.com/airlines/64/6D.png"
  },
  "Avianca Guatemala": {
    "id": "GU",
    "lcc": "1",
    "name": "Avianca Guatemala",
    "logo": "https://images.kiwi.com/airlines/64/GU.png"
  },
  "NokScoot": {
    "id": "XW",
    "lcc": "1",
    "name": "NokScoot",
    "logo": "https://images.kiwi.com/airlines/64/XW.png"
  },
  "United Airlines": {
    "id": "UA",
    "lcc": "0",
    "name": "United Airlines",
    "logo": "https://images.kiwi.com/airlines/64/UA.png"
  },
  "Alaska Seaplanes X4": {
    "id": "X4",
    "lcc": "0",
    "name": "Alaska Seaplanes X4",
    "logo": "https://images.kiwi.com/airlines/64/X4.png"
  },
  "FMI Air": {
    "id": "ND",
    "lcc": "0",
    "name": "FMI Air",
    "logo": "https://images.kiwi.com/airlines/64/ND.png"
  },
  "Conviasa": {
    "id": "V0",
    "lcc": "1",
    "name": "Conviasa",
    "logo": "https://images.kiwi.com/airlines/64/V0.png"
  },
  "Greenfly": {
    "id": "XX",
    "lcc": "0",
    "name": "Greenfly",
    "logo": "https://images.kiwi.com/airlines/64/XX.png"
  },
  "AirAsia X": {
    "id": "D7",
    "lcc": "0",
    "name": "AirAsia X",
    "logo": "https://images.kiwi.com/airlines/64/D7.png"
  },
  "Thai AirAsia X": {
    "id": "XJ",
    "lcc": "0",
    "name": "Thai AirAsia X",
    "logo": "https://images.kiwi.com/airlines/64/XJ.png"
  },
  "PAL Express": {
    "id": "2P",
    "lcc": "1",
    "name": "PAL Express",
    "logo": "https://images.kiwi.com/airlines/64/2P.png"
  },
  "Buta Airways": {
    "id": "BUTAAIR",
    "lcc": "1",
    "name": "Buta Airways",
    "logo": "https://images.kiwi.com/airlines/64/BUTAAIR.png"
  },
  "Cubana de Aviación": {
    "id": "CU",
    "lcc": "0",
    "name": "Cubana de Aviación",
    "logo": "https://images.kiwi.com/airlines/64/CU.png"
  },
  "Viva Air": {
    "id": "VH",
    "lcc": "0",
    "name": "Viva Air",
    "logo": "https://images.kiwi.com/airlines/64/VH.png"
  },
  "SkyUp Airlines": {
    "id": "PQ",
    "lcc": "0",
    "name": "SkyUp Airlines",
    "logo": "https://images.kiwi.com/airlines/64/PQ.png"
  },
  "Arik Air": {
    "id": "W3",
    "lcc": "0",
    "name": "Arik Air",
    "logo": "https://images.kiwi.com/airlines/64/W3.png"
  },
  "People's Viennaline PE": {
    "id": "PE",
    "lcc": "0",
    "name": "People's Viennaline PE",
    "logo": "https://images.kiwi.com/airlines/64/PE.png"
  },
  "Gomelavia": {
    "id": "YD",
    "lcc": "0",
    "name": "Gomelavia",
    "logo": "https://images.kiwi.com/airlines/64/YD.png"
  },
  "Loong Air": {
    "id": "GJ",
    "lcc": "0",
    "name": "Loong Air",
    "logo": "https://images.kiwi.com/airlines/64/GJ.png"
  },
  "Flixbus": {
    "id": "FLIXBUS",
    "lcc": "0",
    "name": "Flixbus",
    "logo": "https://images.kiwi.com/airlines/64/FLIXBUS.png"
  },
  "Transportes Chihuahuenses": {
    "id": "CHIHUAHUEN",
    "lcc": "None",
    "name": "Transportes Chihuahuenses",
    "logo": "https://images.kiwi.com/airlines/64/CHIHUAHUEN.png"
  },
  "SNCB": {
    "id": "SNCB",
    "lcc": "0",
    "name": "SNCB",
    "logo": "https://images.kiwi.com/airlines/64/SNCB.png"
  },
  "Ciao Air": {
    "id": "99",
    "lcc": "0",
    "name": "Ciao Air",
    "logo": "https://images.kiwi.com/airlines/64/99.png"
  },
  "Starbow Airlines": {
    "id": "S9",
    "lcc": "0",
    "name": "Starbow Airlines",
    "logo": "https://images.kiwi.com/airlines/64/S9.png"
  },
  "Aerodart": {
    "id": "D4",
    "lcc": "0",
    "name": "Aerodart",
    "logo": "https://images.kiwi.com/airlines/64/D4.png"
  },
  "Mid Africa Aviation": {
    "id": "8G",
    "lcc": "0",
    "name": "Mid Africa Aviation",
    "logo": "https://images.kiwi.com/airlines/64/8G.png"
  },
  "TransNusa": {
    "id": "8B",
    "lcc": "0",
    "name": "TransNusa",
    "logo": "https://images.kiwi.com/airlines/64/8B.png"
  },
  "Azul": {
    "id": "AD",
    "lcc": "1",
    "name": "Azul",
    "logo": "https://images.kiwi.com/airlines/64/AD.png"
  },
  "Air Tahiti": {
    "id": "VT",
    "lcc": "0",
    "name": "Air Tahiti",
    "logo": "https://images.kiwi.com/airlines/64/VT.png"
  },
  "Peninsula Airways": {
    "id": "KS",
    "lcc": "0",
    "name": "Peninsula Airways",
    "logo": "https://images.kiwi.com/airlines/64/KS.png"
  },
  "Druk Air": {
    "id": "KB",
    "lcc": "0",
    "name": "Druk Air",
    "logo": "https://images.kiwi.com/airlines/64/KB.png"
  },
  "SkyWork Airlines": {
    "id": "SX",
    "lcc": "0",
    "name": "SkyWork Airlines",
    "logo": "https://images.kiwi.com/airlines/64/SX.png"
  },
  "SalamAir": {
    "id": "OV",
    "lcc": "1",
    "name": "SalamAir",
    "logo": "https://images.kiwi.com/airlines/64/OV.png"
  },
  "Meraj Air": {
    "id": "JI",
    "lcc": "0",
    "name": "Meraj Air",
    "logo": "https://images.kiwi.com/airlines/64/JI.png"
  },
  "Air Comet Chile": {
    "id": "3I",
    "lcc": "0",
    "name": "Air Comet Chile",
    "logo": "https://images.kiwi.com/airlines/64/3I.png"
  },
  "Click (Mexicana)": {
    "id": "QA",
    "lcc": "0",
    "name": "Click (Mexicana)",
    "logo": "https://images.kiwi.com/airlines/64/QA.png"
  },
  "Dana Airlines Limited": {
    "id": "9J",
    "lcc": "0",
    "name": "Dana Airlines Limited",
    "logo": "https://images.kiwi.com/airlines/64/9J.png"
  },
  "Astra Airlines": {
    "id": "A2",
    "lcc": "0",
    "name": "Astra Airlines",
    "logo": "https://images.kiwi.com/airlines/64/A2.png"
  },
  "Tassili Airlines": {
    "id": "SF",
    "lcc": "0",
    "name": "Tassili Airlines",
    "logo": "https://images.kiwi.com/airlines/64/SF.png"
  },
  "IC Bus": {
    "id": "ICBUS",
    "lcc": "0",
    "name": "IC Bus",
    "logo": "https://images.kiwi.com/airlines/64/ICBUS.png"
  },
  "DeinBus": {
    "id": "DEINBUS",
    "lcc": "0",
    "name": "DeinBus",
    "logo": "https://images.kiwi.com/airlines/64/DEINBUS.png"
  },
  "Oresundstag": {
    "id": "ORESUNDST",
    "lcc": "0",
    "name": "Oresundstag",
    "logo": "https://images.kiwi.com/airlines/64/ORESUNDST.png"
  },
  "Le Bus Direct": {
    "id": "LEBUSDIR",
    "lcc": "0",
    "name": "Le Bus Direct",
    "logo": "https://images.kiwi.com/airlines/64/LEBUSDIR.png"
  },
  "African Express": {
    "id": "XU",
    "lcc": "1",
    "name": "African Express",
    "logo": "https://images.kiwi.com/airlines/64/XU.png"
  },
  "Corendon Dutch Airlines B.V.": {
    "id": "CD",
    "lcc": "0",
    "name": "Corendon Dutch Airlines B.V.",
    "logo": "https://images.kiwi.com/airlines/64/CD.png"
  },
  "Alaska Seaplane Service": {
    "id": "J5",
    "lcc": "0",
    "name": "Alaska Seaplane Service",
    "logo": "https://images.kiwi.com/airlines/64/J5.png"
  },
  "Lanmei Airlines": {
    "id": "LQ",
    "lcc": "1",
    "name": "Lanmei Airlines",
    "logo": "https://images.kiwi.com/airlines/64/LQ.png"
  },
  "Saudi Arabian Airlines": {
    "id": "SV",
    "lcc": "0",
    "name": "Saudi Arabian Airlines",
    "logo": "https://images.kiwi.com/airlines/64/SV.png"
  },
  "Lufthansa": {
    "id": "LH",
    "lcc": "0",
    "name": "Lufthansa",
    "logo": "https://images.kiwi.com/airlines/64/LH.png"
  },
  "LATAM Airlines": {
    "id": "LA",
    "lcc": "0",
    "name": "LATAM Airlines",
    "logo": "https://images.kiwi.com/airlines/64/LA.png"
  },
  "Qantas": {
    "id": "QF",
    "lcc": "0",
    "name": "Qantas",
    "logo": "https://images.kiwi.com/airlines/64/QF.png"
  },
  "Blue Air": {
    "id": "0B",
    "lcc": "1",
    "name": "Blue Air",
    "logo": "https://images.kiwi.com/airlines/64/0B.png"
  },
  "Air Mediterranean": {
    "id": "MV",
    "lcc": "0",
    "name": "Air Mediterranean",
    "logo": "https://images.kiwi.com/airlines/64/MV.png"
  },
  "Norwegian Air UK": {
    "id": "DI",
    "lcc": "0",
    "name": "Norwegian Air UK",
    "logo": "https://images.kiwi.com/airlines/64/DI.png"
  },
  "JSC UVT Aero": {
    "id": "RT",
    "lcc": "0",
    "name": "JSC UVT Aero",
    "logo": "https://images.kiwi.com/airlines/64/RT.png"
  },
  "Flyadeal": {
    "id": "F3",
    "lcc": "0",
    "name": "Flyadeal",
    "logo": "https://images.kiwi.com/airlines/64/F3.png"
  },
  "Transfero": {
    "id": "TRANSFERO",
    "lcc": "0",
    "name": "Transfero",
    "logo": "https://images.kiwi.com/airlines/64/TRANSFERO.png"
  },
  "AirCentury": {
    "id": "Y2",
    "lcc": "0",
    "name": "AirCentury",
    "logo": "https://images.kiwi.com/airlines/64/Y2.png"
  },
  "Air Arabia Jordan": {
    "id": "9P",
    "lcc": "1",
    "name": "Air Arabia Jordan",
    "logo": "https://images.kiwi.com/airlines/64/9P.png"
  },
  "LATAM Colombia": {
    "id": "4C",
    "lcc": "0",
    "name": "LATAM Colombia",
    "logo": "https://images.kiwi.com/airlines/64/4C.png"
  },
  "Air Travel": {
    "id": "A6",
    "lcc": "0",
    "name": "Air Travel",
    "logo": "https://images.kiwi.com/airlines/64/A6.png"
  },
  "ZanAir": {
    "id": "B4",
    "lcc": "0",
    "name": "ZanAir",
    "logo": "https://images.kiwi.com/airlines/64/B4.png"
  },
  "Avianca Peru": {
    "id": "T0",
    "lcc": "0",
    "name": "Avianca Peru",
    "logo": "https://images.kiwi.com/airlines/64/T0.png"
  },
  "Lugansk Airlines": {
    "id": "L7",
    "lcc": "0",
    "name": "Lugansk Airlines",
    "logo": "https://images.kiwi.com/airlines/64/L7.png"
  },
  "Air Nostrum": {
    "id": "YW",
    "lcc": "0",
    "name": "Air Nostrum",
    "logo": "https://images.kiwi.com/airlines/64/YW.png"
  },
  "NordStar Airlines": {
    "id": "Y7",
    "lcc": "1",
    "name": "NordStar Airlines",
    "logo": "https://images.kiwi.com/airlines/64/Y7.png"
  },
  "Binter Canarias": {
    "id": "NT",
    "lcc": "1",
    "name": "Binter Canarias",
    "logo": "https://images.kiwi.com/airlines/64/NT.png"
  },
  "Sichuan Airlines": {
    "id": "3U",
    "lcc": "0",
    "name": "Sichuan Airlines",
    "logo": "https://images.kiwi.com/airlines/64/3U.png"
  },
  "TUIfly (X3)": {
    "id": "11",
    "lcc": "0",
    "name": "TUIfly (X3)",
    "logo": "https://images.kiwi.com/airlines/64/11.png"
  },
  "Anadolujet": {
    "id": "00",
    "lcc": "1",
    "name": "Anadolujet",
    "logo": "https://images.kiwi.com/airlines/64/00.png"
  },
  "Regiojet Train": {
    "id": "REGIOJETT",
    "lcc": "0",
    "name": "Regiojet Train",
    "logo": "https://images.kiwi.com/airlines/64/REGIOJETT.png"
  },
  "LongJiang Airlines": {
    "id": "LT",
    "lcc": "0",
    "name": "LongJiang Airlines",
    "logo": "https://images.kiwi.com/airlines/64/LT.png"
  },
  "Alitalia Express": {
    "id": "XM",
    "lcc": "0",
    "name": "Alitalia Express",
    "logo": "https://images.kiwi.com/airlines/64/XM.png"
  },
  "Air Sinai": {
    "id": "4D",
    "lcc": "0",
    "name": "Air Sinai",
    "logo": "https://images.kiwi.com/airlines/64/4D.png"
  },
  "Africa West": {
    "id": "FK",
    "lcc": "0",
    "name": "Africa West",
    "logo": "https://images.kiwi.com/airlines/64/FK.png"
  },
  "Air Guinee Express": {
    "id": "2U",
    "lcc": "0",
    "name": "Air Guinee Express",
    "logo": "https://images.kiwi.com/airlines/64/2U.png"
  },
  "Calafia Airlines": {
    "id": "A7",
    "lcc": "0",
    "name": "Calafia Airlines",
    "logo": "https://images.kiwi.com/airlines/64/A7.png"
  },
  "Air Guyane": {
    "id": "GG",
    "lcc": "0",
    "name": "Air Guyane",
    "logo": "https://images.kiwi.com/airlines/64/GG.png"
  },
  "AirTran Airways": {
    "id": "FL",
    "lcc": "0",
    "name": "AirTran Airways",
    "logo": "https://images.kiwi.com/airlines/64/FL.png"
  },
  "FlyLal": {
    "id": "TE",
    "lcc": "0",
    "name": "FlyLal",
    "logo": "https://images.kiwi.com/airlines/64/TE.png"
  },
  "XL Airways France": {
    "id": "SE",
    "lcc": "1",
    "name": "XL Airways France",
    "logo": "https://images.kiwi.com/airlines/64/SE.png"
  },
  "Widerøe": {
    "id": "WF",
    "lcc": "0",
    "name": "Widerøe",
    "logo": "https://images.kiwi.com/airlines/64/WF.png"
  },
  "Serbian Airlines": {
    "id": "S1",
    "lcc": "0",
    "name": "Serbian Airlines",
    "logo": "https://images.kiwi.com/airlines/64/S1.png"
  },
  "LSM International ": {
    "id": "II",
    "lcc": "0",
    "name": "LSM International ",
    "logo": "https://images.kiwi.com/airlines/64/II.png"
  },
  "Hankook Airline": {
    "id": "HN",
    "lcc": "0",
    "name": "Hankook Airline",
    "logo": "https://images.kiwi.com/airlines/64/HN.png"
  },
  "Nile Air": {
    "id": "NP",
    "lcc": "0",
    "name": "Nile Air",
    "logo": "https://images.kiwi.com/airlines/64/NP.png"
  },
  "Maryland Air": {
    "id": "M1",
    "lcc": "0",
    "name": "Maryland Air",
    "logo": "https://images.kiwi.com/airlines/64/M1.png"
  },
  "MHS Aviation GmbH": {
    "id": "M2",
    "lcc": "0",
    "name": "MHS Aviation GmbH",
    "logo": "https://images.kiwi.com/airlines/64/M2.png"
  },
  "Irish Citylink": {
    "id": "IRCITYLINK",
    "lcc": "None",
    "name": "Irish Citylink",
    "logo": "https://images.kiwi.com/airlines/64/IRCITYLINK.png"
  },
  "Voyage Air": {
    "id": "VRG",
    "lcc": "1",
    "name": "Voyage Air",
    "logo": "https://images.kiwi.com/airlines/64/VRG.png"
  },
  "White Airways": {
    "id": "WI",
    "lcc": "0",
    "name": "White Airways",
    "logo": "https://images.kiwi.com/airlines/64/WI.png"
  },
  "Air Iceland Connect": {
    "id": "NY",
    "lcc": "1",
    "name": "Air Iceland Connect",
    "logo": "https://images.kiwi.com/airlines/64/NY.png"
  },
  "Airlink (SAA)": {
    "id": "4Z",
    "lcc": "0",
    "name": "Airlink (SAA)",
    "logo": "https://images.kiwi.com/airlines/64/4Z.png"
  },
  "Red Jet Andes": {
    "id": "PT",
    "lcc": "0",
    "name": "Red Jet Andes",
    "logo": "https://images.kiwi.com/airlines/64/PT.png"
  },
  "Eastar Jet": {
    "id": "ZE",
    "lcc": "1",
    "name": "Eastar Jet",
    "logo": "https://images.kiwi.com/airlines/64/ZE.png"
  },
  "SilkAir": {
    "id": "MI",
    "lcc": "0",
    "name": "SilkAir",
    "logo": "https://images.kiwi.com/airlines/64/MI.png"
  },
  "Qatar Airways": {
    "id": "QR",
    "lcc": "0",
    "name": "Qatar Airways",
    "logo": "https://images.kiwi.com/airlines/64/QR.png"
  },
  "First Air": {
    "id": "7F",
    "lcc": "0",
    "name": "First Air",
    "logo": "https://images.kiwi.com/airlines/64/7F.png"
  },
  "Niki": {
    "id": "HG",
    "lcc": "0",
    "name": "Niki",
    "logo": "https://images.kiwi.com/airlines/64/HG.png"
  },
  "Royal Jordanian": {
    "id": "RJ",
    "lcc": "0",
    "name": "Royal Jordanian",
    "logo": "https://images.kiwi.com/airlines/64/RJ.png"
  },
  "VIM Airlines": {
    "id": "NN",
    "lcc": "1",
    "name": "VIM Airlines",
    "logo": "https://images.kiwi.com/airlines/64/NN.png"
  },
  "SunExpress": {
    "id": "XG",
    "lcc": "0",
    "name": "SunExpress",
    "logo": "https://images.kiwi.com/airlines/64/XG.png"
  },
  "Air Moldova": {
    "id": "9U",
    "lcc": "0",
    "name": "Air Moldova",
    "logo": "https://images.kiwi.com/airlines/64/9U.png"
  },
  "Canary Fly": {
    "id": "PM",
    "lcc": "0",
    "name": "Canary Fly",
    "logo": "https://images.kiwi.com/airlines/64/PM.png"
  },
  "Jetstar Japan": {
    "id": "GK",
    "lcc": "0",
    "name": "Jetstar Japan",
    "logo": "https://images.kiwi.com/airlines/64/GK.png"
  },
  "Nam Air": {
    "id": "IN",
    "lcc": "0",
    "name": "Nam Air",
    "logo": "https://images.kiwi.com/airlines/64/IN.png"
  },
  "SkyWest": {
    "id": "OO",
    "lcc": "0",
    "name": "SkyWest",
    "logo": "https://images.kiwi.com/airlines/64/OO.png"
  },
  "AirAsia Japan": {
    "id": "DJ",
    "lcc": "1",
    "name": "AirAsia Japan",
    "logo": "https://images.kiwi.com/airlines/64/DJ.png"
  },
  "Olympic Air": {
    "id": "OA",
    "lcc": "0",
    "name": "Olympic Air",
    "logo": "https://images.kiwi.com/airlines/64/OA.png"
  },
  "Air Manas": {
    "id": "ZM",
    "lcc": "0",
    "name": "Air Manas",
    "logo": "https://images.kiwi.com/airlines/64/ZM.png"
  },
  "Hahn Air": {
    "id": "H1",
    "lcc": "0",
    "name": "Hahn Air",
    "logo": "https://images.kiwi.com/airlines/64/H1.png"
  },
  "Jet2": {
    "id": "LS",
    "lcc": "1",
    "name": "Jet2",
    "logo": "https://images.kiwi.com/airlines/64/LS.png"
  },
  "Air Indus": {
    "id": "PP",
    "lcc": "0",
    "name": "Air Indus",
    "logo": "https://images.kiwi.com/airlines/64/PP.png"
  },
  "Izhavia": {
    "id": "I8",
    "lcc": "0",
    "name": "Izhavia",
    "logo": "https://images.kiwi.com/airlines/64/I8.png"
  },
  "Cargojet Airways": {
    "id": "W8",
    "lcc": "0",
    "name": "Cargojet Airways",
    "logo": "https://images.kiwi.com/airlines/64/W8.png"
  },
  "Titan Airways": {
    "id": "ZT",
    "lcc": "0",
    "name": "Titan Airways",
    "logo": "https://images.kiwi.com/airlines/64/ZT.png"
  },
  "Belair": {
    "id": "4T",
    "lcc": "0",
    "name": "Belair",
    "logo": "https://images.kiwi.com/airlines/64/4T.png"
  },
  "Bamboo Airways": {
    "id": "QH",
    "lcc": "0",
    "name": "Bamboo Airways",
    "logo": "https://images.kiwi.com/airlines/64/QH.png"
  },
  "LEVEL operated by Iberia": {
    "id": "I0",
    "lcc": "None",
    "name": "LEVEL operated by Iberia",
    "logo": "https://images.kiwi.com/airlines/64/I0.png"
  },
  "Komiaviatrans": {
    "id": "KO",
    "lcc": "0",
    "name": "Komiaviatrans",
    "logo": "https://images.kiwi.com/airlines/64/KO.png"
  },
  "LEOEXPRESS Train": {
    "id": "LEOEXT",
    "lcc": "None",
    "name": "LEOEXPRESS Train",
    "logo": "https://images.kiwi.com/airlines/64/LEOEXT.png"
  },
  "Air Saint Pierre": {
    "id": "PJ",
    "lcc": "0",
    "name": "Air Saint Pierre",
    "logo": "https://images.kiwi.com/airlines/64/PJ.png"
  },
  "Star Peru": {
    "id": "2I",
    "lcc": "1",
    "name": "Star Peru",
    "logo": "https://images.kiwi.com/airlines/64/2I.png"
  },
  "Qazaq Air": {
    "id": "IQ",
    "lcc": "0",
    "name": "Qazaq Air",
    "logo": "https://images.kiwi.com/airlines/64/IQ.png"
  },
  "Med-View Airline": {
    "id": "VL",
    "lcc": "0",
    "name": "Med-View Airline",
    "logo": "https://images.kiwi.com/airlines/64/VL.png"
  },
  "LEOEXPRESS Bus": {
    "id": "LEOEXB",
    "lcc": "None",
    "name": "LEOEXPRESS Bus",
    "logo": "https://images.kiwi.com/airlines/64/LEOEXB.png"
  },
  "British Mediterranean Airways": {
    "id": "KJ",
    "lcc": "0",
    "name": "British Mediterranean Airways",
    "logo": "https://images.kiwi.com/airlines/64/KJ.png"
  },
  "Horizon Airlines": {
    "id": "BN",
    "lcc": "0",
    "name": "Horizon Airlines",
    "logo": "https://images.kiwi.com/airlines/64/BN.png"
  },
  "Luxair": {
    "id": "LG",
    "lcc": "0",
    "name": "Luxair",
    "logo": "https://images.kiwi.com/airlines/64/LG.png"
  },
  "Orenburzhye Airline": {
    "id": "O7",
    "lcc": "0",
    "name": "Orenburzhye Airline",
    "logo": "https://images.kiwi.com/airlines/64/O7.png"
  },
  "TAMPA": {
    "id": "QT",
    "lcc": "0",
    "name": "TAMPA",
    "logo": "https://images.kiwi.com/airlines/64/QT.png"
  },
  "Nordic Regional Airlines": {
    "id": "N7",
    "lcc": "0",
    "name": "Nordic Regional Airlines",
    "logo": "https://images.kiwi.com/airlines/64/N7.png"
  },
  "Fiumicino express": {
    "id": "FIUMICINO",
    "lcc": "None",
    "name": "Fiumicino express",
    "logo": "https://images.kiwi.com/airlines/64/FIUMICINO.png"
  },
  "Jubba Airways": {
    "id": "3J",
    "lcc": "0",
    "name": "Jubba Airways",
    "logo": "https://images.kiwi.com/airlines/64/3J.png"
  },
  "Marino Bus": {
    "id": "MARINO",
    "lcc": "0",
    "name": "Marino Bus",
    "logo": "https://images.kiwi.com/airlines/64/MARINO.png"
  },
  "Aviabus": {
    "id": "U1",
    "lcc": "0",
    "name": "Aviabus",
    "logo": "https://images.kiwi.com/airlines/64/U1.png"
  },
  "Copenhagen Express": {
    "id": "0X",
    "lcc": "0",
    "name": "Copenhagen Express",
    "logo": "https://images.kiwi.com/airlines/64/0X.png"
  },
  "Air Choice One": {
    "id": "3E",
    "lcc": "0",
    "name": "Air Choice One",
    "logo": "https://images.kiwi.com/airlines/64/3E.png"
  },
  "Air Mauritius": {
    "id": "MK",
    "lcc": "0",
    "name": "Air Mauritius",
    "logo": "https://images.kiwi.com/airlines/64/MK.png"
  },
  "AlbaStar": {
    "id": "AP",
    "lcc": "0",
    "name": "AlbaStar",
    "logo": "https://images.kiwi.com/airlines/64/AP.png"
  },
  "Terravision": {
    "id": "TERAVSN",
    "lcc": "None",
    "name": "Terravision",
    "logo": "https://images.kiwi.com/airlines/64/TERAVSN.png"
  },
  "China Eastern Airlines": {
    "id": "MU",
    "lcc": "0",
    "name": "China Eastern Airlines",
    "logo": "https://images.kiwi.com/airlines/64/MU.png"
  },
  "Ekspres transfer": {
    "id": "EXPRTRANS",
    "lcc": "None",
    "name": "Ekspres transfer",
    "logo": "https://images.kiwi.com/airlines/64/EXPRTRANS.png"
  },
  "Sylt Air": {
    "id": "7E",
    "lcc": "0",
    "name": "Sylt Air",
    "logo": "https://images.kiwi.com/airlines/64/7E.png"
  },
  "Alitalia Cityliner": {
    "id": "CT",
    "lcc": "0",
    "name": "Alitalia Cityliner",
    "logo": "https://images.kiwi.com/airlines/64/CT.png"
  },
  "Overland Airways": {
    "id": "OF",
    "lcc": "0",
    "name": "Overland Airways",
    "logo": "https://images.kiwi.com/airlines/64/OF.png"
  },
  "Red Wings": {
    "id": "WZ",
    "lcc": "1",
    "name": "Red Wings",
    "logo": "https://images.kiwi.com/airlines/64/WZ.png"
  },
  "Leeward Islands Air Transport": {
    "id": "LI",
    "lcc": "0",
    "name": "Leeward Islands Air Transport",
    "logo": "https://images.kiwi.com/airlines/64/LI.png"
  },
  "Shenzhen Airlines": {
    "id": "ZH",
    "lcc": "0",
    "name": "Shenzhen Airlines",
    "logo": "https://images.kiwi.com/airlines/64/ZH.png"
  },
  "Onur Air": {
    "id": "8Q",
    "lcc": "1",
    "name": "Onur Air",
    "logo": "https://images.kiwi.com/airlines/64/8Q.png"
  },
  "Nesma Air": {
    "id": "NA",
    "lcc": "0",
    "name": "Nesma Air",
    "logo": "https://images.kiwi.com/airlines/64/NA.png"
  },
  "Auric Air": {
    "id": "UI",
    "lcc": "0",
    "name": "Auric Air",
    "logo": "https://images.kiwi.com/airlines/64/UI.png"
  },
  "Pakistan International Airlines": {
    "id": "PK",
    "lcc": "0",
    "name": "Pakistan International Airlines",
    "logo": "https://images.kiwi.com/airlines/64/PK.png"
  },
  "Aer Lingus": {
    "id": "EI",
    "lcc": "1",
    "name": "Aer Lingus",
    "logo": "https://images.kiwi.com/airlines/64/EI.png"
  },
  "LATAM Peru": {
    "id": "LP",
    "lcc": "0",
    "name": "LATAM Peru",
    "logo": "https://images.kiwi.com/airlines/64/LP.png"
  },
  "TUS Airways": {
    "id": "U8",
    "lcc": "0",
    "name": "TUS Airways",
    "logo": "https://images.kiwi.com/airlines/64/U8.png"
  },
  "Air Tanzania": {
    "id": "TC",
    "lcc": "0",
    "name": "Air Tanzania",
    "logo": "https://images.kiwi.com/airlines/64/TC.png"
  },
  "Air Arabia Egypt": {
    "id": "E5",
    "lcc": "0",
    "name": "Air Arabia Egypt",
    "logo": "https://images.kiwi.com/airlines/64/E5.png"
  },
  "Swoop": {
    "id": "WO",
    "lcc": "0",
    "name": "Swoop",
    "logo": "https://images.kiwi.com/airlines/64/WO.png"
  },
  "Atlantic Airways": {
    "id": "RC",
    "lcc": "0",
    "name": "Atlantic Airways",
    "logo": "https://images.kiwi.com/airlines/64/RC.png"
  },
  "HOP!": {
    "id": "A5",
    "lcc": "1",
    "name": "HOP!",
    "logo": "https://images.kiwi.com/airlines/64/A5.png"
  },
  "Air Bangladesh": {
    "id": "B9",
    "lcc": "0",
    "name": "Air Bangladesh",
    "logo": "https://images.kiwi.com/airlines/64/B9.png"
  },
  "Atlas Air": {
    "id": "5Y",
    "lcc": "0",
    "name": "Atlas Air",
    "logo": "https://images.kiwi.com/airlines/64/5Y.png"
  },
  "Air Wales": {
    "id": "6G",
    "lcc": "0",
    "name": "Air Wales",
    "logo": "https://images.kiwi.com/airlines/64/6G.png"
  },
  "Asian Spirit": {
    "id": "6K",
    "lcc": "0",
    "name": "Asian Spirit",
    "logo": "https://images.kiwi.com/airlines/64/6K.png"
  },
  "Aserca Airlines": {
    "id": "R7",
    "lcc": "0",
    "name": "Aserca Airlines",
    "logo": "https://images.kiwi.com/airlines/64/R7.png"
  },
  "Air Ivoire": {
    "id": "VU",
    "lcc": "0",
    "name": "Air Ivoire",
    "logo": "https://images.kiwi.com/airlines/64/VU.png"
  },
  "Air Zimbabwe": {
    "id": "UM",
    "lcc": "0",
    "name": "Air Zimbabwe",
    "logo": "https://images.kiwi.com/airlines/64/UM.png"
  },
  "Air Madrid": {
    "id": "NM",
    "lcc": "0",
    "name": "Air Madrid",
    "logo": "https://images.kiwi.com/airlines/64/NM.png"
  },
  "Fiji Airways": {
    "id": "FJ",
    "lcc": "0",
    "name": "Fiji Airways",
    "logo": "https://images.kiwi.com/airlines/64/FJ.png"
  },
  "Air Koryo": {
    "id": "JS",
    "lcc": "0",
    "name": "Air Koryo",
    "logo": "https://images.kiwi.com/airlines/64/JS.png"
  },
  "Air Madagascar": {
    "id": "MD",
    "lcc": "0",
    "name": "Air Madagascar",
    "logo": "https://images.kiwi.com/airlines/64/MD.png"
  },
  "Astair": {
    "id": "8D",
    "lcc": "0",
    "name": "Astair",
    "logo": "https://images.kiwi.com/airlines/64/8D.png"
  },
  "Aeropelican Air Services": {
    "id": "OT",
    "lcc": "0",
    "name": "Aeropelican Air Services",
    "logo": "https://images.kiwi.com/airlines/64/OT.png"
  },
  "Stobart Air": {
    "id": "RE",
    "lcc": "0",
    "name": "Stobart Air",
    "logo": "https://images.kiwi.com/airlines/64/RE.png"
  },
  "Aerosur": {
    "id": "5L",
    "lcc": "0",
    "name": "Aerosur",
    "logo": "https://images.kiwi.com/airlines/64/5L.png"
  },
  "Avient Aviation": {
    "id": "Z3",
    "lcc": "0",
    "name": "Avient Aviation",
    "logo": "https://images.kiwi.com/airlines/64/Z3.png"
  },
  "Avialeasing Aviation Company": {
    "id": "EC",
    "lcc": "0",
    "name": "Avialeasing Aviation Company",
    "logo": "https://images.kiwi.com/airlines/64/EC.png"
  },
  "Regional Express": {
    "id": "ZL",
    "lcc": "1",
    "name": "Regional Express",
    "logo": "https://images.kiwi.com/airlines/64/ZL.png"
  },
  "Berjaya Air": {
    "id": "J8",
    "lcc": "0",
    "name": "Berjaya Air",
    "logo": "https://images.kiwi.com/airlines/64/J8.png"
  },
  "IrAero": {
    "id": "IO",
    "lcc": "1",
    "name": "IrAero",
    "logo": "https://images.kiwi.com/airlines/64/IO.png"
  },
  "Alaska Airlines": {
    "id": "AS",
    "lcc": "0",
    "name": "Alaska Airlines",
    "logo": "https://images.kiwi.com/airlines/64/AS.png"
  },
  "Star Flyer": {
    "id": "7G",
    "lcc": "1",
    "name": "Star Flyer",
    "logo": "https://images.kiwi.com/airlines/64/7G.png"
  },
  "Helvetic Airways": {
    "id": "2L",
    "lcc": "0",
    "name": "Helvetic Airways",
    "logo": "https://images.kiwi.com/airlines/64/2L.png"
  },
  "Citylink": {
    "id": "CITYLINK",
    "lcc": "None",
    "name": "Citylink",
    "logo": "https://images.kiwi.com/airlines/64/CITYLINK.png"
  },
  "Bulgaria Air": {
    "id": "FB",
    "lcc": "0",
    "name": "Bulgaria Air",
    "logo": "https://images.kiwi.com/airlines/64/FB.png"
  },
  "Orchid Airlines": {
    "id": "OI",
    "lcc": "0",
    "name": "Orchid Airlines",
    "logo": "https://images.kiwi.com/airlines/64/OI.png"
  },
  "Appenino shuttle ": {
    "id": "APPENINO",
    "lcc": "None",
    "name": "Appenino shuttle ",
    "logo": "https://images.kiwi.com/airlines/64/APPENINO.png"
  },
  "Pegas Fly": {
    "id": "IK",
    "lcc": "0",
    "name": "Pegas Fly",
    "logo": "https://images.kiwi.com/airlines/64/IK.png"
  },
  "Level": {
    "id": "LV",
    "lcc": "0",
    "name": "Level",
    "logo": "https://images.kiwi.com/airlines/64/LV.png"
  },
  "Cimber Air": {
    "id": "QI",
    "lcc": "0",
    "name": "Cimber Air",
    "logo": "https://images.kiwi.com/airlines/64/QI.png"
  },
  "Air Canada": {
    "id": "AC",
    "lcc": "0",
    "name": "Air Canada",
    "logo": "https://images.kiwi.com/airlines/64/AC.png"
  },
  "LAN Express": {
    "id": "LU",
    "lcc": "0",
    "name": "LAN Express",
    "logo": "https://images.kiwi.com/airlines/64/LU.png"
  },
  "Sun Country Airlines": {
    "id": "SY",
    "lcc": "1",
    "name": "Sun Country Airlines",
    "logo": "https://images.kiwi.com/airlines/64/SY.png"
  },
  "CityJet": {
    "id": "WX",
    "lcc": "0",
    "name": "CityJet",
    "logo": "https://images.kiwi.com/airlines/64/WX.png"
  },
  "Cambodia Bayon Airlines": {
    "id": "BD",
    "lcc": "0",
    "name": "Cambodia Bayon Airlines",
    "logo": "https://images.kiwi.com/airlines/64/BD.png"
  },
  "EgyptAir": {
    "id": "MS",
    "lcc": "0",
    "name": "EgyptAir",
    "logo": "https://images.kiwi.com/airlines/64/MS.png"
  },
  "AirAsia India": {
    "id": "I5",
    "lcc": "0",
    "name": "AirAsia India",
    "logo": "https://images.kiwi.com/airlines/64/I5.png"
  },
  "Porter Airlines": {
    "id": "PD",
    "lcc": "1",
    "name": "Porter Airlines",
    "logo": "https://images.kiwi.com/airlines/64/PD.png"
  },
  "Regional Air Services": {
    "id": "8N",
    "lcc": "0",
    "name": "Regional Air Services",
    "logo": "https://images.kiwi.com/airlines/64/8N.png"
  },
  "Ukraine International Airlines": {
    "id": "PS",
    "lcc": "0",
    "name": "Ukraine International Airlines",
    "logo": "https://images.kiwi.com/airlines/64/PS.png"
  },
  "Rossiya-Russian Airlines": {
    "id": "FV",
    "lcc": "0",
    "name": "Rossiya-Russian Airlines",
    "logo": "https://images.kiwi.com/airlines/64/FV.png"
  },
  "Cambodia Airways": {
    "id": "KR",
    "lcc": "0",
    "name": "Cambodia Airways",
    "logo": "https://images.kiwi.com/airlines/64/KR.png"
  },
  "Wizz Air UK": {
    "id": "W9",
    "lcc": "0",
    "name": "Wizz Air UK",
    "logo": "https://images.kiwi.com/airlines/64/W9.png"
  },
  "Avianca Ecuador": {
    "id": "2K",
    "lcc": "0",
    "name": "Avianca Ecuador",
    "logo": "https://images.kiwi.com/airlines/64/2K.png"
  },
  "Air Arabia Maroc": {
    "id": "3O",
    "lcc": "0",
    "name": "Air Arabia Maroc",
    "logo": "https://images.kiwi.com/airlines/64/3O.png"
  },
  "Avianca Costa Rica": {
    "id": "LR",
    "lcc": "0",
    "name": "Avianca Costa Rica",
    "logo": "https://images.kiwi.com/airlines/64/LR.png"
  },
  "LATAM Brasil": {
    "id": "JJ",
    "lcc": "0",
    "name": "LATAM Brasil",
    "logo": "https://images.kiwi.com/airlines/64/JJ.png"
  },
  "Openskies": {
    "id": "OPENSKIES",
    "lcc": "1",
    "name": "Openskies",
    "logo": "https://images.kiwi.com/airlines/64/OPENSKIES.png"
  },
  "Air Vanuatu": {
    "id": "NF",
    "lcc": "0",
    "name": "Air Vanuatu",
    "logo": "https://images.kiwi.com/airlines/64/NF.png"
  },
  "Tianjin Airlines": {
    "id": "GS",
    "lcc": "0",
    "name": "Tianjin Airlines",
    "logo": "https://images.kiwi.com/airlines/64/GS.png"
  },
  "Air Dolomiti": {
    "id": "EN",
    "lcc": "0",
    "name": "Air Dolomiti",
    "logo": "https://images.kiwi.com/airlines/64/EN.png"
  },
  "Aero Contractors": {
    "id": "AJ",
    "lcc": "0",
    "name": "Aero Contractors",
    "logo": "https://images.kiwi.com/airlines/64/AJ.png"
  },
  "British International Helicopters": {
    "id": "BS",
    "lcc": "0",
    "name": "British International Helicopters",
    "logo": "https://images.kiwi.com/airlines/64/BS.png"
  },
  "Bemidji Airlines": {
    "id": "CH",
    "lcc": "0",
    "name": "Bemidji Airlines",
    "logo": "https://images.kiwi.com/airlines/64/CH.png"
  },
  "Bering Air": {
    "id": "8E",
    "lcc": "0",
    "name": "Bering Air",
    "logo": "https://images.kiwi.com/airlines/64/8E.png"
  },
  "Renfe": {
    "id": "4R",
    "lcc": "0",
    "name": "Renfe",
    "logo": "https://images.kiwi.com/airlines/64/4R.png"
  },
  "Far Eastern Air Transport": {
    "id": "FE",
    "lcc": "None",
    "name": "Far Eastern Air Transport",
    "logo": "https://images.kiwi.com/airlines/64/FE.png"
  },
  "Coastal Air": {
    "id": "DQ",
    "lcc": "0",
    "name": "Coastal Air",
    "logo": "https://images.kiwi.com/airlines/64/DQ.png"
  },
  "Consorcio Aviaxsa": {
    "id": "6A",
    "lcc": "0",
    "name": "Consorcio Aviaxsa",
    "logo": "https://images.kiwi.com/airlines/64/6A.png"
  },
  "Corsair International": {
    "id": "SS",
    "lcc": "0",
    "name": "Corsair International",
    "logo": "https://images.kiwi.com/airlines/64/SS.png"
  },
  "Avia Traffic Airline": {
    "id": "YK",
    "lcc": "0",
    "name": "Avia Traffic Airline",
    "logo": "https://images.kiwi.com/airlines/64/YK.png"
  },
  "Dominicana de Aviaci": {
    "id": "DO",
    "lcc": "0",
    "name": "Dominicana de Aviaci",
    "logo": "https://images.kiwi.com/airlines/64/DO.png"
  },
  "Domodedovo Airlines": {
    "id": "E3",
    "lcc": "0",
    "name": "Domodedovo Airlines",
    "logo": "https://images.kiwi.com/airlines/64/E3.png"
  },
  "Eagle Air": {
    "id": "H7",
    "lcc": "0",
    "name": "Eagle Air",
    "logo": "https://images.kiwi.com/airlines/64/H7.png"
  },
  "Eastern Airways": {
    "id": "T3",
    "lcc": "0",
    "name": "Eastern Airways",
    "logo": "https://images.kiwi.com/airlines/64/T3.png"
  },
  "El-Buraq Air Transport": {
    "id": "UZ",
    "lcc": "0",
    "name": "El-Buraq Air Transport",
    "logo": "https://images.kiwi.com/airlines/64/UZ.png"
  },
  "Eritrean Airlines": {
    "id": "B8",
    "lcc": "0",
    "name": "Eritrean Airlines",
    "logo": "https://images.kiwi.com/airlines/64/B8.png"
  },
  "European Air Express": {
    "id": "EA",
    "lcc": "0",
    "name": "European Air Express",
    "logo": "https://images.kiwi.com/airlines/64/EA.png"
  },
  "Gulf Air Bahrain": {
    "id": "GF",
    "lcc": "0",
    "name": "Gulf Air Bahrain",
    "logo": "https://images.kiwi.com/airlines/64/GF.png"
  },
  "Air Caledonie": {
    "id": "TY",
    "lcc": "0",
    "name": "Air Caledonie",
    "logo": "https://images.kiwi.com/airlines/64/TY.png"
  },
  "Line Blue": {
    "id": "L8",
    "lcc": "0",
    "name": "Line Blue",
    "logo": "https://images.kiwi.com/airlines/64/L8.png"
  },
  "LEOEXPRESS Minibus": {
    "id": "LEOEXM",
    "lcc": "0",
    "name": "LEOEXPRESS Minibus",
    "logo": "https://images.kiwi.com/airlines/64/LEOEXM.png"
  },
  "Transportes Aéreos Guatemaltecos": {
    "id": "5U",
    "lcc": "0",
    "name": "Transportes Aéreos Guatemaltecos",
    "logo": "https://images.kiwi.com/airlines/64/5U.png"
  },
  "Small Planet Airline": {
    "id": "P7",
    "lcc": "0",
    "name": "Small Planet Airline",
    "logo": "https://images.kiwi.com/airlines/64/P7.png"
  },
  "MyAir": {
    "id": "8I",
    "lcc": "0",
    "name": "MyAir",
    "logo": "https://images.kiwi.com/airlines/64/8I.png"
  },
  "Air Corsica": {
    "id": "XK",
    "lcc": "0",
    "name": "Air Corsica",
    "logo": "https://images.kiwi.com/airlines/64/XK.png"
  },
  "Ibex Airlines": {
    "id": "FW",
    "lcc": "0",
    "name": "Ibex Airlines",
    "logo": "https://images.kiwi.com/airlines/64/FW.png"
  },
  "Int'Air Iles": {
    "id": "I7",
    "lcc": "0",
    "name": "Int'Air Iles",
    "logo": "https://images.kiwi.com/airlines/64/I7.png"
  },
  "LOT Polish Airlines": {
    "id": "LO",
    "lcc": "0",
    "name": "LOT Polish Airlines",
    "logo": "https://images.kiwi.com/airlines/64/LO.png"
  },
  "Belavia Belarusian Airlines": {
    "id": "B2",
    "lcc": "0",
    "name": "Belavia Belarusian Airlines",
    "logo": "https://images.kiwi.com/airlines/64/B2.png"
  },
  "TruJet": {
    "id": "2T",
    "lcc": "0",
    "name": "TruJet",
    "logo": "https://images.kiwi.com/airlines/64/2T.png"
  },
  "Air Transat": {
    "id": "TS",
    "lcc": "0",
    "name": "Air Transat",
    "logo": "https://images.kiwi.com/airlines/64/TS.png"
  },
  "Croatia Airlines": {
    "id": "OU",
    "lcc": "0",
    "name": "Croatia Airlines",
    "logo": "https://images.kiwi.com/airlines/64/OU.png"
  },
  "Virgin America": {
    "id": "VX",
    "lcc": "1",
    "name": "Virgin America",
    "logo": "https://images.kiwi.com/airlines/64/VX.png"
  },
  "Severstal Air Company": {
    "id": "D2",
    "lcc": "1",
    "name": "Severstal Air Company",
    "logo": "https://images.kiwi.com/airlines/64/D2.png"
  },
  "Air Belgium": {
    "id": "KF",
    "lcc": "0",
    "name": "Air Belgium",
    "logo": "https://images.kiwi.com/airlines/64/KF.png"
  },
  "JOON": {
    "id": "JN",
    "lcc": "0",
    "name": "JOON",
    "logo": "https://images.kiwi.com/airlines/64/JN.png"
  },
  "ANA Wings": {
    "id": "EH",
    "lcc": "0",
    "name": "ANA Wings",
    "logo": "https://images.kiwi.com/airlines/64/EH.png"
  },
  "Indonesia AirAsia X": {
    "id": "XT",
    "lcc": "0",
    "name": "Indonesia AirAsia X",
    "logo": "https://images.kiwi.com/airlines/64/XT.png"
  },
  "Avianca El Salvador": {
    "id": "TA",
    "lcc": "0",
    "name": "Avianca El Salvador",
    "logo": "https://images.kiwi.com/airlines/64/TA.png"
  },
  "Hex'Air": {
    "id": "UD",
    "lcc": "0",
    "name": "Hex'Air",
    "logo": "https://images.kiwi.com/airlines/64/UD.png"
  },
  "Sansa Air": {
    "id": "RZ",
    "lcc": "0",
    "name": "Sansa Air",
    "logo": "https://images.kiwi.com/airlines/64/RZ.png"
  },
  "Gazpromavia": {
    "id": "4G",
    "lcc": "0",
    "name": "Gazpromavia",
    "logo": "https://images.kiwi.com/airlines/64/4G.png"
  },
  "Ghana International Airlines": {
    "id": "G0",
    "lcc": "0",
    "name": "Ghana International Airlines",
    "logo": "https://images.kiwi.com/airlines/64/G0.png"
  },
  "Indian Airlines": {
    "id": "IC",
    "lcc": "0",
    "name": "Indian Airlines",
    "logo": "https://images.kiwi.com/airlines/64/IC.png"
  },
  "Interair South Africa": {
    "id": "D6",
    "lcc": "0",
    "name": "Interair South Africa",
    "logo": "https://images.kiwi.com/airlines/64/D6.png"
  },
  "Kavminvodyavia": {
    "id": "KV",
    "lcc": "0",
    "name": "Kavminvodyavia",
    "logo": "https://images.kiwi.com/airlines/64/KV.png"
  },
  "Kenmore Air": {
    "id": "M5",
    "lcc": "0",
    "name": "Kenmore Air",
    "logo": "https://images.kiwi.com/airlines/64/M5.png"
  },
  "Kish Air": {
    "id": "Y9",
    "lcc": "0",
    "name": "Kish Air",
    "logo": "https://images.kiwi.com/airlines/64/Y9.png"
  },
  "Kogalymavia Air Company": {
    "id": "7K",
    "lcc": "0",
    "name": "Kogalymavia Air Company",
    "logo": "https://images.kiwi.com/airlines/64/7K.png"
  },
  "Kuban Airlines": {
    "id": "GW",
    "lcc": "0",
    "name": "Kuban Airlines",
    "logo": "https://images.kiwi.com/airlines/64/GW.png"
  },
  "Lauda Air": {
    "id": "NG",
    "lcc": "0",
    "name": "Lauda Air",
    "logo": "https://images.kiwi.com/airlines/64/NG.png"
  },
  "Regional sky": {
    "id": "4P",
    "lcc": "0",
    "name": "Regional sky",
    "logo": "https://images.kiwi.com/airlines/64/4P.png"
  },
  "Linear Air": {
    "id": "O2",
    "lcc": "0",
    "name": "Linear Air",
    "logo": "https://images.kiwi.com/airlines/64/O2.png"
  },
  "Libyan Arab Airlines": {
    "id": "LN",
    "lcc": "0",
    "name": "Libyan Arab Airlines",
    "logo": "https://images.kiwi.com/airlines/64/LN.png"
  },
  "Martinair": {
    "id": "MP",
    "lcc": "0",
    "name": "Martinair",
    "logo": "https://images.kiwi.com/airlines/64/MP.png"
  },
  "Merpati Nusantara Airlines": {
    "id": "MZ",
    "lcc": "0",
    "name": "Merpati Nusantara Airlines",
    "logo": "https://images.kiwi.com/airlines/64/MZ.png"
  },
  "Mesa Airlines": {
    "id": "YV",
    "lcc": "0",
    "name": "Mesa Airlines",
    "logo": "https://images.kiwi.com/airlines/64/YV.png"
  },
  "Mexicana de Aviaci": {
    "id": "MX",
    "lcc": "0",
    "name": "Mexicana de Aviaci",
    "logo": "https://images.kiwi.com/airlines/64/MX.png"
  },
  "Midwest Airlines (Egypt)": {
    "id": "MY",
    "lcc": "0",
    "name": "Midwest Airlines (Egypt)",
    "logo": "https://images.kiwi.com/airlines/64/MY.png"
  },
  "Maya Island Air": {
    "id": "2M",
    "lcc": "0",
    "name": "Maya Island Air",
    "logo": "https://images.kiwi.com/airlines/64/2M.png"
  },
  "Moskovia Airlines": {
    "id": "3R",
    "lcc": "0",
    "name": "Moskovia Airlines",
    "logo": "https://images.kiwi.com/airlines/64/3R.png"
  },
  "Motor Sich": {
    "id": "M9",
    "lcc": "0",
    "name": "Motor Sich",
    "logo": "https://images.kiwi.com/airlines/64/M9.png"
  },
  "National Jet Systems": {
    "id": "NC",
    "lcc": "0",
    "name": "National Jet Systems",
    "logo": "https://images.kiwi.com/airlines/64/NC.png"
  },
  "Royal Falcon": {
    "id": "RL",
    "lcc": "0",
    "name": "Royal Falcon",
    "logo": "https://images.kiwi.com/airlines/64/RL.png"
  },
  "Baikotovitchestrian Airlines ": {
    "id": "BU",
    "lcc": "0",
    "name": "Baikotovitchestrian Airlines ",
    "logo": "https://images.kiwi.com/airlines/64/BU.png"
  },
  "Eco Jet": {
    "id": "8J",
    "lcc": "0",
    "name": "Eco Jet",
    "logo": "https://images.kiwi.com/airlines/64/8J.png"
  },
  "Lufthansa express bus": {
    "id": "LUFTHBUS",
    "lcc": "None",
    "name": "Lufthansa express bus",
    "logo": "https://images.kiwi.com/airlines/64/LUFTHBUS.png"
  },
  "Polar Airlines": {
    "id": "PO",
    "lcc": "0",
    "name": "Polar Airlines",
    "logo": "https://images.kiwi.com/airlines/64/PO.png"
  },
  "AccesRail": {
    "id": "9B",
    "lcc": "0",
    "name": "AccesRail",
    "logo": "https://images.kiwi.com/airlines/64/9B.png"
  },
  "Air Italy": {
    "id": "IG",
    "lcc": "1",
    "name": "Air Italy",
    "logo": "https://images.kiwi.com/airlines/64/IG.png"
  },
  "EST Lorek": {
    "id": "ESTLOREK",
    "lcc": "None",
    "name": "EST Lorek",
    "logo": "https://images.kiwi.com/airlines/64/ESTLOREK.png"
  },
  "Envoy Air as American Eagle": {
    "id": "MQ",
    "lcc": "0",
    "name": "Envoy Air as American Eagle",
    "logo": "https://images.kiwi.com/airlines/64/MQ.png"
  },
  "Slovak Lines ": {
    "id": "SLOVAKLNS",
    "lcc": "None",
    "name": "Slovak Lines ",
    "logo": "https://images.kiwi.com/airlines/64/SLOVAKLNS.png"
  },
  "Polynesian Airlines": {
    "id": "PH",
    "lcc": "0",
    "name": "Polynesian Airlines",
    "logo": "https://images.kiwi.com/airlines/64/PH.png"
  },
  "Etihad Airways": {
    "id": "EY",
    "lcc": "0",
    "name": "Etihad Airways",
    "logo": "https://images.kiwi.com/airlines/64/EY.png"
  },
  "Oman Air": {
    "id": "WY",
    "lcc": "0",
    "name": "Oman Air",
    "logo": "https://images.kiwi.com/airlines/64/WY.png"
  },
  "Somon Air": {
    "id": "SZ",
    "lcc": "0",
    "name": "Somon Air",
    "logo": "https://images.kiwi.com/airlines/64/SZ.png"
  },
  "Czech Airlines": {
    "id": "OK",
    "lcc": "0",
    "name": "Czech Airlines",
    "logo": "https://images.kiwi.com/airlines/64/OK.png"
  },
  "Georgian Airways": {
    "id": "A9",
    "lcc": "0",
    "name": "Georgian Airways",
    "logo": "https://images.kiwi.com/airlines/64/A9.png"
  },
  "Pacific Coastal Airline": {
    "id": "8P",
    "lcc": "0",
    "name": "Pacific Coastal Airline",
    "logo": "https://images.kiwi.com/airlines/64/8P.png"
  },
  "Finnair": {
    "id": "AY",
    "lcc": "0",
    "name": "Finnair",
    "logo": "https://images.kiwi.com/airlines/64/AY.png"
  },
  "Buddha Air": {
    "id": "U4",
    "lcc": "0",
    "name": "Buddha Air",
    "logo": "https://images.kiwi.com/airlines/64/U4.png"
  },
  "Kam Air": {
    "id": "RQ",
    "lcc": "0",
    "name": "Kam Air",
    "logo": "https://images.kiwi.com/airlines/64/RQ.png"
  },
  "Air Rarotonga": {
    "id": "GZ",
    "lcc": "0",
    "name": "Air Rarotonga",
    "logo": "https://images.kiwi.com/airlines/64/GZ.png"
  },
  "Republic Airline": {
    "id": "YX",
    "lcc": "0",
    "name": "Republic Airline",
    "logo": "https://images.kiwi.com/airlines/64/YX.png"
  },
  "GoJet Airlines": {
    "id": "G7",
    "lcc": "0",
    "name": "GoJet Airlines",
    "logo": "https://images.kiwi.com/airlines/64/G7.png"
  },
  "Nauru Air Corporation": {
    "id": "ON",
    "lcc": "0",
    "name": "Nauru Air Corporation",
    "logo": "https://images.kiwi.com/airlines/64/ON.png"
  },
  "Qeshm Air": {
    "id": "QB",
    "lcc": "0",
    "name": "Qeshm Air",
    "logo": "https://images.kiwi.com/airlines/64/QB.png"
  },
  "Volotea": {
    "id": "V7",
    "lcc": "1",
    "name": "Volotea",
    "logo": "https://images.kiwi.com/airlines/64/V7.png"
  },
  "Republic Express Airlines": {
    "id": "RH",
    "lcc": "0",
    "name": "Republic Express Airlines",
    "logo": "https://images.kiwi.com/airlines/64/RH.png"
  },
  "Tiara Air": {
    "id": "3P",
    "lcc": "0",
    "name": "Tiara Air",
    "logo": "https://images.kiwi.com/airlines/64/3P.png"
  },
  "Nepal Airlines": {
    "id": "RA",
    "lcc": "0",
    "name": "Nepal Airlines",
    "logo": "https://images.kiwi.com/airlines/64/RA.png"
  },
  "Korean Air": {
    "id": "KE",
    "lcc": "0",
    "name": "Korean Air",
    "logo": "https://images.kiwi.com/airlines/64/KE.png"
  },
  "PNG Air": {
    "id": "CG",
    "lcc": "0",
    "name": "PNG Air",
    "logo": "https://images.kiwi.com/airlines/64/CG.png"
  },
  "New England Airlines": {
    "id": "EJ",
    "lcc": "0",
    "name": "New England Airlines",
    "logo": "https://images.kiwi.com/airlines/64/EJ.png"
  },
  "Northern Dene Airways": {
    "id": "U7",
    "lcc": "0",
    "name": "Northern Dene Airways",
    "logo": "https://images.kiwi.com/airlines/64/U7.png"
  },
  "Northwestern Air": {
    "id": "J3",
    "lcc": "0",
    "name": "Northwestern Air",
    "logo": "https://images.kiwi.com/airlines/64/J3.png"
  },
  "Avianca Brazil": {
    "id": "O6",
    "lcc": "0",
    "name": "Avianca Brazil",
    "logo": "https://images.kiwi.com/airlines/64/O6.png"
  },
  "PAN Air": {
    "id": "PV",
    "lcc": "0",
    "name": "PAN Air",
    "logo": "https://images.kiwi.com/airlines/64/PV.png"
  },
  "Plus Ultra Lineas Aereas": {
    "id": "PU",
    "lcc": "0",
    "name": "Plus Ultra Lineas Aereas",
    "logo": "https://images.kiwi.com/airlines/64/PU.png"
  },
  "belleair": {
    "id": "LZ",
    "lcc": "0",
    "name": "belleair",
    "logo": "https://images.kiwi.com/airlines/64/LZ.png"
  },
  "Fuji Dream Airlines": {
    "id": "JH",
    "lcc": "0",
    "name": "Fuji Dream Airlines",
    "logo": "https://images.kiwi.com/airlines/64/JH.png"
  },
  "STP Airways": {
    "id": "8F",
    "lcc": "0",
    "name": "STP Airways",
    "logo": "https://images.kiwi.com/airlines/64/8F.png"
  },
  "Alliance Airlines": {
    "id": "QQ",
    "lcc": "0",
    "name": "Alliance Airlines",
    "logo": "https://images.kiwi.com/airlines/64/QQ.png"
  },
  "Kulula": {
    "id": "MN",
    "lcc": "1",
    "name": "Kulula",
    "logo": "https://images.kiwi.com/airlines/64/MN.png"
  },
  "Japan Transocean Air": {
    "id": "NU",
    "lcc": "0",
    "name": "Japan Transocean Air",
    "logo": "https://images.kiwi.com/airlines/64/NU.png"
  },
  "Emirates": {
    "id": "EK",
    "lcc": "0",
    "name": "Emirates",
    "logo": "https://images.kiwi.com/airlines/64/EK.png"
  },
  "Endeavor Air": {
    "id": "9E",
    "lcc": "0",
    "name": "Endeavor Air",
    "logo": "https://images.kiwi.com/airlines/64/9E.png"
  },
  "Andes Líneas Aéreas": {
    "id": "OY",
    "lcc": "0",
    "name": "Andes Líneas Aéreas",
    "logo": "https://images.kiwi.com/airlines/64/OY.png"
  },
  "Philippines AirAsia": {
    "id": "Z2",
    "lcc": "0",
    "name": "Philippines AirAsia",
    "logo": "https://images.kiwi.com/airlines/64/Z2.png"
  },
  "Seaborne Airlines": {
    "id": "BB",
    "lcc": "0",
    "name": "Seaborne Airlines",
    "logo": "https://images.kiwi.com/airlines/64/BB.png"
  },
  "Cathay Pacific": {
    "id": "CX",
    "lcc": "0",
    "name": "Cathay Pacific",
    "logo": "https://images.kiwi.com/airlines/64/CX.png"
  },
  "Czech Rail bus": {
    "id": "CZECHRAILB",
    "lcc": "None",
    "name": "Czech Rail bus",
    "logo": "https://images.kiwi.com/airlines/64/CZECHRAILB.png"
  },
  "Chair Airlines": {
    "id": "GM",
    "lcc": "0",
    "name": "Chair Airlines",
    "logo": "https://images.kiwi.com/airlines/64/GM.png"
  },
  "Badr Airlines": {
    "id": "J4",
    "lcc": "0",
    "name": "Badr Airlines",
    "logo": "https://images.kiwi.com/airlines/64/J4.png"
  },
  "LATAM Paraguay": {
    "id": "PZ",
    "lcc": "0",
    "name": "LATAM Paraguay",
    "logo": "https://images.kiwi.com/airlines/64/PZ.png"
  },
  "Okay Airways": {
    "id": "BK",
    "lcc": "0",
    "name": "Okay Airways",
    "logo": "https://images.kiwi.com/airlines/64/BK.png"
  },
  "Sibaviatrans": {
    "id": "5M",
    "lcc": "0",
    "name": "Sibaviatrans",
    "logo": "https://images.kiwi.com/airlines/64/5M.png"
  },
  "Sama Airlines": {
    "id": "ZS",
    "lcc": "0",
    "name": "Sama Airlines",
    "logo": "https://images.kiwi.com/airlines/64/ZS.png"
  },
  "FlyEgypt FT": {
    "id": "FT",
    "lcc": "0",
    "name": "FlyEgypt FT",
    "logo": "https://images.kiwi.com/airlines/64/FT.png"
  },
  "Servicios de Transportes A": {
    "id": "FS",
    "lcc": "0",
    "name": "Servicios de Transportes A",
    "logo": "https://images.kiwi.com/airlines/64/FS.png"
  },
  "Sudan Airways": {
    "id": "SD",
    "lcc": "0",
    "name": "Sudan Airways",
    "logo": "https://images.kiwi.com/airlines/64/SD.png"
  },
  "Syrian Arab Airlines": {
    "id": "RB",
    "lcc": "0",
    "name": "Syrian Arab Airlines",
    "logo": "https://images.kiwi.com/airlines/64/RB.png"
  },
  "Shuttle America": {
    "id": "S5",
    "lcc": "0",
    "name": "Shuttle America",
    "logo": "https://images.kiwi.com/airlines/64/S5.png"
  },
  "Thomas Cook Airlines": {
    "id": "MT",
    "lcc": "1",
    "name": "Thomas Cook Airlines",
    "logo": "https://images.kiwi.com/airlines/64/MT.png"
  },
  "TransAsia Airways": {
    "id": "GE",
    "lcc": "0",
    "name": "TransAsia Airways",
    "logo": "https://images.kiwi.com/airlines/64/GE.png"
  },
  "TACV": {
    "id": "VR",
    "lcc": "0",
    "name": "TACV",
    "logo": "https://images.kiwi.com/airlines/64/VR.png"
  },
  "Yangon Airways": {
    "id": "HK",
    "lcc": "0",
    "name": "Yangon Airways",
    "logo": "https://images.kiwi.com/airlines/64/HK.png"
  },
  "ExpressBus": {
    "id": "EXPRESSBUS",
    "lcc": "None",
    "name": "ExpressBus",
    "logo": "https://images.kiwi.com/airlines/64/EXPRESSBUS.png"
  },
  "Congo Express": {
    "id": "XZ",
    "lcc": "0",
    "name": "Congo Express",
    "logo": "https://images.kiwi.com/airlines/64/XZ.png"
  },
  "Allegiant Air": {
    "id": "G4",
    "lcc": "1",
    "name": "Allegiant Air",
    "logo": "https://images.kiwi.com/airlines/64/G4.png"
  },
  "TUI Airways": {
    "id": "BY",
    "lcc": "1",
    "name": "TUI Airways",
    "logo": "https://images.kiwi.com/airlines/64/BY.png"
  },
  "Yemenia": {
    "id": "IY",
    "lcc": "0",
    "name": "Yemenia",
    "logo": "https://images.kiwi.com/airlines/64/IY.png"
  },
  "Air Volga": {
    "id": "G6",
    "lcc": "0",
    "name": "Air Volga",
    "logo": "https://images.kiwi.com/airlines/64/G6.png"
  },
  "Maldivian": {
    "id": "Q2",
    "lcc": "0",
    "name": "Maldivian",
    "logo": "https://images.kiwi.com/airlines/64/Q2.png"
  },
  "Carnival Air Lines": {
    "id": "KW",
    "lcc": "0",
    "name": "Carnival Air Lines",
    "logo": "https://images.kiwi.com/airlines/64/KW.png"
  },
  "Sunrise Airways": {
    "id": "S6",
    "lcc": "0",
    "name": "Sunrise Airways",
    "logo": "https://images.kiwi.com/airlines/64/S6.png"
  },
  "Trans States Airlines": {
    "id": "AX",
    "lcc": "0",
    "name": "Trans States Airlines",
    "logo": "https://images.kiwi.com/airlines/64/AX.png"
  },
  "Turan Air": {
    "id": "3T",
    "lcc": "0",
    "name": "Turan Air",
    "logo": "https://images.kiwi.com/airlines/64/3T.png"
  },
  "USA3000 Airlines": {
    "id": "U5",
    "lcc": "0",
    "name": "USA3000 Airlines",
    "logo": "https://images.kiwi.com/airlines/64/U5.png"
  },
  "UM Airlines": {
    "id": "UF",
    "lcc": "0",
    "name": "UM Airlines",
    "logo": "https://images.kiwi.com/airlines/64/UF.png"
  },
  "US Airways": {
    "id": "US",
    "lcc": "0",
    "name": "US Airways",
    "logo": "https://images.kiwi.com/airlines/64/US.png"
  },
  "Tibet Airlines": {
    "id": "TV",
    "lcc": "0",
    "name": "Tibet Airlines",
    "logo": "https://images.kiwi.com/airlines/64/TV.png"
  },
  "Welcome Air": {
    "id": "2W",
    "lcc": "0",
    "name": "Welcome Air",
    "logo": "https://images.kiwi.com/airlines/64/2W.png"
  },
  "West Coast Air": {
    "id": "8O",
    "lcc": "0",
    "name": "West Coast Air",
    "logo": "https://images.kiwi.com/airlines/64/8O.png"
  },
  "Wind Jet": {
    "id": "IV",
    "lcc": "0",
    "name": "Wind Jet",
    "logo": "https://images.kiwi.com/airlines/64/IV.png"
  },
  "Xiamen Airlines": {
    "id": "MF",
    "lcc": "0",
    "name": "Xiamen Airlines",
    "logo": "https://images.kiwi.com/airlines/64/MF.png"
  },
  "Air Kazakhstan": {
    "id": "9Y",
    "lcc": "0",
    "name": "Air Kazakhstan",
    "logo": "https://images.kiwi.com/airlines/64/9Y.png"
  },
  "Uni Air": {
    "id": "B7",
    "lcc": "0",
    "name": "Uni Air",
    "logo": "https://images.kiwi.com/airlines/64/B7.png"
  },
  "Latin American Wings": {
    "id": "LW",
    "lcc": "0",
    "name": "Latin American Wings",
    "logo": "https://images.kiwi.com/airlines/64/LW.png"
  },
  "Royal European Airlines": {
    "id": "69",
    "lcc": "0",
    "name": "Royal European Airlines",
    "logo": "https://images.kiwi.com/airlines/64/69.png"
  },
  "Mann Yadanarpon Airlines": {
    "id": "7Y",
    "lcc": "0",
    "name": "Mann Yadanarpon Airlines",
    "logo": "https://images.kiwi.com/airlines/64/7Y.png"
  },
  "Euroline": {
    "id": "4L",
    "lcc": "0",
    "name": "Euroline",
    "logo": "https://images.kiwi.com/airlines/64/4L.png"
  },
  "Azur Air": {
    "id": "ZF",
    "lcc": "0",
    "name": "Azur Air",
    "logo": "https://images.kiwi.com/airlines/64/ZF.png"
  },
  "Gryphon Airlines": {
    "id": "6P",
    "lcc": "0",
    "name": "Gryphon Airlines",
    "logo": "https://images.kiwi.com/airlines/64/6P.png"
  },
  "Joy Air": {
    "id": "JR",
    "lcc": "0",
    "name": "Joy Air",
    "logo": "https://images.kiwi.com/airlines/64/JR.png"
  },
  "Azur Air Germany": {
    "id": "UR",
    "lcc": "0",
    "name": "Azur Air Germany",
    "logo": "https://images.kiwi.com/airlines/64/UR.png"
  },
  "Tailwind Airlines": {
    "id": "TI",
    "lcc": "0",
    "name": "Tailwind Airlines",
    "logo": "https://images.kiwi.com/airlines/64/TI.png"
  },
  "Fly One": {
    "id": "5F",
    "lcc": "1",
    "name": "Fly One",
    "logo": "https://images.kiwi.com/airlines/64/5F.png"
  },
  "VickJet": {
    "id": "KT",
    "lcc": "0",
    "name": "VickJet",
    "logo": "https://images.kiwi.com/airlines/64/KT.png"
  },
  "I-Fly": {
    "id": "I4",
    "lcc": "0",
    "name": "I-Fly",
    "logo": "https://images.kiwi.com/airlines/64/I4.png"
  },
  "China Express Airlines": {
    "id": "G5",
    "lcc": "0",
    "name": "China Express Airlines",
    "logo": "https://images.kiwi.com/airlines/64/G5.png"
  },
  "Domenican Airlines": {
    "id": "D1",
    "lcc": "0",
    "name": "Domenican Airlines",
    "logo": "https://images.kiwi.com/airlines/64/D1.png"
  },
  "LionXpress": {
    "id": "C4",
    "lcc": "0",
    "name": "LionXpress",
    "logo": "https://images.kiwi.com/airlines/64/C4.png"
  },
  "Air Mekong": {
    "id": "P8",
    "lcc": "0",
    "name": "Air Mekong",
    "logo": "https://images.kiwi.com/airlines/64/P8.png"
  },
  "VLM Airlines": {
    "id": "VG",
    "lcc": "0",
    "name": "VLM Airlines",
    "logo": "https://images.kiwi.com/airlines/64/VG.png"
  },
  "Svenska Buss": {
    "id": "SVENSKABUS",
    "lcc": "None",
    "name": "Svenska Buss",
    "logo": "https://images.kiwi.com/airlines/64/SVENSKABUS.png"
  },
  "VIP Ecuador": {
    "id": "V6",
    "lcc": "0",
    "name": "VIP Ecuador",
    "logo": "https://images.kiwi.com/airlines/64/V6.png"
  },
  "Halcyonair": {
    "id": "7Z",
    "lcc": "0",
    "name": "Halcyonair",
    "logo": "https://images.kiwi.com/airlines/64/7Z.png"
  },
  "Sterling Airlines": {
    "id": "NB",
    "lcc": "0",
    "name": "Sterling Airlines",
    "logo": "https://images.kiwi.com/airlines/64/NB.png"
  },
  "Hitit Bilgisayar Hizmetleri": {
    "id": "1T",
    "lcc": "0",
    "name": "Hitit Bilgisayar Hizmetleri",
    "logo": "https://images.kiwi.com/airlines/64/1T.png"
  },
  "SmartLynx Airlines": {
    "id": "6Y",
    "lcc": "0",
    "name": "SmartLynx Airlines",
    "logo": "https://images.kiwi.com/airlines/64/6Y.png"
  },
  "Air Cargo Carriers": {
    "id": "2Q",
    "lcc": "0",
    "name": "Air Cargo Carriers",
    "logo": "https://images.kiwi.com/airlines/64/2Q.png"
  },
  "Oriental Air Bridge": {
    "id": "OC",
    "lcc": "0",
    "name": "Oriental Air Bridge",
    "logo": "https://images.kiwi.com/airlines/64/OC.png"
  },
  "Atlantis European Airways": {
    "id": "TD",
    "lcc": "0",
    "name": "Atlantis European Airways",
    "logo": "https://images.kiwi.com/airlines/64/TD.png"
  },
  "Neos Air": {
    "id": "NO",
    "lcc": "1",
    "name": "Neos Air",
    "logo": "https://images.kiwi.com/airlines/64/NO.png"
  },
  "Safi Airlines": {
    "id": "4Q",
    "lcc": "0",
    "name": "Safi Airlines",
    "logo": "https://images.kiwi.com/airlines/64/4Q.png"
  },
  "Montenegro Airlines": {
    "id": "YM",
    "lcc": "0",
    "name": "Montenegro Airlines",
    "logo": "https://images.kiwi.com/airlines/64/YM.png"
  },
  "AirPanama": {
    "id": "7P",
    "lcc": "1",
    "name": "AirPanama",
    "logo": "https://images.kiwi.com/airlines/64/7P.png"
  },
  "TAAG Angola Airlines": {
    "id": "DT",
    "lcc": "0",
    "name": "TAAG Angola Airlines",
    "logo": "https://images.kiwi.com/airlines/64/DT.png"
  },
  "Azimuth": {
    "id": "A4",
    "lcc": "0",
    "name": "Azimuth",
    "logo": "https://images.kiwi.com/airlines/64/A4.png"
  },
  "LEVEL operated by ANISEC": {
    "id": "VK",
    "lcc": "0",
    "name": "LEVEL operated by ANISEC",
    "logo": "https://images.kiwi.com/airlines/64/VK.png"
  },
  "Elite Airways": {
    "id": "7Q",
    "lcc": "0",
    "name": "Elite Airways",
    "logo": "https://images.kiwi.com/airlines/64/7Q.png"
  },
  "Donghai Airlines": {
    "id": "DZ",
    "lcc": "0",
    "name": "Donghai Airlines",
    "logo": "https://images.kiwi.com/airlines/64/DZ.png"
  },
  "TAR Aerolineas": {
    "id": "YQ",
    "lcc": "0",
    "name": "TAR Aerolineas",
    "logo": "https://images.kiwi.com/airlines/64/YQ.png"
  },
  "Solaseed Air": {
    "id": "6J",
    "lcc": "0",
    "name": "Solaseed Air",
    "logo": "https://images.kiwi.com/airlines/64/6J.png"
  },
  "Elysian Airlines": {
    "id": "E4",
    "lcc": "0",
    "name": "Elysian Airlines",
    "logo": "https://images.kiwi.com/airlines/64/E4.png"
  },
  "Daallo Airlines": {
    "id": "D3",
    "lcc": "0",
    "name": "Daallo Airlines",
    "logo": "https://images.kiwi.com/airlines/64/D3.png"
  },
  "Iraqi Airways": {
    "id": "IA",
    "lcc": "0",
    "name": "Iraqi Airways",
    "logo": "https://images.kiwi.com/airlines/64/IA.png"
  },
  "LTE International Airways": {
    "id": "XO",
    "lcc": "0",
    "name": "LTE International Airways",
    "logo": "https://images.kiwi.com/airlines/64/XO.png"
  },
  "Chalair": {
    "id": "CE",
    "lcc": "0",
    "name": "Chalair",
    "logo": "https://images.kiwi.com/airlines/64/CE.png"
  },
  "Sun D'Or": {
    "id": "7L",
    "lcc": "0",
    "name": "Sun D'Or",
    "logo": "https://images.kiwi.com/airlines/64/7L.png"
  },
  "Spanair": {
    "id": "JK",
    "lcc": "0",
    "name": "Spanair",
    "logo": "https://images.kiwi.com/airlines/64/JK.png"
  },
  "SBA Airlines": {
    "id": "S3",
    "lcc": "0",
    "name": "SBA Airlines",
    "logo": "https://images.kiwi.com/airlines/64/S3.png"
  },
  "AtlasGlobal Ukraine": {
    "id": "UH",
    "lcc": "0",
    "name": "AtlasGlobal Ukraine",
    "logo": "https://images.kiwi.com/airlines/64/UH.png"
  },
  "Volga-Dnepr Airlines": {
    "id": "VI",
    "lcc": "0",
    "name": "Volga-Dnepr Airlines",
    "logo": "https://images.kiwi.com/airlines/64/VI.png"
  },
  "Colorful Guizhou Airlines": {
    "id": "GY",
    "lcc": "0",
    "name": "Colorful Guizhou Airlines",
    "logo": "https://images.kiwi.com/airlines/64/GY.png"
  },
  "Small Planet Airlines": {
    "id": "5P",
    "lcc": "0",
    "name": "Small Planet Airlines",
    "logo": "https://images.kiwi.com/airlines/64/5P.png"
  },
  "Mistral Air": {
    "id": "M4",
    "lcc": "0",
    "name": "Mistral Air",
    "logo": "https://images.kiwi.com/airlines/64/M4.png"
  },
  "AirRussia": {
    "id": "R8",
    "lcc": "0",
    "name": "AirRussia",
    "logo": "https://images.kiwi.com/airlines/64/R8.png"
  },
  "12 North": {
    "id": "12",
    "lcc": "0",
    "name": "12 North",
    "logo": "https://images.kiwi.com/airlines/64/12.png"
  },
  "JC International Airlines": {
    "id": "QD",
    "lcc": "0",
    "name": "JC International Airlines",
    "logo": "https://images.kiwi.com/airlines/64/QD.png"
  },
  "Air Malawi": {
    "id": "QM",
    "lcc": "0",
    "name": "Air Malawi",
    "logo": "https://images.kiwi.com/airlines/64/QM.png"
  },
  "BVI Airways": {
    "id": "XV",
    "lcc": "0",
    "name": "BVI Airways",
    "logo": "https://images.kiwi.com/airlines/64/XV.png"
  },
  "Mauritania Airlines International": {
    "id": "L6",
    "lcc": "0",
    "name": "Mauritania Airlines International",
    "logo": "https://images.kiwi.com/airlines/64/L6.png"
  },
  "DAT Danish Air Transport": {
    "id": "DX",
    "lcc": "0",
    "name": "DAT Danish Air Transport",
    "logo": "https://images.kiwi.com/airlines/64/DX.png"
  },
  "Air Senegal": {
    "id": "HC",
    "lcc": "0",
    "name": "Air Senegal",
    "logo": "https://images.kiwi.com/airlines/64/HC.png"
  },
  "Star1 Airlines": {
    "id": "V9",
    "lcc": "0",
    "name": "Star1 Airlines",
    "logo": "https://images.kiwi.com/airlines/64/V9.png"
  },
  "Stansted Express": {
    "id": "STANSTDEXP",
    "lcc": "None",
    "name": "Stansted Express",
    "logo": "https://images.kiwi.com/airlines/64/STANSTDEXP.png"
  },
  "Abacus International": {
    "id": "1B",
    "lcc": "0",
    "name": "Abacus International",
    "logo": "https://images.kiwi.com/airlines/64/1B.png"
  },
  "Hellenic Imperial Airways": {
    "id": "HT",
    "lcc": "0",
    "name": "Hellenic Imperial Airways",
    "logo": "https://images.kiwi.com/airlines/64/HT.png"
  },
  "NetJets": {
    "id": "1I",
    "lcc": "0",
    "name": "NetJets",
    "logo": "https://images.kiwi.com/airlines/64/1I.png"
  },
  "PB Air": {
    "id": "9Q",
    "lcc": "0",
    "name": "PB Air",
    "logo": "https://images.kiwi.com/airlines/64/9Q.png"
  },
  "Aircalin": {
    "id": "SB",
    "lcc": "0",
    "name": "Aircalin",
    "logo": "https://images.kiwi.com/airlines/64/SB.png"
  },
  "TransHolding System": {
    "id": "YO",
    "lcc": "0",
    "name": "TransHolding System",
    "logo": "https://images.kiwi.com/airlines/64/YO.png"
  },
  "MNG Airlines": {
    "id": "MB",
    "lcc": "0",
    "name": "MNG Airlines",
    "logo": "https://images.kiwi.com/airlines/64/MB.png"
  },
  "Fly Colombia ( Interliging Flights )": {
    "id": "3F",
    "lcc": "0",
    "name": "Fly Colombia ( Interliging Flights )",
    "logo": "https://images.kiwi.com/airlines/64/3F.png"
  },
  "Zenith International Airline": {
    "id": "ZN",
    "lcc": "0",
    "name": "Zenith International Airline",
    "logo": "https://images.kiwi.com/airlines/64/ZN.png"
  },
  "Jordan Aviation": {
    "id": "R5",
    "lcc": "0",
    "name": "Jordan Aviation",
    "logo": "https://images.kiwi.com/airlines/64/R5.png"
  },
  "Air Macau": {
    "id": "NX",
    "lcc": "0",
    "name": "Air Macau",
    "logo": "https://images.kiwi.com/airlines/64/NX.png"
  },
  "Air North": {
    "id": "4N",
    "lcc": "0",
    "name": "Air North",
    "logo": "https://images.kiwi.com/airlines/64/4N.png"
  },
  "Jet Airways": {
    "id": "9W",
    "lcc": "0",
    "name": "Jet Airways",
    "logo": "https://images.kiwi.com/airlines/64/9W.png"
  },
  "ExpressJet": {
    "id": "XE",
    "lcc": "0",
    "name": "ExpressJet",
    "logo": "https://images.kiwi.com/airlines/64/XE.png"
  },
  "Atlant-Soyuz Airlines": {
    "id": "3G",
    "lcc": "0",
    "name": "Atlant-Soyuz Airlines",
    "logo": "https://images.kiwi.com/airlines/64/3G.png"
  },
  "Frontier Flying Service": {
    "id": "2F",
    "lcc": "0",
    "name": "Frontier Flying Service",
    "logo": "https://images.kiwi.com/airlines/64/2F.png"
  },
  "FlyVLM": {
    "id": "VO",
    "lcc": "0",
    "name": "FlyVLM",
    "logo": "https://images.kiwi.com/airlines/64/VO.png"
  },
  "AlbaWings": {
    "id": "2B",
    "lcc": "0",
    "name": "AlbaWings",
    "logo": "https://images.kiwi.com/airlines/64/2B.png"
  },
  "Binter Cabo Verde": {
    "id": "3B",
    "lcc": "0",
    "name": "Binter Cabo Verde",
    "logo": "https://images.kiwi.com/airlines/64/3B.png"
  },
  "Shanghai Airlines": {
    "id": "FM",
    "lcc": "0",
    "name": "Shanghai Airlines",
    "logo": "https://images.kiwi.com/airlines/64/FM.png"
  },
  "JetSMART Argentina": {
    "id": "WJ",
    "lcc": "0",
    "name": "JetSMART Argentina",
    "logo": "https://images.kiwi.com/airlines/64/WJ.png"
  },
  "Austral Lineas Aereas": {
    "id": "AU",
    "lcc": "0",
    "name": "Austral Lineas Aereas",
    "logo": "https://images.kiwi.com/airlines/64/AU.png"
  },
  "Bulgarian Air Charter": {
    "id": "H6",
    "lcc": "0",
    "name": "Bulgarian Air Charter",
    "logo": "https://images.kiwi.com/airlines/64/H6.png"
  },
  "Air Cote d'Ivoire": {
    "id": "HF",
    "lcc": "0",
    "name": "Air Cote d'Ivoire",
    "logo": "https://images.kiwi.com/airlines/64/HF.png"
  },
  "Sky Angkor Airlines": {
    "id": "ZA",
    "lcc": "0",
    "name": "Sky Angkor Airlines",
    "logo": "https://images.kiwi.com/airlines/64/ZA.png"
  },
  "Jetairfly": {
    "id": "JF",
    "lcc": "0",
    "name": "Jetairfly",
    "logo": "https://images.kiwi.com/airlines/64/JF.png"
  },
  "KLM Cityhopper": {
    "id": "WA",
    "lcc": "0",
    "name": "KLM Cityhopper",
    "logo": "https://images.kiwi.com/airlines/64/WA.png"
  },
  "Kuzu Airlines Cargo": {
    "id": "GO",
    "lcc": "0",
    "name": "Kuzu Airlines Cargo",
    "logo": "https://images.kiwi.com/airlines/64/GO.png"
  },
  "LTU Austria": {
    "id": "L3",
    "lcc": "0",
    "name": "LTU Austria",
    "logo": "https://images.kiwi.com/airlines/64/L3.png"
  },
  "Luftfahrtgesellschaft Walter": {
    "id": "HE",
    "lcc": "0",
    "name": "Luftfahrtgesellschaft Walter",
    "logo": "https://images.kiwi.com/airlines/64/HE.png"
  },
  "Maersk": {
    "id": "DM",
    "lcc": "0",
    "name": "Maersk",
    "logo": "https://images.kiwi.com/airlines/64/DM.png"
  },
  "Northwest Airlines": {
    "id": "NW",
    "lcc": "0",
    "name": "Northwest Airlines",
    "logo": "https://images.kiwi.com/airlines/64/NW.png"
  },
  "Siam Air": {
    "id": "O8",
    "lcc": "0",
    "name": "Siam Air",
    "logo": "https://images.kiwi.com/airlines/64/O8.png"
  },
  "Origin Pacific Airways": {
    "id": "QO",
    "lcc": "0",
    "name": "Origin Pacific Airways",
    "logo": "https://images.kiwi.com/airlines/64/QO.png"
  },
  "Portugalia": {
    "id": "NI",
    "lcc": "0",
    "name": "Portugalia",
    "logo": "https://images.kiwi.com/airlines/64/NI.png"
  },
  "Ryan International Airlines": {
    "id": "RD",
    "lcc": "0",
    "name": "Ryan International Airlines",
    "logo": "https://images.kiwi.com/airlines/64/RD.png"
  },
  "Régional": {
    "id": "YS",
    "lcc": "0",
    "name": "Régional",
    "logo": "https://images.kiwi.com/airlines/64/YS.png"
  },
  "Skywalk Airlines": {
    "id": "AL",
    "lcc": "0",
    "name": "Skywalk Airlines",
    "logo": "https://images.kiwi.com/airlines/64/AL.png"
  },
  "Spring Airlines": {
    "id": "9C",
    "lcc": "1",
    "name": "Spring Airlines",
    "logo": "https://images.kiwi.com/airlines/64/9C.png"
  },
  "Transwest Air": {
    "id": "9T",
    "lcc": "0",
    "name": "Transwest Air",
    "logo": "https://images.kiwi.com/airlines/64/9T.png"
  },
  "TUIfly Nordic": {
    "id": "6B",
    "lcc": "0",
    "name": "TUIfly Nordic",
    "logo": "https://images.kiwi.com/airlines/64/6B.png"
  },
  "Grozny Avia": {
    "id": "ZG",
    "lcc": "0",
    "name": "Grozny Avia",
    "logo": "https://images.kiwi.com/airlines/64/ZG.png"
  },
  "Wizz Air Hungary": {
    "id": "8Z",
    "lcc": "0",
    "name": "Wizz Air Hungary",
    "logo": "https://images.kiwi.com/airlines/64/8Z.png"
  },
  "Air Chathams": {
    "id": "CV",
    "lcc": "0",
    "name": "Air Chathams",
    "logo": "https://images.kiwi.com/airlines/64/CV.png"
  },
  "SATA Air Acores": {
    "id": "SP",
    "lcc": "0",
    "name": "SATA Air Acores",
    "logo": "https://images.kiwi.com/airlines/64/SP.png"
  },
  "Contour Airlines": {
    "id": "LF",
    "lcc": "0",
    "name": "Contour Airlines",
    "logo": "https://images.kiwi.com/airlines/64/LF.png"
  },
  "Swiftair": {
    "id": "WQ",
    "lcc": "0",
    "name": "Swiftair",
    "logo": "https://images.kiwi.com/airlines/64/WQ.png"
  },
  "Southjet cargo": {
    "id": "78",
    "lcc": "0",
    "name": "Southjet cargo",
    "logo": "https://images.kiwi.com/airlines/64/78.png"
  },
  "Yamal Airlines": {
    "id": "YL",
    "lcc": "0",
    "name": "Yamal Airlines",
    "logo": "https://images.kiwi.com/airlines/64/YL.png"
  },
  "Kostromskie avialinii": {
    "id": "K1",
    "lcc": "0",
    "name": "Kostromskie avialinii",
    "logo": "https://images.kiwi.com/airlines/64/K1.png"
  },
  "Helijet": {
    "id": "JB",
    "lcc": "0",
    "name": "Helijet",
    "logo": "https://images.kiwi.com/airlines/64/JB.png"
  },
  "LASA Argentina": {
    "id": "L4",
    "lcc": "0",
    "name": "LASA Argentina",
    "logo": "https://images.kiwi.com/airlines/64/L4.png"
  },
  "Japan Regio": {
    "id": "ZX",
    "lcc": "0",
    "name": "Japan Regio",
    "logo": "https://images.kiwi.com/airlines/64/ZX.png"
  },
  "Coastal Aviation": {
    "id": "CQ",
    "lcc": "0",
    "name": "Coastal Aviation",
    "logo": "https://images.kiwi.com/airlines/64/CQ.png"
  },
  "Buquebus Líneas Aéreas": {
    "id": "BQ",
    "lcc": "0",
    "name": "Buquebus Líneas Aéreas",
    "logo": "https://images.kiwi.com/airlines/64/BQ.png"
  },
  "VIA Rail Canada": {
    "id": "VIARAILCAD",
    "lcc": "None",
    "name": "VIA Rail Canada",
    "logo": "https://images.kiwi.com/airlines/64/VIARAILCAD.png"
  },
  "Papillon Grand Canyon Helicopters": {
    "id": "HI",
    "lcc": "0",
    "name": "Papillon Grand Canyon Helicopters",
    "logo": "https://images.kiwi.com/airlines/64/HI.png"
  },
  "Swedish Railways": {
    "id": "SJRAIL",
    "lcc": "None",
    "name": "Swedish Railways",
    "logo": "https://images.kiwi.com/airlines/64/SJRAIL.png"
  },
  "SENIC AIRLINES": {
    "id": "YR",
    "lcc": "0",
    "name": "SENIC AIRLINES",
    "logo": "https://images.kiwi.com/airlines/64/YR.png"
  },
  "MasAir": {
    "id": "M7",
    "lcc": "0",
    "name": "MasAir",
    "logo": "https://images.kiwi.com/airlines/64/M7.png"
  },
  "Ansett Australia": {
    "id": "AN",
    "lcc": "0",
    "name": "Ansett Australia",
    "logo": "https://images.kiwi.com/airlines/64/AN.png"
  },
  "Hunnu Air": {
    "id": "MR",
    "lcc": "0",
    "name": "Hunnu Air",
    "logo": "https://images.kiwi.com/airlines/64/MR.png"
  },
  "Virginwings": {
    "id": "YY",
    "lcc": "0",
    "name": "Virginwings",
    "logo": "https://images.kiwi.com/airlines/64/YY.png"
  },
  "Askari Aviation": {
    "id": "4K",
    "lcc": "0",
    "name": "Askari Aviation",
    "logo": "https://images.kiwi.com/airlines/64/4K.png"
  },
  "Camair-co": {
    "id": "QC",
    "lcc": "0",
    "name": "Camair-co",
    "logo": "https://images.kiwi.com/airlines/64/QC.png"
  },
  "AirOnix": {
    "id": "OG",
    "lcc": "0",
    "name": "AirOnix",
    "logo": "https://images.kiwi.com/airlines/64/OG.png"
  },
  "Afriqiyah Airways": {
    "id": "8U",
    "lcc": "0",
    "name": "Afriqiyah Airways",
    "logo": "https://images.kiwi.com/airlines/64/8U.png"
  },
  "Ariana Afghan Airlines": {
    "id": "FG",
    "lcc": "0",
    "name": "Ariana Afghan Airlines",
    "logo": "https://images.kiwi.com/airlines/64/FG.png"
  },
  "Grant Aviation": {
    "id": "GV",
    "lcc": "0",
    "name": "Grant Aviation",
    "logo": "https://images.kiwi.com/airlines/64/GV.png"
  },
  "Hawkair": {
    "id": "BH",
    "lcc": "0",
    "name": "Hawkair",
    "logo": "https://images.kiwi.com/airlines/64/BH.png"
  },
  "Heli France": {
    "id": "8H",
    "lcc": "0",
    "name": "Heli France",
    "logo": "https://images.kiwi.com/airlines/64/8H.png"
  },
  "Hellas Jet": {
    "id": "T4",
    "lcc": "0",
    "name": "Hellas Jet",
    "logo": "https://images.kiwi.com/airlines/64/T4.png"
  },
  "Lufthansa CityLine": {
    "id": "CL",
    "lcc": "0",
    "name": "Lufthansa CityLine",
    "logo": "https://images.kiwi.com/airlines/64/CL.png"
  },
  "Globus": {
    "id": "GH",
    "lcc": "0",
    "name": "Globus",
    "logo": "https://images.kiwi.com/airlines/64/GH.png"
  },
  "LATAM Argentina": {
    "id": "4M",
    "lcc": "0",
    "name": "LATAM Argentina",
    "logo": "https://images.kiwi.com/airlines/64/4M.png"
  },
  "Jetways Airlines Limited": {
    "id": "WU",
    "lcc": "0",
    "name": "Jetways Airlines Limited",
    "logo": "https://images.kiwi.com/airlines/64/WU.png"
  },
  "Fuzhou Airlines": {
    "id": "FU",
    "lcc": "0",
    "name": "Fuzhou Airlines",
    "logo": "https://images.kiwi.com/airlines/64/FU.png"
  },
  "Hello": {
    "id": "HW",
    "lcc": "0",
    "name": "Hello",
    "logo": "https://images.kiwi.com/airlines/64/HW.png"
  },
  "Atlas Atlantique Airlines": {
    "id": "L5",
    "lcc": "0",
    "name": "Atlas Atlantique Airlines",
    "logo": "https://images.kiwi.com/airlines/64/L5.png"
  },
  "MIAT Mongolian Airlines": {
    "id": "OM",
    "lcc": "0",
    "name": "MIAT Mongolian Airlines",
    "logo": "https://images.kiwi.com/airlines/64/OM.png"
  },
  "Mahan Air": {
    "id": "W5",
    "lcc": "0",
    "name": "Mahan Air",
    "logo": "https://images.kiwi.com/airlines/64/W5.png"
  },
  "Malév": {
    "id": "MA",
    "lcc": "0",
    "name": "Malév",
    "logo": "https://images.kiwi.com/airlines/64/MA.png"
  },
  "Skagway Air Service": {
    "id": "N5",
    "lcc": "0",
    "name": "Skagway Air Service",
    "logo": "https://images.kiwi.com/airlines/64/N5.png"
  },
  "VASP": {
    "id": "VP",
    "lcc": "0",
    "name": "VASP",
    "logo": "https://images.kiwi.com/airlines/64/VP.png"
  },
  "United Airways": {
    "id": "4H",
    "lcc": "0",
    "name": "United Airways",
    "logo": "https://images.kiwi.com/airlines/64/4H.png"
  },
  "Salsa d\\\\'Haiti": {
    "id": "SO",
    "lcc": "0",
    "name": "Salsa d\\\\'Haiti",
    "logo": "https://images.kiwi.com/airlines/64/SO.png"
  },
  "Korongo Airlines": {
    "id": "ZC",
    "lcc": "0",
    "name": "Korongo Airlines",
    "logo": "https://images.kiwi.com/airlines/64/ZC.png"
  },
  "China Northwest Airlines (WH)": {
    "id": "WH",
    "lcc": "0",
    "name": "China Northwest Airlines (WH)",
    "logo": "https://images.kiwi.com/airlines/64/WH.png"
  },
  "BQB Lineas Aereas": {
    "id": "5Q",
    "lcc": "0",
    "name": "BQB Lineas Aereas",
    "logo": "https://images.kiwi.com/airlines/64/5Q.png"
  },
  "Royal Airways": {
    "id": "KG",
    "lcc": "0",
    "name": "Royal Airways",
    "logo": "https://images.kiwi.com/airlines/64/KG.png"
  },
  "Yangon Airways Ltd.": {
    "id": "YH",
    "lcc": "0",
    "name": "Yangon Airways Ltd.",
    "logo": "https://images.kiwi.com/airlines/64/YH.png"
  },
  "Anguilla Air Services": {
    "id": "Q3",
    "lcc": "0",
    "name": "Anguilla Air Services",
    "logo": "https://images.kiwi.com/airlines/64/Q3.png"
  },
  "CCML Airlines": {
    "id": "CB",
    "lcc": "0",
    "name": "CCML Airlines",
    "logo": "https://images.kiwi.com/airlines/64/CB.png"
  },
  "BRAZIL AIR": {
    "id": "GB",
    "lcc": "0",
    "name": "BRAZIL AIR",
    "logo": "https://images.kiwi.com/airlines/64/GB.png"
  },
  "N1": {
    "id": "N1",
    "lcc": "0",
    "name": "N1",
    "logo": "https://images.kiwi.com/airlines/64/N1.png"
  },
  "Indya Airline Group": {
    "id": "G1",
    "lcc": "0",
    "name": "Indya Airline Group",
    "logo": "https://images.kiwi.com/airlines/64/G1.png"
  },
  "Air Norway": {
    "id": "M3",
    "lcc": "0",
    "name": "Air Norway",
    "logo": "https://images.kiwi.com/airlines/64/M3.png"
  },
  "PassionAir": {
    "id": "OP",
    "lcc": "None",
    "name": "PassionAir",
    "logo": "https://images.kiwi.com/airlines/64/OP.png"
  },
  "Azur Air Ukraine": {
    "id": "QU",
    "lcc": "None",
    "name": "Azur Air Ukraine",
    "logo": "https://images.kiwi.com/airlines/64/QU.png"
  },
  "Euro Jet": {
    "id": "24",
    "lcc": "0",
    "name": "Euro Jet",
    "logo": "https://images.kiwi.com/airlines/64/24.png"
  },
  "Evergreen International Airlines": {
    "id": "EZ",
    "lcc": "0",
    "name": "Evergreen International Airlines",
    "logo": "https://images.kiwi.com/airlines/64/EZ.png"
  },
  "Sun lines": {
    "id": "SUNLINES",
    "lcc": "None",
    "name": "Sun lines",
    "logo": "https://images.kiwi.com/airlines/64/SUNLINES.png"
  },
  "Ada Air": {
    "id": "ZY",
    "lcc": "0",
    "name": "Ada Air",
    "logo": "https://images.kiwi.com/airlines/64/ZY.png"
  },
  "CanXpress": {
    "id": "C1",
    "lcc": "0",
    "name": "CanXpress",
    "logo": "https://images.kiwi.com/airlines/64/C1.png"
  },
  "Empire Airlines": {
    "id": "EM",
    "lcc": "0",
    "name": "Empire Airlines",
    "logo": "https://images.kiwi.com/airlines/64/EM.png"
  },
  "CommutAir": {
    "id": "C5",
    "lcc": "0",
    "name": "CommutAir",
    "logo": "https://images.kiwi.com/airlines/64/C5.png"
  },
  "Contact Air": {
    "id": "C3",
    "lcc": "0",
    "name": "Contact Air",
    "logo": "https://images.kiwi.com/airlines/64/C3.png"
  },
  "Continental Micronesia": {
    "id": "CS",
    "lcc": "0",
    "name": "Continental Micronesia",
    "logo": "https://images.kiwi.com/airlines/64/CS.png"
  },
  "Darwin Airline": {
    "id": "0D",
    "lcc": "0",
    "name": "Darwin Airline",
    "logo": "https://images.kiwi.com/airlines/64/0D.png"
  },
  "Eastland Air": {
    "id": "DK",
    "lcc": "0",
    "name": "Eastland Air",
    "logo": "https://images.kiwi.com/airlines/64/DK.png"
  },
  "Florida West International Airways": {
    "id": "RF",
    "lcc": "0",
    "name": "Florida West International Airways",
    "logo": "https://images.kiwi.com/airlines/64/RF.png"
  },
  "Tunisair": {
    "id": "TU",
    "lcc": "0",
    "name": "Tunisair",
    "logo": "https://images.kiwi.com/airlines/64/TU.png"
  },
  "Twin Jet": {
    "id": "T7",
    "lcc": "0",
    "name": "Twin Jet",
    "logo": "https://images.kiwi.com/airlines/64/T7.png"
  },
  "Virgin Australia Airlines": {
    "id": "VA",
    "lcc": "1",
    "name": "Virgin Australia Airlines",
    "logo": "https://images.kiwi.com/airlines/64/VA.png"
  },
  "World Experience Airline": {
    "id": "W1",
    "lcc": "0",
    "name": "World Experience Airline",
    "logo": "https://images.kiwi.com/airlines/64/W1.png"
  },
  "Locair": {
    "id": "ZQ",
    "lcc": "0",
    "name": "Locair",
    "logo": "https://images.kiwi.com/airlines/64/ZQ.png"
  },
  "Air indus": {
    "id": "I6",
    "lcc": "0",
    "name": "Air indus",
    "logo": "https://images.kiwi.com/airlines/64/I6.png"
  },
  "Chongqing Airlines": {
    "id": "OQ",
    "lcc": "0",
    "name": "Chongqing Airlines",
    "logo": "https://images.kiwi.com/airlines/64/OQ.png"
  },
  "OneChina": {
    "id": "1C",
    "lcc": "0",
    "name": "OneChina",
    "logo": "https://images.kiwi.com/airlines/64/1C.png"
  },
  "Airblue": {
    "id": "ED",
    "lcc": "1",
    "name": "Airblue",
    "logo": "https://images.kiwi.com/airlines/64/ED.png"
  },
  "Rotana Jet": {
    "id": "RG",
    "lcc": "0",
    "name": "Rotana Jet",
    "logo": "https://images.kiwi.com/airlines/64/RG.png"
  },
  "Tradewind Aviation": {
    "id": "TJ",
    "lcc": "0",
    "name": "Tradewind Aviation",
    "logo": "https://images.kiwi.com/airlines/64/TJ.png"
  },
  "Norwegian Air Argentina": {
    "id": "DN",
    "lcc": "0",
    "name": "Norwegian Air Argentina",
    "logo": "https://images.kiwi.com/airlines/64/DN.png"
  },
  "Hebei Airlines": {
    "id": "NS",
    "lcc": "0",
    "name": "Hebei Airlines",
    "logo": "https://images.kiwi.com/airlines/64/NS.png"
  },
  "Valuair": {
    "id": "VF",
    "lcc": "0",
    "name": "Valuair",
    "logo": "https://images.kiwi.com/airlines/64/VF.png"
  },
  "Air Seychelles": {
    "id": "HM",
    "lcc": "0",
    "name": "Air Seychelles",
    "logo": "https://images.kiwi.com/airlines/64/HM.png"
  },
  "China United": {
    "id": "KN",
    "lcc": "0",
    "name": "China United",
    "logo": "https://images.kiwi.com/airlines/64/KN.png"
  },
  "Flexflight": {
    "id": "W2",
    "lcc": "0",
    "name": "Flexflight",
    "logo": "https://images.kiwi.com/airlines/64/W2.png"
  },
  "Alliance Air": {
    "id": "9I",
    "lcc": "0",
    "name": "Alliance Air",
    "logo": "https://images.kiwi.com/airlines/64/9I.png"
  },
  "TransBrasil Airlines": {
    "id": "TH",
    "lcc": "0",
    "name": "TransBrasil Airlines",
    "logo": "https://images.kiwi.com/airlines/64/TH.png"
  },
  "Yellowstone Club Private Shuttle": {
    "id": "Y1",
    "lcc": "0",
    "name": "Yellowstone Club Private Shuttle",
    "logo": "https://images.kiwi.com/airlines/64/Y1.png"
  },
  "Fly Brasil": {
    "id": "F1",
    "lcc": "0",
    "name": "Fly Brasil",
    "logo": "https://images.kiwi.com/airlines/64/F1.png"
  },
  "CB Airways UK ( Interliging Flights )": {
    "id": "1F",
    "lcc": "0",
    "name": "CB Airways UK ( Interliging Flights )",
    "logo": "https://images.kiwi.com/airlines/64/1F.png"
  },
  "Airswift Transport": {
    "id": "T6",
    "lcc": "0",
    "name": "Airswift Transport",
    "logo": "https://images.kiwi.com/airlines/64/T6.png"
  },
  "Norte Lineas Aereas": {
    "id": "N0",
    "lcc": "0",
    "name": "Norte Lineas Aereas",
    "logo": "https://images.kiwi.com/airlines/64/N0.png"
  },
  "Himalaya Airlines": {
    "id": "H9",
    "lcc": "0",
    "name": "Himalaya Airlines",
    "logo": "https://images.kiwi.com/airlines/64/H9.png"
  },
  "Air Cargo Germany": {
    "id": "6U",
    "lcc": "0",
    "name": "Air Cargo Germany",
    "logo": "https://images.kiwi.com/airlines/64/6U.png"
  },
  "NEXT Brasil": {
    "id": "XB",
    "lcc": "0",
    "name": "NEXT Brasil",
    "logo": "https://images.kiwi.com/airlines/64/XB.png"
  },
  "GNB Linhas Aereas": {
    "id": "GN",
    "lcc": "0",
    "name": "GNB Linhas Aereas",
    "logo": "https://images.kiwi.com/airlines/64/GN.png"
  },
  "Usa Sky Cargo": {
    "id": "E1",
    "lcc": "0",
    "name": "Usa Sky Cargo",
    "logo": "https://images.kiwi.com/airlines/64/E1.png"
  },
  "Red Jet Canada": {
    "id": "QY",
    "lcc": "0",
    "name": "Red Jet Canada",
    "logo": "https://images.kiwi.com/airlines/64/QY.png"
  },
  "Red Jet Mexico": {
    "id": "4X",
    "lcc": "0",
    "name": "Red Jet Mexico",
    "logo": "https://images.kiwi.com/airlines/64/4X.png"
  },
  "Marusya Airways": {
    "id": "Y8",
    "lcc": "0",
    "name": "Marusya Airways",
    "logo": "https://images.kiwi.com/airlines/64/Y8.png"
  },
  "Freebird Airlines": {
    "id": "FH",
    "lcc": "0",
    "name": "Freebird Airlines",
    "logo": "https://images.kiwi.com/airlines/64/FH.png"
  },
  "Aero VIP (2D)": {
    "id": "2D",
    "lcc": "0",
    "name": "Aero VIP (2D)",
    "logo": "https://images.kiwi.com/airlines/64/2D.png"
  },
  "FakeAirline": {
    "id": "__",
    "lcc": "0",
    "name": "FakeAirline",
    "logo": "https://images.kiwi.com/airlines/64/__.png"
  },
  "Thomas Cook Belgium": {
    "id": "HQ",
    "lcc": "0",
    "name": "Thomas Cook Belgium",
    "logo": "https://images.kiwi.com/airlines/64/HQ.png"
  },
  "BoutiqueAir": {
    "id": "4B",
    "lcc": "0",
    "name": "BoutiqueAir",
    "logo": "https://images.kiwi.com/airlines/64/4B.png"
  },
  "Branson Air Express": {
    "id": "1X",
    "lcc": "0",
    "name": "Branson Air Express",
    "logo": "https://images.kiwi.com/airlines/64/1X.png"
  },
  "Evelop Airlines": {
    "id": "E9",
    "lcc": "0",
    "name": "Evelop Airlines",
    "logo": "https://images.kiwi.com/airlines/64/E9.png"
  },
  "Aerolinea de Antioquia": {
    "id": "1D",
    "lcc": "1",
    "name": "Aerolinea de Antioquia",
    "logo": "https://images.kiwi.com/airlines/64/1D.png"
  },
  "MementoBUS": {
    "id": "MEMENTO",
    "lcc": "None",
    "name": "MementoBUS",
    "logo": "https://images.kiwi.com/airlines/64/MEMENTO.png"
  },
  "Island Air Kodiak": {
    "id": "2O",
    "lcc": "0",
    "name": "Island Air Kodiak",
    "logo": "https://images.kiwi.com/airlines/64/2O.png"
  },
  "Biman Bangladesh Airlines": {
    "id": "BG",
    "lcc": "1",
    "name": "Biman Bangladesh Airlines",
    "logo": "https://images.kiwi.com/airlines/64/BG.png"
  },
  "Aero VIP": {
    "id": "WV",
    "lcc": "0",
    "name": "Aero VIP",
    "logo": "https://images.kiwi.com/airlines/64/WV.png"
  },
  "Air Caraïbes": {
    "id": "TX",
    "lcc": "0",
    "name": "Air Caraïbes",
    "logo": "https://images.kiwi.com/airlines/64/TX.png"
  },
  "Andbus": {
    "id": "ANDBUS",
    "lcc": "None",
    "name": "Andbus",
    "logo": "https://images.kiwi.com/airlines/64/ANDBUS.png"
  },
  "Via Air": {
    "id": "VC",
    "lcc": "0",
    "name": "Via Air",
    "logo": "https://images.kiwi.com/airlines/64/VC.png"
  },
  "Air Salone": {
    "id": "20",
    "lcc": "0",
    "name": "Air Salone",
    "logo": "https://images.kiwi.com/airlines/64/20.png"
  },
  "EJR – East Japan Rail Company": {
    "id": "EJR",
    "lcc": "None",
    "name": "EJR – East Japan Rail Company",
    "logo": "https://images.kiwi.com/airlines/64/EJR.png"
  },
  "Iran Air": {
    "id": "IR",
    "lcc": "0",
    "name": "Iran Air",
    "logo": "https://images.kiwi.com/airlines/64/IR.png"
  },
  "Zz": {
    "id": "ZZ",
    "lcc": "0",
    "name": "Zz",
    "logo": "https://images.kiwi.com/airlines/64/ZZ.png"
  },
  "SGA Airlines": {
    "id": "5E",
    "lcc": "0",
    "name": "SGA Airlines",
    "logo": "https://images.kiwi.com/airlines/64/5E.png"
  },
  "Vienna Airport Lines": {
    "id": "VIEAPLINES",
    "lcc": "None",
    "name": "Vienna Airport Lines",
    "logo": "https://images.kiwi.com/airlines/64/VIEAPLINES.png"
  },
  "Jambojet": {
    "id": "JX",
    "lcc": "1",
    "name": "Jambojet",
    "logo": "https://images.kiwi.com/airlines/64/JX.png"
  },
  "RegioJet": {
    "id": "REGIOJET",
    "lcc": "0",
    "name": "RegioJet",
    "logo": "https://images.kiwi.com/airlines/64/REGIOJET.png"
  },
  "Arkia": {
    "id": "IZ",
    "lcc": "1",
    "name": "Arkia",
    "logo": "https://images.kiwi.com/airlines/64/IZ.png"
  },
  "Air Do": {
    "id": "HD",
    "lcc": "1",
    "name": "Air Do",
    "logo": "https://images.kiwi.com/airlines/64/HD.png"
  },
  "China Airlines": {
    "id": "CI",
    "lcc": "0",
    "name": "China Airlines",
    "logo": "https://images.kiwi.com/airlines/64/CI.png"
  },
  "Fly540": {
    "id": "5H",
    "lcc": "1",
    "name": "Fly540",
    "logo": "https://images.kiwi.com/airlines/64/5H.png"
  },
  "Citilink": {
    "id": "QG",
    "lcc": "1",
    "name": "Citilink",
    "logo": "https://images.kiwi.com/airlines/64/QG.png"
  },
  "Cambodia Angkor Air": {
    "id": "K6",
    "lcc": "0",
    "name": "Cambodia Angkor Air",
    "logo": "https://images.kiwi.com/airlines/64/K6.png"
  },
  "Air Costa": {
    "id": "LB",
    "lcc": "1",
    "name": "Air Costa",
    "logo": "https://images.kiwi.com/airlines/64/LB.png"
  },
  "Volaris Costa Rica": {
    "id": "Q6",
    "lcc": "0",
    "name": "Volaris Costa Rica",
    "logo": "https://images.kiwi.com/airlines/64/Q6.png"
  },
  "Flair Airlines": {
    "id": "F8",
    "lcc": "0",
    "name": "Flair Airlines",
    "logo": "https://images.kiwi.com/airlines/64/F8.png"
  },
  "Mandarin Airlines": {
    "id": "AE",
    "lcc": "0",
    "name": "Mandarin Airlines",
    "logo": "https://images.kiwi.com/airlines/64/AE.png"
  },
  "CebGo": {
    "id": "DG",
    "lcc": "0",
    "name": "CebGo",
    "logo": "https://images.kiwi.com/airlines/64/DG.png"
  },
  "LaudaMotion": {
    "id": "OE",
    "lcc": "1",
    "name": "LaudaMotion",
    "logo": "https://images.kiwi.com/airlines/64/OE.png"
  },
  "Wings Air": {
    "id": "IW",
    "lcc": "0",
    "name": "Wings Air",
    "logo": "https://images.kiwi.com/airlines/64/IW.png"
  },
  "China Southern Airlines": {
    "id": "CZ",
    "lcc": "0",
    "name": "China Southern Airlines",
    "logo": "https://images.kiwi.com/airlines/64/CZ.png"
  },
  "GoOpti": {
    "id": "GOOPTI",
    "lcc": "None",
    "name": "GoOpti",
    "logo": "https://images.kiwi.com/airlines/64/GOOPTI.png"
  },
  "Air Liaison": {
    "id": "LIZ",
    "lcc": "None",
    "name": "Air Liaison",
    "logo": "https://images.kiwi.com/airlines/64/LIZ.png"
  },
  "Air Chathams Limited 3C": {
    "id": "3C",
    "lcc": "None",
    "name": "Air Chathams Limited 3C",
    "logo": "https://images.kiwi.com/airlines/64/3C.png"
  },
  "CAT- City Airport Train": {
    "id": "CAT",
    "lcc": "None",
    "name": "CAT- City Airport Train",
    "logo": "https://images.kiwi.com/airlines/64/CAT.png"
  },
  "Oxford Bus Company": {
    "id": "OXFORDBUS",
    "lcc": "None",
    "name": "Oxford Bus Company",
    "logo": "https://images.kiwi.com/airlines/64/OXFORDBUS.png"
  },
  "Air Leap": {
    "id": "LPA",
    "lcc": "None",
    "name": "Air Leap",
    "logo": "https://images.kiwi.com/airlines/64/LPA.png"
  },
  "Kan Air": {
    "id": "K8",
    "lcc": "0",
    "name": "Kan Air",
    "logo": "https://images.kiwi.com/airlines/64/K8.png"
  },
  "Orbit Airlines Azerbaijan": {
    "id": "O1",
    "lcc": "0",
    "name": "Orbit Airlines Azerbaijan",
    "logo": "https://images.kiwi.com/airlines/64/O1.png"
  },
  "RegionalJet": {
    "id": "EE",
    "lcc": "0",
    "name": "RegionalJet",
    "logo": "https://images.kiwi.com/airlines/64/EE.png"
  },
  "Yan Air": {
    "id": "YE",
    "lcc": "0",
    "name": "Yan Air",
    "logo": "https://images.kiwi.com/airlines/64/YE.png"
  },
  "American Airlines": {
    "id": "AA",
    "lcc": "0",
    "name": "American Airlines",
    "logo": "https://images.kiwi.com/airlines/64/AA.png"
  },
  "Cape Air": {
    "id": "9K",
    "lcc": "1",
    "name": "Cape Air",
    "logo": "https://images.kiwi.com/airlines/64/9K.png"
  },
  "Tarom": {
    "id": "RO",
    "lcc": "0",
    "name": "Tarom",
    "logo": "https://images.kiwi.com/airlines/64/RO.png"
  },
  "Atifly": {
    "id": "A1",
    "lcc": "0",
    "name": "Atifly",
    "logo": "https://images.kiwi.com/airlines/64/A1.png"
  },
  "Southern Airways Express": {
    "id": "9X",
    "lcc": "1",
    "name": "Southern Airways Express",
    "logo": "https://images.kiwi.com/airlines/64/9X.png"
  },
  "Bek Air": {
    "id": "Z9",
    "lcc": "0",
    "name": "Bek Air",
    "logo": "https://images.kiwi.com/airlines/64/Z9.png"
  },
  "Amaszonas": {
    "id": "Z8",
    "lcc": "1",
    "name": "Amaszonas",
    "logo": "https://images.kiwi.com/airlines/64/Z8.png"
  },
  "PKS Szczencin": {
    "id": "PKSZCZECIN",
    "lcc": "None",
    "name": "PKS Szczencin",
    "logo": "https://images.kiwi.com/airlines/64/PKSZCZECIN.png"
  },
  "Tropic Ocean Airways": {
    "id": "TROPOCEAN",
    "lcc": "None",
    "name": "Tropic Ocean Airways",
    "logo": "https://images.kiwi.com/airlines/64/TROPOCEAN.png"
  },
  "Jota Aviation": {
    "id": "ENZ",
    "lcc": "None",
    "name": "Jota Aviation",
    "logo": "https://images.kiwi.com/airlines/64/ENZ.png"
  },
  "Air Tahiti Nui": {
    "id": "TN",
    "lcc": "0",
    "name": "Air Tahiti Nui",
    "logo": "https://images.kiwi.com/airlines/64/TN.png"
  },
  "Regiojet Bus": {
    "id": "REGIOJETB",
    "lcc": "0",
    "name": "Regiojet Bus",
    "logo": "https://images.kiwi.com/airlines/64/REGIOJETB.png"
  },
  "Southjet": {
    "id": "76",
    "lcc": "0",
    "name": "Southjet",
    "logo": "https://images.kiwi.com/airlines/64/76.png"
  },
  "Southjet connect": {
    "id": "77",
    "lcc": "0",
    "name": "Southjet connect",
    "logo": "https://images.kiwi.com/airlines/64/77.png"
  },
  "Avianova (Russia)": {
    "id": "AO",
    "lcc": "0",
    "name": "Avianova (Russia)",
    "logo": "https://images.kiwi.com/airlines/64/AO.png"
  },
  "Pascan Aviation": {
    "id": "P6",
    "lcc": "0",
    "name": "Pascan Aviation",
    "logo": "https://images.kiwi.com/airlines/64/P6.png"
  },
  "CM Airlines": {
    "id": "CC",
    "lcc": "0",
    "name": "CM Airlines",
    "logo": "https://images.kiwi.com/airlines/64/CC.png"
  },
  "Air Malta": {
    "id": "KM",
    "lcc": "0",
    "name": "Air Malta",
    "logo": "https://images.kiwi.com/airlines/64/KM.png"
  },
  "Aurigny Air Services": {
    "id": "GR",
    "lcc": "0",
    "name": "Aurigny Air Services",
    "logo": "https://images.kiwi.com/airlines/64/GR.png"
  },
  "Air Afrique": {
    "id": "RK",
    "lcc": "0",
    "name": "Air Afrique",
    "logo": "https://images.kiwi.com/airlines/64/RK.png"
  },
  "Laser Air": {
    "id": "QL",
    "lcc": "1",
    "name": "Laser Air",
    "logo": "https://images.kiwi.com/airlines/64/QL.png"
  },
  "BA CityFlyer": {
    "id": "CJ",
    "lcc": "0",
    "name": "BA CityFlyer",
    "logo": "https://images.kiwi.com/airlines/64/CJ.png"
  },
  "Colgan Air": {
    "id": "9L",
    "lcc": "0",
    "name": "Colgan Air",
    "logo": "https://images.kiwi.com/airlines/64/9L.png"
  },
  "Comair": {
    "id": "OH",
    "lcc": "0",
    "name": "Comair",
    "logo": "https://images.kiwi.com/airlines/64/OH.png"
  },
  "Mango": {
    "id": "JE",
    "lcc": "1",
    "name": "Mango",
    "logo": "https://images.kiwi.com/airlines/64/JE.png"
  },
  "Thai Airways": {
    "id": "TG",
    "lcc": "0",
    "name": "Thai Airways",
    "logo": "https://images.kiwi.com/airlines/64/TG.png"
  },
  "Vietnam Airlines": {
    "id": "VN",
    "lcc": "0",
    "name": "Vietnam Airlines",
    "logo": "https://images.kiwi.com/airlines/64/VN.png"
  },
  "Boliviana de Aviación": {
    "id": "OB",
    "lcc": "1",
    "name": "Boliviana de Aviación",
    "logo": "https://images.kiwi.com/airlines/64/OB.png"
  },
  "Austrian Airlines": {
    "id": "OS",
    "lcc": "0",
    "name": "Austrian Airlines",
    "logo": "https://images.kiwi.com/airlines/64/OS.png"
  },
  "Cinnamon Air": {
    "id": "C7",
    "lcc": "1",
    "name": "Cinnamon Air",
    "logo": "https://images.kiwi.com/airlines/64/C7.png"
  },
  "VivaAerobus": {
    "id": "VB",
    "lcc": "1",
    "name": "VivaAerobus",
    "logo": "https://images.kiwi.com/airlines/64/VB.png"
  },
  "Air Europa": {
    "id": "UX",
    "lcc": "0",
    "name": "Air Europa",
    "logo": "https://images.kiwi.com/airlines/64/UX.png"
  },
  "Ryanair": {
    "id": "FR",
    "lcc": "1",
    "name": "Ryanair",
    "logo": "https://images.kiwi.com/airlines/64/FR.png"
  },
  "Air Namibia": {
    "id": "SW",
    "lcc": "0",
    "name": "Air Namibia",
    "logo": "https://images.kiwi.com/airlines/64/SW.png"
  },
  "WOW air": {
    "id": "WW",
    "lcc": "1",
    "name": "WOW air",
    "logo": "https://images.kiwi.com/airlines/64/WW.png"
  },
  "Susi Air": {
    "id": "SQS",
    "lcc": "None",
    "name": "Susi Air",
    "logo": "https://images.kiwi.com/airlines/64/SQS.png"
  },
  "Horizon Air": {
    "id": "QX",
    "lcc": "0",
    "name": "Horizon Air",
    "logo": "https://images.kiwi.com/airlines/64/QX.png"
  },
  "Proflight Zambia": {
    "id": "P0",
    "lcc": "0",
    "name": "Proflight Zambia",
    "logo": "https://images.kiwi.com/airlines/64/P0.png"
  },
  "South African Airways": {
    "id": "SA",
    "lcc": "0",
    "name": "South African Airways",
    "logo": "https://images.kiwi.com/airlines/64/SA.png"
  },
  "EuroAtlantic Airways": {
    "id": "YU",
    "lcc": "0",
    "name": "EuroAtlantic Airways",
    "logo": "https://images.kiwi.com/airlines/64/YU.png"
  },
  "Nordic Global Airlines": {
    "id": "NJ",
    "lcc": "0",
    "name": "Nordic Global Airlines",
    "logo": "https://images.kiwi.com/airlines/64/NJ.png"
  },
  "Central Mountain Air": {
    "id": "9M",
    "lcc": "0",
    "name": "Central Mountain Air",
    "logo": "https://images.kiwi.com/airlines/64/9M.png"
  },
  "Nettbuss": {
    "id": "NETTBUSS",
    "lcc": "None",
    "name": "Nettbuss",
    "logo": "https://images.kiwi.com/airlines/64/NETTBUSS.png"
  },
  "Aerolitoral": {
    "id": "5D",
    "lcc": "0",
    "name": "Aerolitoral",
    "logo": "https://images.kiwi.com/airlines/64/5D.png"
  },
  "Ollex (express)": {
    "id": "OLLEX",
    "lcc": "None",
    "name": "Ollex (express)",
    "logo": "https://images.kiwi.com/airlines/64/OLLEX.png"
  },
  "EasyFly": {
    "id": "EF",
    "lcc": "1",
    "name": "EasyFly",
    "logo": "https://images.kiwi.com/airlines/64/EF.png"
  },
  "KrasAvia": {
    "id": "KI",
    "lcc": "1",
    "name": "KrasAvia",
    "logo": "https://images.kiwi.com/airlines/64/KI.png"
  },
  "LATAM Ecuador": {
    "id": "XL",
    "lcc": "0",
    "name": "LATAM Ecuador",
    "logo": "https://images.kiwi.com/airlines/64/XL.png"
  },
  "Carpatair": {
    "id": "V3",
    "lcc": "0",
    "name": "Carpatair",
    "logo": "https://images.kiwi.com/airlines/64/V3.png"
  },
  "Rossiya": {
    "id": "R4",
    "lcc": "0",
    "name": "Rossiya",
    "logo": "https://images.kiwi.com/airlines/64/R4.png"
  },
  "Air Mandalay": {
    "id": "6T",
    "lcc": "1",
    "name": "Air Mandalay",
    "logo": "https://images.kiwi.com/airlines/64/6T.png"
  },
  "Estelar Latinoamerica": {
    "id": "ES",
    "lcc": "0",
    "name": "Estelar Latinoamerica",
    "logo": "https://images.kiwi.com/airlines/64/ES.png"
  },
  "Pawa Dominicana": {
    "id": "7N",
    "lcc": "0",
    "name": "Pawa Dominicana",
    "logo": "https://images.kiwi.com/airlines/64/7N.png"
  },
  "Ural Airlines": {
    "id": "U6",
    "lcc": "1",
    "name": "Ural Airlines",
    "logo": "https://images.kiwi.com/airlines/64/U6.png"
  },
  "SNCF": {
    "id": "2C",
    "lcc": "0",
    "name": "SNCF",
    "logo": "https://images.kiwi.com/airlines/64/2C.png"
  },
  "Edelweiss Air": {
    "id": "WK",
    "lcc": "0",
    "name": "Edelweiss Air",
    "logo": "https://images.kiwi.com/airlines/64/WK.png"
  },
  "Avanti Air": {
    "id": "ATV",
    "lcc": "None",
    "name": "Avanti Air",
    "logo": "https://images.kiwi.com/airlines/64/ATV.png"
  },
  "Air Burkina": {
    "id": "2J",
    "lcc": "0",
    "name": "Air Burkina",
    "logo": "https://images.kiwi.com/airlines/64/2J.png"
  },
  "Air Europa express": {
    "id": "X5",
    "lcc": "None",
    "name": "Air Europa express",
    "logo": "https://images.kiwi.com/airlines/64/X5.png"
  },
  "Southwest Airlines": {
    "id": "WN",
    "lcc": "1",
    "name": "Southwest Airlines",
    "logo": "https://images.kiwi.com/airlines/64/WN.png"
  },
  "CityBusExpress": {
    "id": "CITYBUSEXP",
    "lcc": "None",
    "name": "CityBusExpress",
    "logo": "https://images.kiwi.com/airlines/64/CITYBUSEXP.png"
  },
  "Domo Swiss Express": {
    "id": "DOMO",
    "lcc": "None",
    "name": "Domo Swiss Express",
    "logo": "https://images.kiwi.com/airlines/64/DOMO.png"
  },
  "Wagner Transport": {
    "id": "WAGNERTRNS",
    "lcc": "None",
    "name": "Wagner Transport",
    "logo": "https://images.kiwi.com/airlines/64/WAGNERTRNS.png"
  },
  "Marozzi": {
    "id": "MAROZZI",
    "lcc": "None",
    "name": "Marozzi",
    "logo": "https://images.kiwi.com/airlines/64/MAROZZI.png"
  },
  "Spirit Airlines": {
    "id": "NK",
    "lcc": "1",
    "name": "Spirit Airlines",
    "logo": "https://images.kiwi.com/airlines/64/NK.png"
  },
  "Aegean": {
    "id": "A3",
    "lcc": "1",
    "name": "Aegean",
    "logo": "https://images.kiwi.com/airlines/64/A3.png"
  },
  "Air Cairo": {
    "id": "SM",
    "lcc": "1",
    "name": "Air Cairo",
    "logo": "https://images.kiwi.com/airlines/64/SM.png"
  },
  "SaudiGulf Airlines": {
    "id": "6S",
    "lcc": "0",
    "name": "SaudiGulf Airlines",
    "logo": "https://images.kiwi.com/airlines/64/6S.png"
  },
  "Kunming Airlines": {
    "id": "KY",
    "lcc": "0",
    "name": "Kunming Airlines",
    "logo": "https://images.kiwi.com/airlines/64/KY.png"
  },
  "Wingo airlines": {
    "id": "P5",
    "lcc": "0",
    "name": "Wingo airlines",
    "logo": "https://images.kiwi.com/airlines/64/P5.png"
  },
  "Mombasa Air Safari": {
    "id": "RRV",
    "lcc": "None",
    "name": "Mombasa Air Safari",
    "logo": "https://images.kiwi.com/airlines/64/RRV.png"
  },
  "Air Jiangxi": {
    "id": "RY",
    "lcc": "1",
    "name": "Air Jiangxi",
    "logo": "https://images.kiwi.com/airlines/64/RY.png"
  },
  "Amaszonas Uruguay": {
    "id": "Z7",
    "lcc": "1",
    "name": "Amaszonas Uruguay",
    "logo": "https://images.kiwi.com/airlines/64/Z7.png"
  },
  "Skyward Express Limited": {
    "id": "OW",
    "lcc": "None",
    "name": "Skyward Express Limited",
    "logo": "https://images.kiwi.com/airlines/64/OW.png"
  },
  "Globtour": {
    "id": "GLOBTOUR",
    "lcc": "None",
    "name": "Globtour",
    "logo": "https://images.kiwi.com/airlines/64/GLOBTOUR.png"
  },
  "Gobus": {
    "id": "GOBUS",
    "lcc": "None",
    "name": "Gobus",
    "logo": "https://images.kiwi.com/airlines/64/GOBUS.png"
  },
  "Galicja Express": {
    "id": "GALICJAEX",
    "lcc": "None",
    "name": "Galicja Express",
    "logo": "https://images.kiwi.com/airlines/64/GALICJAEX.png"
  },
  "Bus4You": {
    "id": "BUS4YOU",
    "lcc": "None",
    "name": "Bus4You",
    "logo": "https://images.kiwi.com/airlines/64/BUS4YOU.png"
  },
  "Arriva": {
    "id": "ARRIVA",
    "lcc": "None",
    "name": "Arriva",
    "logo": "https://images.kiwi.com/airlines/64/ARRIVA.png"
  },
  "Busplana": {
    "id": "BUSPLANA",
    "lcc": "None",
    "name": "Busplana",
    "logo": "https://images.kiwi.com/airlines/64/BUSPLANA.png"
  },
  "Skanetrafiken": {
    "id": "SKANETRAF",
    "lcc": "None",
    "name": "Skanetrafiken",
    "logo": "https://images.kiwi.com/airlines/64/SKANETRAF.png"
  },
  "NSB": {
    "id": "NSB",
    "lcc": "None",
    "name": "NSB",
    "logo": "https://images.kiwi.com/airlines/64/NSB.png"
  },
  "Vasttrafik": {
    "id": "VASTTRAF",
    "lcc": "None",
    "name": "Vasttrafik",
    "logo": "https://images.kiwi.com/airlines/64/VASTTRAF.png"
  },
  "Harbour Air (Priv)": {
    "id": "H3",
    "lcc": "0",
    "name": "Harbour Air (Priv)",
    "logo": "https://images.kiwi.com/airlines/64/H3.png"
  },
  "LT Kronoberg": {
    "id": "LTKRONOTRN",
    "lcc": "None",
    "name": "LT Kronoberg",
    "logo": "https://images.kiwi.com/airlines/64/LTKRONOTRN.png"
  },
  "Blue Sky Aviation": {
    "id": "SBK",
    "lcc": "None",
    "name": "Blue Sky Aviation",
    "logo": "https://images.kiwi.com/airlines/64/SBK.png"
  },
  "Skyway CR": {
    "id": "GCS",
    "lcc": "None",
    "name": "Skyway CR",
    "logo": "https://images.kiwi.com/airlines/64/GCS.png"
  },
  "Fly Ulendo": {
    "id": "ULENDO",
    "lcc": "None",
    "name": "Fly Ulendo",
    "logo": "https://images.kiwi.com/airlines/64/ULENDO.png"
  },
  "Governors Aviation": {
    "id": "GOVERNORS",
    "lcc": "None",
    "name": "Governors Aviation",
    "logo": "https://images.kiwi.com/airlines/64/GOVERNORS.png"
  },
  "Blue Bird Airways": {
    "id": "BZ",
    "lcc": "0",
    "name": "Blue Bird Airways",
    "logo": "https://images.kiwi.com/airlines/64/BZ.png"
  },
  "Air Flamenco": {
    "id": "F4",
    "lcc": "None",
    "name": "Air Flamenco",
    "logo": "https://images.kiwi.com/airlines/64/F4.png"
  },
  "Stewart Island Flights": {
    "id": "STEWISLAND",
    "lcc": "None",
    "name": "Stewart Island Flights",
    "logo": "https://images.kiwi.com/airlines/64/STEWISLAND.png"
  },
  "Air Loyaute": {
    "id": "RLY",
    "lcc": "None",
    "name": "Air Loyaute",
    "logo": "https://images.kiwi.com/airlines/64/RLY.png"
  },
  "Divi Divi Air": {
    "id": "DVR",
    "lcc": "None",
    "name": "Divi Divi Air",
    "logo": "https://images.kiwi.com/airlines/64/DVR.png"
  },
  "TGV Lyria": {
    "id": "TGVLYRIA",
    "lcc": "None",
    "name": "TGV Lyria",
    "logo": "https://images.kiwi.com/airlines/64/TGVLYRIA.png"
  },
  "Thello": {
    "id": "THELLO",
    "lcc": "None",
    "name": "Thello",
    "logo": "https://images.kiwi.com/airlines/64/THELLO.png"
  },
  "Grumeti Air": {
    "id": "GRUMAIR",
    "lcc": "None",
    "name": "Grumeti Air",
    "logo": "https://images.kiwi.com/airlines/64/GRUMAIR.png"
  },
  "Thalys": {
    "id": "THALYS",
    "lcc": "None",
    "name": "Thalys",
    "logo": "https://images.kiwi.com/airlines/64/THALYS.png"
  },
  "Orange2Fly": {
    "id": "O4",
    "lcc": "None",
    "name": "Orange2Fly",
    "logo": "https://images.kiwi.com/airlines/64/O4.png"
  },
  "Sky Pasada": {
    "id": "SKYPASADA",
    "lcc": "None",
    "name": "Sky Pasada",
    "logo": "https://images.kiwi.com/airlines/64/SKYPASADA.png"
  },
  "NS": {
    "id": "NSI",
    "lcc": "None",
    "name": "NS",
    "logo": "https://images.kiwi.com/airlines/64/NSI.png"
  },
  "Russian Railways ": {
    "id": "RZD",
    "lcc": "None",
    "name": "Russian Railways ",
    "logo": "https://images.kiwi.com/airlines/64/RZD.png"
  },
  "Amtrak train ": {
    "id": "AMTRAKT",
    "lcc": "None",
    "name": "Amtrak train ",
    "logo": "https://images.kiwi.com/airlines/64/AMTRAKT.png"
  },
  "Air Botswana": {
    "id": "BP",
    "lcc": "0",
    "name": "Air Botswana",
    "logo": "https://images.kiwi.com/airlines/64/BP.png"
  },
  "Royal Brunei Airlines": {
    "id": "BI",
    "lcc": "0",
    "name": "Royal Brunei Airlines",
    "logo": "https://images.kiwi.com/airlines/64/BI.png"
  },
  "Belarusian Railway": {
    "id": "BELARURAIL",
    "lcc": "None",
    "name": "Belarusian Railway",
    "logo": "https://images.kiwi.com/airlines/64/BELARURAIL.png"
  },
  "Grand Express": {
    "id": "GRANDEXP",
    "lcc": "None",
    "name": "Grand Express",
    "logo": "https://images.kiwi.com/airlines/64/GRANDEXP.png"
  },
  "Comboios de Portugal": {
    "id": "COMBOIOS",
    "lcc": "None",
    "name": "Comboios de Portugal",
    "logo": "https://images.kiwi.com/airlines/64/COMBOIOS.png"
  },
  "MAV": {
    "id": "MAV",
    "lcc": "None",
    "name": "MAV",
    "logo": "https://images.kiwi.com/airlines/64/MAV.png"
  },
  "SBB": {
    "id": "SBB",
    "lcc": "None",
    "name": "SBB",
    "logo": "https://images.kiwi.com/airlines/64/SBB.png"
  },
  "ATRAN Cargo Airlines": {
    "id": "V8",
    "lcc": "0",
    "name": "ATRAN Cargo Airlines",
    "logo": "https://images.kiwi.com/airlines/64/V8.png"
  },
  "Air Marshall Islands": {
    "id": "CW",
    "lcc": "0",
    "name": "Air Marshall Islands",
    "logo": "https://images.kiwi.com/airlines/64/CW.png"
  },
  " Aero4M": {
    "id": "AEH",
    "lcc": "None",
    "name": " Aero4M",
    "logo": "https://images.kiwi.com/airlines/64/AEH.png"
  },
  "Eilat Shuttle": {
    "id": "EILAT",
    "lcc": "None",
    "name": "Eilat Shuttle",
    "logo": "https://images.kiwi.com/airlines/64/EILAT.png"
  },
  "Zambezi Airlines (ZMA)": {
    "id": "ZJ",
    "lcc": "0",
    "name": "Zambezi Airlines (ZMA)",
    "logo": "https://images.kiwi.com/airlines/64/ZJ.png"
  },
  "Georgian Bus": {
    "id": "GEORGIBUS",
    "lcc": "None",
    "name": "Georgian Bus",
    "logo": "https://images.kiwi.com/airlines/64/GEORGIBUS.png"
  },
  "Navette de Vatry": {
    "id": "NAVETTE",
    "lcc": "None",
    "name": "Navette de Vatry",
    "logo": "https://images.kiwi.com/airlines/64/NAVETTE.png"
  },
  "Follow me! Interglobus": {
    "id": "INTERGLOB",
    "lcc": "None",
    "name": "Follow me! Interglobus",
    "logo": "https://images.kiwi.com/airlines/64/INTERGLOB.png"
  },
  "Miccolis": {
    "id": "MICCOLIS",
    "lcc": "None",
    "name": "Miccolis",
    "logo": "https://images.kiwi.com/airlines/64/MICCOLIS.png"
  },
  "Cilento": {
    "id": "CILENTO",
    "lcc": "None",
    "name": "Cilento",
    "logo": "https://images.kiwi.com/airlines/64/CILENTO.png"
  },
  "APG Airlines": {
    "id": "GP",
    "lcc": "0",
    "name": "APG Airlines",
    "logo": "https://images.kiwi.com/airlines/64/GP.png"
  },
  "S7 Airlines": {
    "id": "S7",
    "lcc": "0",
    "name": "S7 Airlines",
    "logo": "https://images.kiwi.com/airlines/64/S7.png"
  },
  "Mokulele Flight Service": {
    "id": "MW",
    "lcc": "0",
    "name": "Mokulele Flight Service",
    "logo": "https://images.kiwi.com/airlines/64/MW.png"
  },
  "Fly Tristar Services": {
    "id": "FLYTRISTAR",
    "lcc": "None",
    "name": "Fly Tristar Services",
    "logo": "https://images.kiwi.com/airlines/64/FLYTRISTAR.png"
  },
  "Primera Air Nordic": {
    "id": "6F",
    "lcc": "1",
    "name": "Primera Air Nordic",
    "logo": "https://images.kiwi.com/airlines/64/6F.png"
  },
  "Amaszonas del Paraguay S.A. Lineas Aereas": {
    "id": "ZP",
    "lcc": "0",
    "name": "Amaszonas del Paraguay S.A. Lineas Aereas",
    "logo": "https://images.kiwi.com/airlines/64/ZP.png"
  },
  "Emetebe Airlines": {
    "id": "EMT",
    "lcc": "None",
    "name": "Emetebe Airlines",
    "logo": "https://images.kiwi.com/airlines/64/EMT.png"
  },
  "As Salaam Air": {
    "id": "ASSALAAM",
    "lcc": "None",
    "name": "As Salaam Air",
    "logo": "https://images.kiwi.com/airlines/64/ASSALAAM.png"
  },
  "Silverstone Air": {
    "id": "K5",
    "lcc": "0",
    "name": "Silverstone Air",
    "logo": "https://images.kiwi.com/airlines/64/K5.png"
  },
  "AB Aviation": {
    "id": "Y6",
    "lcc": "None",
    "name": "AB Aviation",
    "logo": "https://images.kiwi.com/airlines/64/Y6.png"
  },
  "Unity Air": {
    "id": "FKK",
    "lcc": "None",
    "name": "Unity Air",
    "logo": "https://images.kiwi.com/airlines/64/FKK.png"
  },
  "Eurostar": {
    "id": "EUROSTAR",
    "lcc": "None",
    "name": "Eurostar",
    "logo": "https://images.kiwi.com/airlines/64/EUROSTAR.png"
  },
  "Fly Safari Airlink": {
    "id": "FLYSAFARI",
    "lcc": "None",
    "name": "Fly Safari Airlink",
    "logo": "https://images.kiwi.com/airlines/64/FLYSAFARI.png"
  },
  "Rhônexpress": {
    "id": "RHONEXP",
    "lcc": "None",
    "name": "Rhônexpress",
    "logo": "https://images.kiwi.com/airlines/64/RHONEXP.png"
  },
  "Caspian Airlines": {
    "id": "RV",
    "lcc": "0",
    "name": "Caspian Airlines",
    "logo": "https://images.kiwi.com/airlines/64/RV.png"
  },
  "Centralwings": {
    "id": "C0",
    "lcc": "0",
    "name": "Centralwings",
    "logo": "https://images.kiwi.com/airlines/64/C0.png"
  },
  "Golden Myanmar Airlines": {
    "id": "Y5",
    "lcc": "1",
    "name": "Golden Myanmar Airlines",
    "logo": "https://images.kiwi.com/airlines/64/Y5.png"
  },
  "Yeti Airways": {
    "id": "YT",
    "lcc": "0",
    "name": "Yeti Airways",
    "logo": "https://images.kiwi.com/airlines/64/YT.png"
  },
  "SMS Flughafen": {
    "id": "SMSFLUG",
    "lcc": "None",
    "name": "SMS Flughafen",
    "logo": "https://images.kiwi.com/airlines/64/SMSFLUG.png"
  },
  "Minibud Ltd.": {
    "id": "MINIBUD",
    "lcc": "None",
    "name": "Minibud Ltd.",
    "logo": "https://images.kiwi.com/airlines/64/MINIBUD.png"
  },
  "Flightlink": {
    "id": "FLZ",
    "lcc": "None",
    "name": "Flightlink",
    "logo": "https://images.kiwi.com/airlines/64/FLZ.png"
  },
  "Madagasikara Airways": {
    "id": "7D",
    "lcc": "None",
    "name": "Madagasikara Airways",
    "logo": "https://images.kiwi.com/airlines/64/7D.png"
  },
  "Grenadine Airways": {
    "id": "GRENADINE",
    "lcc": "None",
    "name": "Grenadine Airways",
    "logo": "https://images.kiwi.com/airlines/64/GRENADINE.png"
  },
  "Aerobus Lisbon": {
    "id": "AEROBUSLIS",
    "lcc": "None",
    "name": "Aerobus Lisbon",
    "logo": "https://images.kiwi.com/airlines/64/AEROBUSLIS.png"
  },
  "CFL": {
    "id": "CFLT",
    "lcc": "None",
    "name": "CFL",
    "logo": "https://images.kiwi.com/airlines/64/CFLT.png"
  },
  "Megabus": {
    "id": "MEGABUS",
    "lcc": "None",
    "name": "Megabus",
    "logo": "https://images.kiwi.com/airlines/64/MEGABUS.png"
  },
  "Get Bus": {
    "id": "GETBUS",
    "lcc": "None",
    "name": "Get Bus",
    "logo": "https://images.kiwi.com/airlines/64/GETBUS.png"
  },
  "Sit Bus Shuttle": {
    "id": "SITBUS",
    "lcc": "None",
    "name": "Sit Bus Shuttle",
    "logo": "https://images.kiwi.com/airlines/64/SITBUS.png"
  },
  "Air Changan": {
    "id": "9H",
    "lcc": "0",
    "name": "Air Changan",
    "logo": "https://images.kiwi.com/airlines/64/9H.png"
  },
  "Wasaya Airways": {
    "id": "WT",
    "lcc": "None",
    "name": "Wasaya Airways",
    "logo": "https://images.kiwi.com/airlines/64/WT.png"
  },
  "Bhutan Airlines": {
    "id": "B3",
    "lcc": "0",
    "name": "Bhutan Airlines",
    "logo": "https://images.kiwi.com/airlines/64/B3.png"
  },
  "Amtrak bus": {
    "id": "AMTRAKB",
    "lcc": "None",
    "name": "Amtrak bus",
    "logo": "https://images.kiwi.com/airlines/64/AMTRAKB.png"
  },
  "100Rumos": {
    "id": "100RUMOS",
    "lcc": "None",
    "name": "100Rumos",
    "logo": "https://images.kiwi.com/airlines/64/100RUMOS.png"
  },
  "Hoosier ride": {
    "id": "HOOSIER",
    "lcc": "None",
    "name": "Hoosier ride",
    "logo": "https://images.kiwi.com/airlines/64/HOOSIER.png"
  },
  "DSB": {
    "id": "DSB",
    "lcc": "None",
    "name": "DSB",
    "logo": "https://images.kiwi.com/airlines/64/DSB.png"
  },
  "Great Dane Airlines": {
    "id": "GDE",
    "lcc": "None",
    "name": "Great Dane Airlines",
    "logo": "https://images.kiwi.com/airlines/64/GDE.png"
  },
  "QuickLlama": {
    "id": "QUICKLLAMA",
    "lcc": "None",
    "name": "QuickLlama",
    "logo": "https://images.kiwi.com/airlines/64/QUICKLLAMA.png"
  },
  "Skytrans": {
    "id": "QN",
    "lcc": "None",
    "name": "Skytrans",
    "logo": "https://images.kiwi.com/airlines/64/QN.png"
  },
  "Salt Lake Express": {
    "id": "SALTLAKEEX",
    "lcc": "None",
    "name": "Salt Lake Express",
    "logo": "https://images.kiwi.com/airlines/64/SALTLAKEEX.png"
  },
  "Adirondack Trailways": {
    "id": "ADIRONDACK",
    "lcc": "None",
    "name": "Adirondack Trailways",
    "logo": "https://images.kiwi.com/airlines/64/ADIRONDACK.png"
  },
  "Avies": {
    "id": "U3",
    "lcc": "0",
    "name": "Avies",
    "logo": "https://images.kiwi.com/airlines/64/U3.png"
  },
  "Fly Ais Airlines": {
    "id": "IS",
    "lcc": "0",
    "name": "Fly Ais Airlines",
    "logo": "https://images.kiwi.com/airlines/64/IS.png"
  },
  "Azerbaijan Airlines": {
    "id": "J2",
    "lcc": "0",
    "name": "Azerbaijan Airlines",
    "logo": "https://images.kiwi.com/airlines/64/J2.png"
  },
  "Icelandair": {
    "id": "FI",
    "lcc": "0",
    "name": "Icelandair",
    "logo": "https://images.kiwi.com/airlines/64/FI.png"
  },
  "Pelican Airlines": {
    "id": "FP",
    "lcc": "0",
    "name": "Pelican Airlines",
    "logo": "https://images.kiwi.com/airlines/64/FP.png"
  },
  "Aerolink Uganda": {
    "id": "A8",
    "lcc": "None",
    "name": "Aerolink Uganda",
    "logo": "https://images.kiwi.com/airlines/64/A8.png"
  },
  "CR Aviation": {
    "id": "CRAVIATION",
    "lcc": "None",
    "name": "CR Aviation",
    "logo": "https://images.kiwi.com/airlines/64/CRAVIATION.png"
  },
  "Air Excel Limited": {
    "id": "XLL",
    "lcc": "None",
    "name": "Air Excel Limited",
    "logo": "https://images.kiwi.com/airlines/64/XLL.png"
  },
  "Fly Baghdad Airlines": {
    "id": "IF",
    "lcc": "0",
    "name": "Fly Baghdad Airlines",
    "logo": "https://images.kiwi.com/airlines/64/IF.png"
  },
  "Airport Supersaver": {
    "id": "ARPTSUPERS",
    "lcc": "None",
    "name": "Airport Supersaver",
    "logo": "https://images.kiwi.com/airlines/64/ARPTSUPERS.png"
  },
  "Shandong Airlines": {
    "id": "SC",
    "lcc": "0",
    "name": "Shandong Airlines",
    "logo": "https://images.kiwi.com/airlines/64/SC.png"
  },
  "Yakutia Airlines": {
    "id": "R3",
    "lcc": "1",
    "name": "Yakutia Airlines",
    "logo": "https://images.kiwi.com/airlines/64/R3.png"
  },
  "Prestia e Comande": {
    "id": "PRESTIA",
    "lcc": "None",
    "name": "Prestia e Comande",
    "logo": "https://images.kiwi.com/airlines/64/PRESTIA.png"
  },
  "Beauvaisbus": {
    "id": "BEAUVAIS",
    "lcc": "None",
    "name": "Beauvaisbus",
    "logo": "https://images.kiwi.com/airlines/64/BEAUVAIS.png"
  },
  "Flybus Iceland": {
    "id": "FLYBUS",
    "lcc": "None",
    "name": "Flybus Iceland",
    "logo": "https://images.kiwi.com/airlines/64/FLYBUS.png"
  },
  "Airport Bus Express": {
    "id": "AIRBEXP",
    "lcc": "None",
    "name": "Airport Bus Express",
    "logo": "https://images.kiwi.com/airlines/64/AIRBEXP.png"
  },
  "RACSA": {
    "id": "R6",
    "lcc": "0",
    "name": "RACSA",
    "logo": "https://images.kiwi.com/airlines/64/R6.png"
  },
  "Republic Airlines": {
    "id": "RW",
    "lcc": "0",
    "name": "Republic Airlines",
    "logo": "https://images.kiwi.com/airlines/64/RW.png"
  },
  "Skyways Express": {
    "id": "JZ",
    "lcc": "0",
    "name": "Skyways Express",
    "logo": "https://images.kiwi.com/airlines/64/JZ.png"
  },
  "Thai Air Cargo": {
    "id": "T2",
    "lcc": "0",
    "name": "Thai Air Cargo",
    "logo": "https://images.kiwi.com/airlines/64/T2.png"
  },
  "CanXplorer": {
    "id": "C2",
    "lcc": "0",
    "name": "CanXplorer",
    "logo": "https://images.kiwi.com/airlines/64/C2.png"
  },
  "Virginia Breeze": {
    "id": "VIRGINIABR",
    "lcc": "None",
    "name": "Virginia Breeze",
    "logo": "https://images.kiwi.com/airlines/64/VIRGINIABR.png"
  },
  "NYC Airporter": {
    "id": "NYCAIRPORT",
    "lcc": "None",
    "name": "NYC Airporter",
    "logo": "https://images.kiwi.com/airlines/64/NYCAIRPORT.png"
  },
  "Michael Airlines": {
    "id": "DF",
    "lcc": "0",
    "name": "Michael Airlines",
    "logo": "https://images.kiwi.com/airlines/64/DF.png"
  },
  "40-Mile Air": {
    "id": "Q5",
    "lcc": "0",
    "name": "40-Mile Air",
    "logo": "https://images.kiwi.com/airlines/64/Q5.png"
  },
  "Air Japan": {
    "id": "NQ",
    "lcc": "0",
    "name": "Air Japan",
    "logo": "https://images.kiwi.com/airlines/64/NQ.png"
  },
  "Iran Aseman Airlines": {
    "id": "EP",
    "lcc": "0",
    "name": "Iran Aseman Airlines",
    "logo": "https://images.kiwi.com/airlines/64/EP.png"
  },
  "Solomon Airlines": {
    "id": "IE",
    "lcc": "0",
    "name": "Solomon Airlines",
    "logo": "https://images.kiwi.com/airlines/64/IE.png"
  },
  "Sharp Airlines": {
    "id": "SH",
    "lcc": "0",
    "name": "Sharp Airlines",
    "logo": "https://images.kiwi.com/airlines/64/SH.png"
  },
  "Park's of Hamilton": {
    "id": "PARKSOFHAM",
    "lcc": "None",
    "name": "Park's of Hamilton",
    "logo": "https://images.kiwi.com/airlines/64/PARKSOFHAM.png"
  },
  "Aerovías DAP": {
    "id": "V5",
    "lcc": "0",
    "name": "Aerovías DAP",
    "logo": "https://images.kiwi.com/airlines/64/V5.png"
  },
  "Air Kiribati": {
    "id": "4A",
    "lcc": "0",
    "name": "Air Kiribati",
    "logo": "https://images.kiwi.com/airlines/64/4A.png"
  },
  "Turkmenistan Airlines": {
    "id": "T5",
    "lcc": "0",
    "name": "Turkmenistan Airlines",
    "logo": "https://images.kiwi.com/airlines/64/T5.png"
  },
  "Vladivostok Air": {
    "id": "XF",
    "lcc": "0",
    "name": "Vladivostok Air",
    "logo": "https://images.kiwi.com/airlines/64/XF.png"
  },
  "Varig Log": {
    "id": "LC",
    "lcc": "0",
    "name": "Varig Log",
    "logo": "https://images.kiwi.com/airlines/64/LC.png"
  },
  "Windrose Airlines": {
    "id": "7W",
    "lcc": "0",
    "name": "Windrose Airlines",
    "logo": "https://images.kiwi.com/airlines/64/7W.png"
  },
  "ASKY Airlines": {
    "id": "KP",
    "lcc": "0",
    "name": "ASKY Airlines",
    "logo": "https://images.kiwi.com/airlines/64/KP.png"
  },
  "PKP Intercity": {
    "id": "PKP",
    "lcc": "None",
    "name": "PKP Intercity",
    "logo": "https://images.kiwi.com/airlines/64/PKP.png"
  },
  "Ernest Airlines": {
    "id": "EG",
    "lcc": "0",
    "name": "Ernest Airlines",
    "logo": "https://images.kiwi.com/airlines/64/EG.png"
  },
  "Maltatransfer": {
    "id": "MALTATRANS",
    "lcc": "None",
    "name": "Maltatransfer",
    "logo": "https://images.kiwi.com/airlines/64/MALTATRANS.png"
  },
  "America West Airlines": {
    "id": "HP",
    "lcc": "0",
    "name": "America West Airlines",
    "logo": "https://images.kiwi.com/airlines/64/HP.png"
  },
  "Etihad Regional": {
    "id": "F7",
    "lcc": "0",
    "name": "Etihad Regional",
    "logo": "https://images.kiwi.com/airlines/64/F7.png"
  },
  "Israir": {
    "id": "6H",
    "lcc": "0",
    "name": "Israir",
    "logo": "https://images.kiwi.com/airlines/64/6H.png"
  },
  "Scoot - old": {
    "id": "TZ",
    "lcc": "1",
    "name": "Scoot - old",
    "logo": "https://images.kiwi.com/airlines/64/TZ.png"
  },
  "Avianca Honduras": {
    "id": "WC",
    "lcc": "0",
    "name": "Avianca Honduras",
    "logo": "https://images.kiwi.com/airlines/64/WC.png"
  },
  "Alsie Express": {
    "id": "6I",
    "lcc": "0",
    "name": "Alsie Express",
    "logo": "https://images.kiwi.com/airlines/64/6I.png"
  },
  "Jet Konnect": {
    "id": "S2",
    "lcc": "0",
    "name": "Jet Konnect",
    "logo": "https://images.kiwi.com/airlines/64/S2.png"
  },
  "Batik Air": {
    "id": "ID",
    "lcc": "1",
    "name": "Batik Air",
    "logo": "https://images.kiwi.com/airlines/64/ID.png"
  },
  "Thai Vietjet": {
    "id": "VZ",
    "lcc": "0",
    "name": "Thai Vietjet",
    "logo": "https://images.kiwi.com/airlines/64/VZ.png"
  },
  "Iberia Express": {
    "id": "I2",
    "lcc": "0",
    "name": "Iberia Express",
    "logo": "https://images.kiwi.com/airlines/64/I2.png"
  },
  "Uzbekistan Airways": {
    "id": "HY",
    "lcc": "0",
    "name": "Uzbekistan Airways",
    "logo": "https://images.kiwi.com/airlines/64/HY.png"
  },
  "BMC Aerobus": {
    "id": "BMCAEROBUS",
    "lcc": "None",
    "name": "BMC Aerobus",
    "logo": "https://images.kiwi.com/airlines/64/BMCAEROBUS.png"
  },
  "Astral Aviation": {
    "id": "8V",
    "lcc": "0",
    "name": "Astral Aviation",
    "logo": "https://images.kiwi.com/airlines/64/8V.png"
  },
  "Air Tindi": {
    "id": "8T",
    "lcc": "0",
    "name": "Air Tindi",
    "logo": "https://images.kiwi.com/airlines/64/8T.png"
  },
  "Air Wisconsin": {
    "id": "ZW",
    "lcc": "0",
    "name": "Air Wisconsin",
    "logo": "https://images.kiwi.com/airlines/64/ZW.png"
  },
  "Itek Air": {
    "id": "GI",
    "lcc": "0",
    "name": "Itek Air",
    "logo": "https://images.kiwi.com/airlines/64/GI.png"
  },
  "Beijing Capital Airlines": {
    "id": "JD",
    "lcc": "0",
    "name": "Beijing Capital Airlines",
    "logo": "https://images.kiwi.com/airlines/64/JD.png"
  },
  "Vision Airlines": {
    "id": "V2",
    "lcc": "0",
    "name": "Vision Airlines",
    "logo": "https://images.kiwi.com/airlines/64/V2.png"
  },
  "V Air": {
    "id": "ZV",
    "lcc": "1",
    "name": "V Air",
    "logo": "https://images.kiwi.com/airlines/64/ZV.png"
  },
  "Tatarstan Airlines": {
    "id": "U9",
    "lcc": "0",
    "name": "Tatarstan Airlines",
    "logo": "https://images.kiwi.com/airlines/64/U9.png"
  },
  "JAL Express": {
    "id": "JC",
    "lcc": "0",
    "name": "JAL Express",
    "logo": "https://images.kiwi.com/airlines/64/JC.png"
  },
  "Myanmar National Airlines": {
    "id": "UB",
    "lcc": "0",
    "name": "Myanmar National Airlines",
    "logo": "https://images.kiwi.com/airlines/64/UB.png"
  },
  "EasyJet (DS)": {
    "id": "DS",
    "lcc": "0",
    "name": "EasyJet (DS)",
    "logo": "https://images.kiwi.com/airlines/64/DS.png"
  },
  "Orbest": {
    "id": "6O",
    "lcc": "0",
    "name": "Orbest",
    "logo": "https://images.kiwi.com/airlines/64/6O.png"
  },
  "Air Creebec": {
    "id": "YN",
    "lcc": "0",
    "name": "Air Creebec",
    "logo": "https://images.kiwi.com/airlines/64/YN.png"
  },
  "LAM Mozambique Airlines": {
    "id": "TM",
    "lcc": "0",
    "name": "LAM Mozambique Airlines",
    "logo": "https://images.kiwi.com/airlines/64/TM.png"
  },
  "Federal Airlines": {
    "id": "7V",
    "lcc": "0",
    "name": "Federal Airlines",
    "logo": "https://images.kiwi.com/airlines/64/7V.png"
  },
  "Air Libert": {
    "id": "VD",
    "lcc": "0",
    "name": "Air Libert",
    "logo": "https://images.kiwi.com/airlines/64/VD.png"
  },
  "JALways": {
    "id": "JO",
    "lcc": "0",
    "name": "JALways",
    "logo": "https://images.kiwi.com/airlines/64/JO.png"
  },
  "Eurowings Europe": {
    "id": "E2",
    "lcc": "0",
    "name": "Eurowings Europe",
    "logo": "https://images.kiwi.com/airlines/64/E2.png"
  },
  "Provincial Airlines": {
    "id": "PB",
    "lcc": "0",
    "name": "Provincial Airlines",
    "logo": "https://images.kiwi.com/airlines/64/PB.png"
  },
  "Vieques Air Link": {
    "id": "V4",
    "lcc": "0",
    "name": "Vieques Air Link",
    "logo": "https://images.kiwi.com/airlines/64/V4.png"
  },
  "Regional Sky": {
    "id": "P1",
    "lcc": "0",
    "name": "Regional Sky",
    "logo": "https://images.kiwi.com/airlines/64/P1.png"
  },
  "VASCO": {
    "id": "0V",
    "lcc": "0",
    "name": "VASCO",
    "logo": "https://images.kiwi.com/airlines/64/0V.png"
  },
  "Air Niugini": {
    "id": "PX",
    "lcc": "0",
    "name": "Air Niugini",
    "logo": "https://images.kiwi.com/airlines/64/PX.png"
  },
  "Nomad Aviation": {
    "id": "N6",
    "lcc": "0",
    "name": "Nomad Aviation",
    "logo": "https://images.kiwi.com/airlines/64/N6.png"
  },
  "EWA Air": {
    "id": "ZD",
    "lcc": "0",
    "name": "EWA Air",
    "logo": "https://images.kiwi.com/airlines/64/ZD.png"
  },
  "Allied Air": {
    "id": "4W",
    "lcc": "0",
    "name": "Allied Air",
    "logo": "https://images.kiwi.com/airlines/64/4W.png"
  },
  "Ouigo": {
    "id": "OUIGO",
    "lcc": "0",
    "name": "Ouigo",
    "logo": "https://images.kiwi.com/airlines/64/OUIGO.png"
  },
  "Slovak rail": {
    "id": "ZSSK",
    "lcc": "None",
    "name": "Slovak rail",
    "logo": "https://images.kiwi.com/airlines/64/ZSSK.png"
  },
  "Air Mediterranee": {
    "id": "ML",
    "lcc": "1",
    "name": "Air Mediterranee",
    "logo": "https://images.kiwi.com/airlines/64/ML.png"
  },
  "Baltic Air lines": {
    "id": "B1",
    "lcc": "0",
    "name": "Baltic Air lines",
    "logo": "https://images.kiwi.com/airlines/64/B1.png"
  },
  "Transavia France": {
    "id": "TO",
    "lcc": "0",
    "name": "Transavia France",
    "logo": "https://images.kiwi.com/airlines/64/TO.png"
  },
  "Peruvian Airlines": {
    "id": "P9",
    "lcc": "1",
    "name": "Peruvian Airlines",
    "logo": "https://images.kiwi.com/airlines/64/P9.png"
  },
  "JetSMART": {
    "id": "JA",
    "lcc": "0",
    "name": "JetSMART",
    "logo": "https://images.kiwi.com/airlines/64/JA.png"
  },
  "Tiger Airways Australia": {
    "id": "TT",
    "lcc": "1",
    "name": "Tiger Airways Australia",
    "logo": "https://images.kiwi.com/airlines/64/TT.png"
  },
  "Alrosa": {
    "id": "6R",
    "lcc": "1",
    "name": "Alrosa",
    "logo": "https://images.kiwi.com/airlines/64/6R.png"
  },
  "One Jet": {
    "id": "J1",
    "lcc": "0",
    "name": "One Jet",
    "logo": "https://images.kiwi.com/airlines/64/J1.png"
  },
  "Insel Air": {
    "id": "7I",
    "lcc": "1",
    "name": "Insel Air",
    "logo": "https://images.kiwi.com/airlines/64/7I.png"
  },
  "Tajik Air": {
    "id": "7J",
    "lcc": "1",
    "name": "Tajik Air",
    "logo": "https://images.kiwi.com/airlines/64/7J.png"
  },
  "Avianca": {
    "id": "AV",
    "lcc": "0",
    "name": "Avianca",
    "logo": "https://images.kiwi.com/airlines/64/AV.png"
  },
  "Germania": {
    "id": "ST",
    "lcc": "1",
    "name": "Germania",
    "logo": "https://images.kiwi.com/airlines/64/ST.png"
  },
  "Brit Air": {
    "id": "DB",
    "lcc": "0",
    "name": "Brit Air",
    "logo": "https://images.kiwi.com/airlines/64/DB.png"
  },
  "Air Serbia": {
    "id": "JU",
    "lcc": "0",
    "name": "Air Serbia",
    "logo": "https://images.kiwi.com/airlines/64/JU.png"
  },
  "Safarilink Aviation": {
    "id": "F2",
    "lcc": "0",
    "name": "Safarilink Aviation",
    "logo": "https://images.kiwi.com/airlines/64/F2.png"
  },
  "SriLankan Airlines": {
    "id": "UL",
    "lcc": "0",
    "name": "SriLankan Airlines",
    "logo": "https://images.kiwi.com/airlines/64/UL.png"
  },
  "Tropic Air Limited": {
    "id": "9N",
    "lcc": "0",
    "name": "Tropic Air Limited",
    "logo": "https://images.kiwi.com/airlines/64/9N.png"
  },
  "West Air China": {
    "id": "PN",
    "lcc": "1",
    "name": "West Air China",
    "logo": "https://images.kiwi.com/airlines/64/PN.png"
  },
  "Hong Kong Airlines": {
    "id": "HX",
    "lcc": "1",
    "name": "Hong Kong Airlines",
    "logo": "https://images.kiwi.com/airlines/64/HX.png"
  },
  "Afrijet Business Service": {
    "id": "J7",
    "lcc": "1",
    "name": "Afrijet Business Service",
    "logo": "https://images.kiwi.com/airlines/64/J7.png"
  },
  "Africa World Airlines": {
    "id": "AW",
    "lcc": "1",
    "name": "Africa World Airlines",
    "logo": "https://images.kiwi.com/airlines/64/AW.png"
  },
  "Ellinair": {
    "id": "EL",
    "lcc": "1",
    "name": "Ellinair",
    "logo": "https://images.kiwi.com/airlines/64/EL.png"
  },
  "Ruili Airlines": {
    "id": "DR",
    "lcc": "1",
    "name": "Ruili Airlines",
    "logo": "https://images.kiwi.com/airlines/64/DR.png"
  },
  "KrasAvia (old iata)": {
    "id": "K9",
    "lcc": "1",
    "name": "KrasAvia (old iata)",
    "logo": "https://images.kiwi.com/airlines/64/K9.png"
  },
  "TUI Airlines Netherlands": {
    "id": "OR",
    "lcc": "1",
    "name": "TUI Airlines Netherlands",
    "logo": "https://images.kiwi.com/airlines/64/OR.png"
  },
  "Nature Air": {
    "id": "5C",
    "lcc": "1",
    "name": "Nature Air",
    "logo": "https://images.kiwi.com/airlines/64/5C.png"
  },
  "Lucky air": {
    "id": "8L",
    "lcc": "1",
    "name": "Lucky air",
    "logo": "https://images.kiwi.com/airlines/64/8L.png"
  },
  "Wamos Air": {
    "id": "EB",
    "lcc": "1",
    "name": "Wamos Air",
    "logo": "https://images.kiwi.com/airlines/64/EB.png"
  },
  "WestJet": {
    "id": "WS",
    "lcc": "1",
    "name": "WestJet",
    "logo": "https://images.kiwi.com/airlines/64/WS.png"
  },
  "Yamal Air": {
    "id": "YC",
    "lcc": "1",
    "name": "Yamal Air",
    "logo": "https://images.kiwi.com/airlines/64/YC.png"
  },
  "ASL Airlines France": {
    "id": "5O",
    "lcc": "0",
    "name": "ASL Airlines France",
    "logo": "https://images.kiwi.com/airlines/64/5O.png"
  },
  "SkyWise": {
    "id": "C9",
    "lcc": "1",
    "name": "SkyWise",
    "logo": "https://images.kiwi.com/airlines/64/C9.png"
  },
  "Jefferson Lines": {
    "id": "JEFFERSON",
    "lcc": "None",
    "name": "Jefferson Lines",
    "logo": "https://images.kiwi.com/airlines/64/JEFFERSON.png"
  },
  "Spicejet": {
    "id": "SG",
    "lcc": "1",
    "name": "Spicejet",
    "logo": "https://images.kiwi.com/airlines/64/SG.png"
  },
  "flynas": {
    "id": "XY",
    "lcc": "1",
    "name": "flynas",
    "logo": "https://images.kiwi.com/airlines/64/XY.png"
  },
  "Scat Airlines": {
    "id": "DV",
    "lcc": "1",
    "name": "Scat Airlines",
    "logo": "https://images.kiwi.com/airlines/64/DV.png"
  },
  "Air Guilin": {
    "id": "GT",
    "lcc": "1",
    "name": "Air Guilin",
    "logo": "https://images.kiwi.com/airlines/64/GT.png"
  },
  "Air Berlin": {
    "id": "AB",
    "lcc": "1",
    "name": "Air Berlin",
    "logo": "https://images.kiwi.com/airlines/64/AB.png"
  },
  "Myway Airlines": {
    "id": "MJ",
    "lcc": "1",
    "name": "Myway Airlines",
    "logo": "https://images.kiwi.com/airlines/64/MJ.png"
  },
  "VietJet Air": {
    "id": "VJ",
    "lcc": "1",
    "name": "VietJet Air",
    "logo": "https://images.kiwi.com/airlines/64/VJ.png"
  },
  "Alas Uruguay": {
    "id": "YZ",
    "lcc": "0",
    "name": "Alas Uruguay",
    "logo": "https://images.kiwi.com/airlines/64/YZ.png"
  },
  "Shaheen Air International": {
    "id": "NL",
    "lcc": "1",
    "name": "Shaheen Air International",
    "logo": "https://images.kiwi.com/airlines/64/NL.png"
  },
  "Fly Safair": {
    "id": "FA",
    "lcc": "1",
    "name": "Fly Safair",
    "logo": "https://images.kiwi.com/airlines/64/FA.png"
  },
  "flybmi": {
    "id": "BM",
    "lcc": "0",
    "name": "flybmi",
    "logo": "https://images.kiwi.com/airlines/64/BM.png"
  },
  "Primera Air": {
    "id": "PF",
    "lcc": "1",
    "name": "Primera Air",
    "logo": "https://images.kiwi.com/airlines/64/PF.png"
  },
  "Perimeter Aviation": {
    "id": "JV",
    "lcc": "0",
    "name": "Perimeter Aviation",
    "logo": "https://images.kiwi.com/airlines/64/JV.png"
  },
  "Yunnan Airlines": {
    "id": "3Q",
    "lcc": "0",
    "name": "Yunnan Airlines",
    "logo": "https://images.kiwi.com/airlines/64/3Q.png"
  },
  "Jin Air": {
    "id": "LJ",
    "lcc": "1",
    "name": "Jin Air",
    "logo": "https://images.kiwi.com/airlines/64/LJ.png"
  },
  "Malindo Air": {
    "id": "OD",
    "lcc": "1",
    "name": "Malindo Air",
    "logo": "https://images.kiwi.com/airlines/64/OD.png"
  },
  "AtlasGlobal": {
    "id": "KK",
    "lcc": "1",
    "name": "AtlasGlobal",
    "logo": "https://images.kiwi.com/airlines/64/KK.png"
  },
  "Skymark Airlines": {
    "id": "BC",
    "lcc": "1",
    "name": "Skymark Airlines",
    "logo": "https://images.kiwi.com/airlines/64/BC.png"
  },
  "Kenya Airways": {
    "id": "KQ",
    "lcc": "0",
    "name": "Kenya Airways",
    "logo": "https://images.kiwi.com/airlines/64/KQ.png"
  },
  "KLM Royal Dutch Airlines": {
    "id": "KL",
    "lcc": "0",
    "name": "KLM Royal Dutch Airlines",
    "logo": "https://images.kiwi.com/airlines/64/KL.png"
  },
  "Air India": {
    "id": "IX",
    "lcc": "1",
    "name": "Air India",
    "logo": "https://images.kiwi.com/airlines/64/IX.png"
  },
  "Air KBZ": {
    "id": "K7",
    "lcc": "0",
    "name": "Air KBZ",
    "logo": "https://images.kiwi.com/airlines/64/K7.png"
  },
  "Aigle Azur": {
    "id": "ZI",
    "lcc": "0",
    "name": "Aigle Azur",
    "logo": "https://images.kiwi.com/airlines/64/ZI.png"
  },
  "Atlas Blue": {
    "id": "8A",
    "lcc": "0",
    "name": "Atlas Blue",
    "logo": "https://images.kiwi.com/airlines/64/8A.png"
  },
  "Swiss International Air Lines": {
    "id": "LX",
    "lcc": "0",
    "name": "Swiss International Air Lines",
    "logo": "https://images.kiwi.com/airlines/64/LX.png"
  },
  "Avior Airlines": {
    "id": "9V",
    "lcc": "0",
    "name": "Avior Airlines",
    "logo": "https://images.kiwi.com/airlines/64/9V.png"
  },
  "Air Arabia": {
    "id": "G9",
    "lcc": "1",
    "name": "Air Arabia",
    "logo": "https://images.kiwi.com/airlines/64/G9.png"
  },
  "Cem Air": {
    "id": "5Z",
    "lcc": "1",
    "name": "Cem Air",
    "logo": "https://images.kiwi.com/airlines/64/5Z.png"
  },
  "Dniproavia": {
    "id": "Z6",
    "lcc": "1",
    "name": "Dniproavia",
    "logo": "https://images.kiwi.com/airlines/64/Z6.png"
  },
  "Xpressair": {
    "id": "XN",
    "lcc": "0",
    "name": "Xpressair",
    "logo": "https://images.kiwi.com/airlines/64/XN.png"
  },
  "Air China": {
    "id": "CA",
    "lcc": "0",
    "name": "Air China",
    "logo": "https://images.kiwi.com/airlines/64/CA.png"
  },
  "Nordwind Airlines": {
    "id": "N4",
    "lcc": "0",
    "name": "Nordwind Airlines",
    "logo": "https://images.kiwi.com/airlines/64/N4.png"
  },
  "Calm Air": {
    "id": "MO",
    "lcc": "1",
    "name": "Calm Air",
    "logo": "https://images.kiwi.com/airlines/64/MO.png"
  },
  "Fake Airline": {
    "id": "X9",
    "lcc": "0",
    "name": "Fake Airline",
    "logo": "https://images.kiwi.com/airlines/64/X9.png"
  },
  "Air New Zealand": {
    "id": "NZ",
    "lcc": "1",
    "name": "Air New Zealand",
    "logo": "https://images.kiwi.com/airlines/64/NZ.png"
  },
  "Novoair": {
    "id": "VQ",
    "lcc": "1",
    "name": "Novoair",
    "logo": "https://images.kiwi.com/airlines/64/VQ.png"
  },
  "Cayman Airways": {
    "id": "KX",
    "lcc": "0",
    "name": "Cayman Airways",
    "logo": "https://images.kiwi.com/airlines/64/KX.png"
  },
  "Cobalt Air": {
    "id": "CO",
    "lcc": "0",
    "name": "Cobalt Air",
    "logo": "https://images.kiwi.com/airlines/64/CO.png"
  },
  "Rwandair Express": {
    "id": "WB",
    "lcc": "0",
    "name": "Rwandair Express",
    "logo": "https://images.kiwi.com/airlines/64/WB.png"
  },
  "Blue Islands": {
    "id": "SI",
    "lcc": "0",
    "name": "Blue Islands",
    "logo": "https://images.kiwi.com/airlines/64/SI.png"
  },
  "Sol Líneas Aéreas": {
    "id": "8R",
    "lcc": "1",
    "name": "Sol Líneas Aéreas",
    "logo": "https://images.kiwi.com/airlines/64/8R.png"
  },
  "Asian Wings Air": {
    "id": "YJ",
    "lcc": "1",
    "name": "Asian Wings Air",
    "logo": "https://images.kiwi.com/airlines/64/YJ.png"
  },
  "Regent Airways": {
    "id": "RX",
    "lcc": "1",
    "name": "Regent Airways",
    "logo": "https://images.kiwi.com/airlines/64/RX.png"
  },
  "Angara airlines": {
    "id": "2G",
    "lcc": "1",
    "name": "Angara airlines",
    "logo": "https://images.kiwi.com/airlines/64/2G.png"
  },
  "Rusline": {
    "id": "7R",
    "lcc": "1",
    "name": "Rusline",
    "logo": "https://images.kiwi.com/airlines/64/7R.png"
  },
  "Vanilla Air": {
    "id": "JW",
    "lcc": "1",
    "name": "Vanilla Air",
    "logo": "https://images.kiwi.com/airlines/64/JW.png"
  },
  "Smartavia": {
    "id": "5N",
    "lcc": "1",
    "name": "Smartavia",
    "logo": "https://images.kiwi.com/airlines/64/5N.png"
  },
  "Air Busan": {
    "id": "BX",
    "lcc": "1",
    "name": "Air Busan",
    "logo": "https://images.kiwi.com/airlines/64/BX.png"
  },
  "LC Perú": {
    "id": "W4",
    "lcc": "1",
    "name": "LC Perú",
    "logo": "https://images.kiwi.com/airlines/64/W4.png"
  },
  "Gol Transportes Aéreos": {
    "id": "G3",
    "lcc": "1",
    "name": "Gol Transportes Aéreos",
    "logo": "https://images.kiwi.com/airlines/64/G3.png"
  },
  "Pobeda": {
    "id": "DP",
    "lcc": "1",
    "name": "Pobeda",
    "logo": "https://images.kiwi.com/airlines/64/DP.png"
  },
  "Precision Air": {
    "id": "PW",
    "lcc": "0",
    "name": "Precision Air",
    "logo": "https://images.kiwi.com/airlines/64/PW.png"
  },
  "Jetstar Airways": {
    "id": "JQ",
    "lcc": "1",
    "name": "Jetstar Airways",
    "logo": "https://images.kiwi.com/airlines/64/JQ.png"
  },
  "Hi Fly": {
    "id": "5K",
    "lcc": "0",
    "name": "Hi Fly",
    "logo": "https://images.kiwi.com/airlines/64/5K.png"
  },
  "NouvelAir": {
    "id": "BJ",
    "lcc": "0",
    "name": "NouvelAir",
    "logo": "https://images.kiwi.com/airlines/64/BJ.png"
  },
  "Copa Airlines": {
    "id": "CM",
    "lcc": "0",
    "name": "Copa Airlines",
    "logo": "https://images.kiwi.com/airlines/64/CM.png"
  },
  "Myanmar Airways": {
    "id": "8M",
    "lcc": "0",
    "name": "Myanmar Airways",
    "logo": "https://images.kiwi.com/airlines/64/8M.png"
  },
  "JetBlue": {
    "id": "B6",
    "lcc": "1",
    "name": "JetBlue",
    "logo": "https://images.kiwi.com/airlines/64/B6.png"
  },
  "Middle East Airlines": {
    "id": "ME",
    "lcc": "0",
    "name": "Middle East Airlines",
    "logo": "https://images.kiwi.com/airlines/64/ME.png"
  },
  "Asiana Airlines": {
    "id": "OZ",
    "lcc": "0",
    "name": "Asiana Airlines",
    "logo": "https://images.kiwi.com/airlines/64/OZ.png"
  },
  "Kuwait Airways": {
    "id": "KU",
    "lcc": "0",
    "name": "Kuwait Airways",
    "logo": "https://images.kiwi.com/airlines/64/KU.png"
  },
  "Fly Jamaica Airways": {
    "id": "OJ",
    "lcc": "0",
    "name": "Fly Jamaica Airways",
    "logo": "https://images.kiwi.com/airlines/64/OJ.png"
  },
  "Air Antilles Express": {
    "id": "3S",
    "lcc": "0",
    "name": "Air Antilles Express",
    "logo": "https://images.kiwi.com/airlines/64/3S.png"
  },
  "Airnorth": {
    "id": "TL",
    "lcc": "1",
    "name": "Airnorth",
    "logo": "https://images.kiwi.com/airlines/64/TL.png"
  },
  "Air Canada Jazz": {
    "id": "QK",
    "lcc": "0",
    "name": "Air Canada Jazz",
    "logo": "https://images.kiwi.com/airlines/64/QK.png"
  },
  "Aeromar": {
    "id": "VW",
    "lcc": "0",
    "name": "Aeromar",
    "logo": "https://images.kiwi.com/airlines/64/VW.png"
  },
  "Qingdao Airlines": {
    "id": "QW",
    "lcc": "0",
    "name": "Qingdao Airlines",
    "logo": "https://images.kiwi.com/airlines/64/QW.png"
  },
  "Island Air": {
    "id": "WP",
    "lcc": "0",
    "name": "Island Air",
    "logo": "https://images.kiwi.com/airlines/64/WP.png"
  },
  "City Airline": {
    "id": "CF",
    "lcc": "0",
    "name": "City Airline",
    "logo": "https://images.kiwi.com/airlines/64/CF.png"
  },
  "Juneyao Airlines": {
    "id": "HO",
    "lcc": "1",
    "name": "Juneyao Airlines",
    "logo": "https://images.kiwi.com/airlines/64/HO.png"
  },
  "Kalstar Aviation": {
    "id": "KD",
    "lcc": "0",
    "name": "Kalstar Aviation",
    "logo": "https://images.kiwi.com/airlines/64/KD.png"
  },
  "SmartWings": {
    "id": "QS",
    "lcc": "1",
    "name": "SmartWings",
    "logo": "https://images.kiwi.com/airlines/64/QS.png"
  },
  "Scoot": {
    "id": "TR",
    "lcc": "1",
    "name": "Scoot",
    "logo": "https://images.kiwi.com/airlines/64/TR.png"
  },
  "Saratov Aviation Division": {
    "id": "6W",
    "lcc": "1",
    "name": "Saratov Aviation Division",
    "logo": "https://images.kiwi.com/airlines/64/6W.png"
  },
  "Aws express": {
    "id": "B0",
    "lcc": "0",
    "name": "Aws express",
    "logo": "https://images.kiwi.com/airlines/64/B0.png"
  },
  "Silver Airways": {
    "id": "3M",
    "lcc": "1",
    "name": "Silver Airways",
    "logo": "https://images.kiwi.com/airlines/64/3M.png"
  },
  "Island Spirit": {
    "id": "IP",
    "lcc": "0",
    "name": "Island Spirit",
    "logo": "https://images.kiwi.com/airlines/64/IP.png"
  },
  "Air Vistara": {
    "id": "UK",
    "lcc": "0",
    "name": "Air Vistara",
    "logo": "https://images.kiwi.com/airlines/64/UK.png"
  },
  "9 Air": {
    "id": "AQ",
    "lcc": "1",
    "name": "9 Air",
    "logo": "https://images.kiwi.com/airlines/64/AQ.png"
  },
  "SAS": {
    "id": "SK",
    "lcc": "0",
    "name": "SAS",
    "logo": "https://images.kiwi.com/airlines/64/SK.png"
  },
  "Norwegian": {
    "id": "DY",
    "lcc": "1",
    "name": "Norwegian",
    "logo": "https://images.kiwi.com/airlines/64/DY.png"
  },
  "Hong Kong Express Airways": {
    "id": "UO",
    "lcc": "1",
    "name": "Hong Kong Express Airways",
    "logo": "https://images.kiwi.com/airlines/64/UO.png"
  },
  "Air France": {
    "id": "AF",
    "lcc": "0",
    "name": "Air France",
    "logo": "https://images.kiwi.com/airlines/64/AF.png"
  },
  "TAP Portugal": {
    "id": "TP",
    "lcc": "0",
    "name": "TAP Portugal",
    "logo": "https://images.kiwi.com/airlines/64/TP.png"
  },
  "Air India Limited": {
    "id": "AI",
    "lcc": "0",
    "name": "Air India Limited",
    "logo": "https://images.kiwi.com/airlines/64/AI.png"
  },
  "Vueling": {
    "id": "VY",
    "lcc": "1",
    "name": "Vueling",
    "logo": "https://images.kiwi.com/airlines/64/VY.png"
  },
  "Japan Airlines": {
    "id": "JL",
    "lcc": "0",
    "name": "Japan Airlines",
    "logo": "https://images.kiwi.com/airlines/64/JL.png"
  },
  "Air Astana": {
    "id": "KC",
    "lcc": "0",
    "name": "Air Astana",
    "logo": "https://images.kiwi.com/airlines/64/KC.png"
  },
  "Brussels Airlines": {
    "id": "SN",
    "lcc": "0",
    "name": "Brussels Airlines",
    "logo": "https://images.kiwi.com/airlines/64/SN.png"
  },
  "Fly Corporate": {
    "id": "FC",
    "lcc": "1",
    "name": "Fly Corporate",
    "logo": "https://images.kiwi.com/airlines/64/FC.png"
  },
  "Braathens Regional Aviation": {
    "id": "TF",
    "lcc": "0",
    "name": "Braathens Regional Aviation",
    "logo": "https://images.kiwi.com/airlines/64/TF.png"
  },
  "tuifly.be": {
    "id": "TB",
    "lcc": "1",
    "name": "tuifly.be",
    "logo": "https://images.kiwi.com/airlines/64/TB.png"
  },
  "Eurowings": {
    "id": "EW",
    "lcc": "1",
    "name": "Eurowings",
    "logo": "https://images.kiwi.com/airlines/64/EW.png"
  },
  "Iberia Airlines": {
    "id": "IB",
    "lcc": "0",
    "name": "Iberia Airlines",
    "logo": "https://images.kiwi.com/airlines/64/IB.png"
  },
  "Sky Bahamas": {
    "id": "Q7",
    "lcc": "0",
    "name": "Sky Bahamas",
    "logo": "https://images.kiwi.com/airlines/64/Q7.png"
  },
  "MAP Linhas Aéreas": {
    "id": "7M",
    "lcc": "0",
    "name": "MAP Linhas Aéreas",
    "logo": "https://images.kiwi.com/airlines/64/7M.png"
  },
  "Flybondi": {
    "id": "FO",
    "lcc": "1",
    "name": "Flybondi",
    "logo": "https://images.kiwi.com/airlines/64/FO.png"
  },
  "Compass Airlines": {
    "id": "CP",
    "lcc": "0",
    "name": "Compass Airlines",
    "logo": "https://images.kiwi.com/airlines/64/CP.png"
  },
  "SATENA": {
    "id": "9R",
    "lcc": "1",
    "name": "SATENA",
    "logo": "https://images.kiwi.com/airlines/64/9R.png"
  },
  "Thai AirAsia": {
    "id": "FD",
    "lcc": "0",
    "name": "Thai AirAsia",
    "logo": "https://images.kiwi.com/airlines/64/FD.png"
  },
  "Fly Dubai": {
    "id": "FZ",
    "lcc": "1",
    "name": "Fly Dubai",
    "logo": "https://images.kiwi.com/airlines/64/FZ.png"
  },
  "TUIfly": {
    "id": "X3",
    "lcc": "1",
    "name": "TUIfly",
    "logo": "https://images.kiwi.com/airlines/64/X3.png"
  },
  "Turkish Airlines": {
    "id": "TK",
    "lcc": "0",
    "name": "Turkish Airlines",
    "logo": "https://images.kiwi.com/airlines/64/TK.png"
  },
  "Ravn Alaska": {
    "id": "7H",
    "lcc": "1",
    "name": "Ravn Alaska",
    "logo": "https://images.kiwi.com/airlines/64/7H.png"
  },
  "Norwegian International": {
    "id": "D8",
    "lcc": "0",
    "name": "Norwegian International",
    "logo": "https://images.kiwi.com/airlines/64/D8.png"
  },
  "Adria Airways": {
    "id": "JP",
    "lcc": "0",
    "name": "Adria Airways",
    "logo": "https://images.kiwi.com/airlines/64/JP.png"
  },
  "Burlington Trailways": {
    "id": "BURLINGTON",
    "lcc": "None",
    "name": "Burlington Trailways",
    "logo": "https://images.kiwi.com/airlines/64/BURLINGTON.png"
  },
  "Passaredo": {
    "id": "2Z",
    "lcc": "1",
    "name": "Passaredo",
    "logo": "https://images.kiwi.com/airlines/64/2Z.png"
  },
  "Canadian National Airways": {
    "id": "CN",
    "lcc": "0",
    "name": "Canadian National Airways",
    "logo": "https://images.kiwi.com/airlines/64/CN.png"
  },
  "Windward Islands Airways": {
    "id": "WM",
    "lcc": "0",
    "name": "Windward Islands Airways",
    "logo": "https://images.kiwi.com/airlines/64/WM.png"
  },
  "Pegasus": {
    "id": "PC",
    "lcc": "1",
    "name": "Pegasus",
    "logo": "https://images.kiwi.com/airlines/64/PC.png"
  },
  "Lao Skyway": {
    "id": "LK",
    "lcc": "0",
    "name": "Lao Skyway",
    "logo": "https://images.kiwi.com/airlines/64/LK.png"
  },
  "Chautauqua Airlines": {
    "id": "RP",
    "lcc": "0",
    "name": "Chautauqua Airlines",
    "logo": "https://images.kiwi.com/airlines/64/RP.png"
  },
  "El Al Israel Airlines": {
    "id": "LY",
    "lcc": "1",
    "name": "El Al Israel Airlines",
    "logo": "https://images.kiwi.com/airlines/64/LY.png"
  },
  "Frontier Airlines": {
    "id": "F9",
    "lcc": "1",
    "name": "Frontier Airlines",
    "logo": "https://images.kiwi.com/airlines/64/F9.png"
  },
  "Intersky": {
    "id": "3L",
    "lcc": "1",
    "name": "Intersky",
    "logo": "https://images.kiwi.com/airlines/64/3L.png"
  },
  "Jazeera Airways": {
    "id": "J9",
    "lcc": "1",
    "name": "Jazeera Airways",
    "logo": "https://images.kiwi.com/airlines/64/J9.png"
  },
  "Nasair": {
    "id": "UE",
    "lcc": "0",
    "name": "Nasair",
    "logo": "https://images.kiwi.com/airlines/64/UE.png"
  },
  "Dennis Sky": {
    "id": "DH",
    "lcc": "0",
    "name": "Dennis Sky",
    "logo": "https://images.kiwi.com/airlines/64/DH.png"
  },
  "Tway Airlines": {
    "id": "TW",
    "lcc": "1",
    "name": "Tway Airlines",
    "logo": "https://images.kiwi.com/airlines/64/TW.png"
  },
  "AirInuit": {
    "id": "3H",
    "lcc": "1",
    "name": "AirInuit",
    "logo": "https://images.kiwi.com/airlines/64/3H.png"
  },
  "Wizzair": {
    "id": "W6",
    "lcc": "1",
    "name": "Wizzair",
    "logo": "https://images.kiwi.com/airlines/64/W6.png"
  },
  "Volaris": {
    "id": "Y4",
    "lcc": "1",
    "name": "Volaris",
    "logo": "https://images.kiwi.com/airlines/64/Y4.png"
  },
  "IndiGo Airlines": {
    "id": "6E",
    "lcc": "1",
    "name": "IndiGo Airlines",
    "logo": "https://images.kiwi.com/airlines/64/6E.png"
  },
  "Bangkok Airways": {
    "id": "PG",
    "lcc": "1",
    "name": "Bangkok Airways",
    "logo": "https://images.kiwi.com/airlines/64/PG.png"
  },
  "Vermont Translines": {
    "id": "VTTRANSLIN",
    "lcc": "None",
    "name": "Vermont Translines",
    "logo": "https://images.kiwi.com/airlines/64/VTTRANSLIN.png"
  },
  "Nok Air": {
    "id": "DD",
    "lcc": "1",
    "name": "Nok Air",
    "logo": "https://images.kiwi.com/airlines/64/DD.png"
  },
  "Firefly": {
    "id": "FY",
    "lcc": "1",
    "name": "Firefly",
    "logo": "https://images.kiwi.com/airlines/64/FY.png"
  },
  "Fastjet": {
    "id": "FN",
    "lcc": "1",
    "name": "Fastjet",
    "logo": "https://images.kiwi.com/airlines/64/FN.png"
  },
  "Lion Air": {
    "id": "JT",
    "lcc": "1",
    "name": "Lion Air",
    "logo": "https://images.kiwi.com/airlines/64/JT.png"
  },
  "BoraJet": {
    "id": "YB",
    "lcc": "1",
    "name": "BoraJet",
    "logo": "https://images.kiwi.com/airlines/64/YB.png"
  },
  "Jeju Air": {
    "id": "7C",
    "lcc": "1",
    "name": "Jeju Air",
    "logo": "https://images.kiwi.com/airlines/64/7C.png"
  },
  "Thai Lion Air": {
    "id": "SL",
    "lcc": "1",
    "name": "Thai Lion Air",
    "logo": "https://images.kiwi.com/airlines/64/SL.png"
  },
  "Czech Rail": {
    "id": "CZECHRAIL",
    "lcc": "None",
    "name": "Czech Rail",
    "logo": "https://images.kiwi.com/airlines/64/CZECHRAIL.png"
  },
  "Alitalia": {
    "id": "AZ",
    "lcc": "0",
    "name": "Alitalia",
    "logo": "https://images.kiwi.com/airlines/64/AZ.png"
  },
  "Aerolineas Argentinas": {
    "id": "AR",
    "lcc": "0",
    "name": "Aerolineas Argentinas",
    "logo": "https://images.kiwi.com/airlines/64/AR.png"
  },
  "Interjet": {
    "id": "4O",
    "lcc": "1",
    "name": "Interjet",
    "logo": "https://images.kiwi.com/airlines/64/4O.png"
  },
  "AeroMéxico": {
    "id": "AM",
    "lcc": "0",
    "name": "AeroMéxico",
    "logo": "https://images.kiwi.com/airlines/64/AM.png"
  },
  "Sky Airline": {
    "id": "H2",
    "lcc": "1",
    "name": "Sky Airline",
    "logo": "https://images.kiwi.com/airlines/64/H2.png"
  },
  "Cebu Pacific": {
    "id": "5J",
    "lcc": "1",
    "name": "Cebu Pacific",
    "logo": "https://images.kiwi.com/airlines/64/5J.png"
  },
  "Blue Panorama": {
    "id": "BV",
    "lcc": "1",
    "name": "Blue Panorama",
    "logo": "https://images.kiwi.com/airlines/64/BV.png"
  },
  "Condor": {
    "id": "DE",
    "lcc": "1",
    "name": "Condor",
    "logo": "https://images.kiwi.com/airlines/64/DE.png"
  },
  "Indonesia AirAsia": {
    "id": "QZ",
    "lcc": "0",
    "name": "Indonesia AirAsia",
    "logo": "https://images.kiwi.com/airlines/64/QZ.png"
  },
  "easyJet": {
    "id": "U2",
    "lcc": "1",
    "name": "easyJet",
    "logo": "https://images.kiwi.com/airlines/64/U2.png"
  },
  "Alsa": {
    "id": "ALSA",
    "lcc": "0",
    "name": "Alsa",
    "logo": "https://images.kiwi.com/airlines/64/ALSA.png"
  },
  "germanwings": {
    "id": "4U",
    "lcc": "1",
    "name": "germanwings",
    "logo": "https://images.kiwi.com/airlines/64/4U.png"
  },
  "Jetstar Asia Airways": {
    "id": "3K",
    "lcc": "0",
    "name": "Jetstar Asia Airways",
    "logo": "https://images.kiwi.com/airlines/64/3K.png"
  },
  "Delta Air Lines": {
    "id": "DL",
    "lcc": "0",
    "name": "Delta Air Lines",
    "logo": "https://images.kiwi.com/airlines/64/DL.png"
  },
  "UTair": {
    "id": "UT",
    "lcc": "1",
    "name": "UTair",
    "logo": "https://images.kiwi.com/airlines/64/UT.png"
  },
  "Hawaiian Airlines": {
    "id": "HA",
    "lcc": "0",
    "name": "Hawaiian Airlines",
    "logo": "https://images.kiwi.com/airlines/64/HA.png"
  },
  "Sunwing": {
    "id": "WG",
    "lcc": "1",
    "name": "Sunwing",
    "logo": "https://images.kiwi.com/airlines/64/WG.png"
  },
  "Orenburg Airlines": {
    "id": "R2",
    "lcc": "1",
    "name": "Orenburg Airlines",
    "logo": "https://images.kiwi.com/airlines/64/R2.png"
  },
  "Transaero Airlines": {
    "id": "UN",
    "lcc": "1",
    "name": "Transaero Airlines",
    "logo": "https://images.kiwi.com/airlines/64/UN.png"
  },
  "AirAsia": {
    "id": "AK",
    "lcc": "1",
    "name": "AirAsia",
    "logo": "https://images.kiwi.com/airlines/64/AK.png"
  },
  "Sriwijaya Air": {
    "id": "SJ",
    "lcc": "0",
    "name": "Sriwijaya Air",
    "logo": "https://images.kiwi.com/airlines/64/SJ.png"
  },
  "Singapore Airlines": {
    "id": "SQ",
    "lcc": "0",
    "name": "Singapore Airlines",
    "logo": "https://images.kiwi.com/airlines/64/SQ.png"
  },
  "Bahamasair": {
    "id": "UP",
    "lcc": "1",
    "name": "Bahamasair",
    "logo": "https://images.kiwi.com/airlines/64/UP.png"
  },
  "British Airways": {
    "id": "BA",
    "lcc": "0",
    "name": "British Airways",
    "logo": "https://images.kiwi.com/airlines/64/BA.png"
  },
  "Aeroflot Russian Airlines": {
    "id": "SU",
    "lcc": "0",
    "name": "Aeroflot Russian Airlines",
    "logo": "https://images.kiwi.com/airlines/64/SU.png"
  },
  "TAME": {
    "id": "EQ",
    "lcc": "0",
    "name": "TAME",
    "logo": "https://images.kiwi.com/airlines/64/EQ.png"
  },
  "Caribbean Airlines": {
    "id": "BW",
    "lcc": "0",
    "name": "Caribbean Airlines",
    "logo": "https://images.kiwi.com/airlines/64/BW.png"
  },
  "Garuda Indonesia": {
    "id": "GA",
    "lcc": "0",
    "name": "Garuda Indonesia",
    "logo": "https://images.kiwi.com/airlines/64/GA.png"
  },
  "Ethiopian Airlines": {
    "id": "ET",
    "lcc": "0",
    "name": "Ethiopian Airlines",
    "logo": "https://images.kiwi.com/airlines/64/ET.png"
  },
  "Transavia": {
    "id": "HV",
    "lcc": "1",
    "name": "Transavia",
    "logo": "https://images.kiwi.com/airlines/64/HV.png"
  },
  "Go Air": {
    "id": "G8",
    "lcc": "1",
    "name": "Go Air",
    "logo": "https://images.kiwi.com/airlines/64/G8.png"
  },
  "AlMasria Universal Airlines": {
    "id": "UJ",
    "lcc": "0",
    "name": "AlMasria Universal Airlines",
    "logo": "https://images.kiwi.com/airlines/64/UJ.png"
  },
  "French Bee": {
    "id": "BF",
    "lcc": "0",
    "name": "French Bee",
    "logo": "https://images.kiwi.com/airlines/64/BF.png"
  },
  "Wataniya Airways": {
    "id": "Q9",
    "lcc": "0",
    "name": "Wataniya Airways",
    "logo": "https://images.kiwi.com/airlines/64/Q9.png"
  },
  "Chengdu Airlines": {
    "id": "EU",
    "lcc": "0",
    "name": "Chengdu Airlines",
    "logo": "https://images.kiwi.com/airlines/64/EU.png"
  },
  "Berlinas Menorca": {
    "id": "MENORCA",
    "lcc": "None",
    "name": "Berlinas Menorca",
    "logo": "https://images.kiwi.com/airlines/64/MENORCA.png"
  },
  "Dublin Bus": {
    "id": "DUBLINBUS",
    "lcc": "None",
    "name": "Dublin Bus",
    "logo": "https://images.kiwi.com/airlines/64/DUBLINBUS.png"
  },
  "Lamezia Multiservizi": {
    "id": "LAMEZIA",
    "lcc": "None",
    "name": "Lamezia Multiservizi",
    "logo": "https://images.kiwi.com/airlines/64/LAMEZIA.png"
  },
  "Vy": {
    "id": "VYRAIL",
    "lcc": "None",
    "name": "Vy",
    "logo": "https://images.kiwi.com/airlines/64/VYRAIL.png"
  },
  "Cathay Dragon": {
    "id": "KA",
    "lcc": "0",
    "name": "Cathay Dragon",
    "logo": "https://images.kiwi.com/airlines/64/KA.png"
  },
  "Corendon Airlines Europe": {
    "id": "XR",
    "lcc": "0",
    "name": "Corendon Airlines Europe",
    "logo": "https://images.kiwi.com/airlines/64/XR.png"
  },
  "Braathens Regional Airways": {
    "id": "DC",
    "lcc": "1",
    "name": "Braathens Regional Airways",
    "logo": "https://images.kiwi.com/airlines/64/DC.png"
  },
  "ATA Airlines (Iran)": {
    "id": "I3",
    "lcc": "None",
    "name": "ATA Airlines (Iran)",
    "logo": "https://images.kiwi.com/airlines/64/I3.png"
  },
  "Zagros Airlines": {
    "id": "ZO",
    "lcc": "None",
    "name": "Zagros Airlines",
    "logo": "https://images.kiwi.com/airlines/64/ZO.png"
  },
  "East African": {
    "id": "B5",
    "lcc": "0",
    "name": "East African",
    "logo": "https://images.kiwi.com/airlines/64/B5.png"
  },
  "Eireagle": {
    "id": "EIREAGLE",
    "lcc": "None",
    "name": "Eireagle",
    "logo": "https://images.kiwi.com/airlines/64/EIREAGLE.png"
  },
  "Giosy tours SA": {
    "id": "GTOURSSA",
    "lcc": "None",
    "name": "Giosy tours SA",
    "logo": "https://images.kiwi.com/airlines/64/GTOURSSA.png"
  },
  "Westfalen Bahn": {
    "id": "WESTFALEN",
    "lcc": "None",
    "name": "Westfalen Bahn",
    "logo": "https://images.kiwi.com/airlines/64/WESTFALEN.png"
  },
  "NordWestBahn": {
    "id": "NORDWEST",
    "lcc": "None",
    "name": "NordWestBahn",
    "logo": "https://images.kiwi.com/airlines/64/NORDWEST.png"
  },
  "Korail": {
    "id": "KORAIL",
    "lcc": "None",
    "name": "Korail",
    "logo": "https://images.kiwi.com/airlines/64/KORAIL.png"
  },
  "Yuma County Area Transit": {
    "id": "YCAT",
    "lcc": "None",
    "name": "Yuma County Area Transit",
    "logo": "https://images.kiwi.com/airlines/64/YCAT.png"
  },
  "Dalatrafik": {
    "id": "DALATRAFIK",
    "lcc": "None",
    "name": "Dalatrafik",
    "logo": "https://images.kiwi.com/airlines/64/DALATRAFIK.png"
  },
  "Flygbussarna": {
    "id": "FLYGBUSSAR",
    "lcc": "None",
    "name": "Flygbussarna",
    "logo": "https://images.kiwi.com/airlines/64/FLYGBUSSAR.png"
  },
  "airBaltic": {
    "id": "BT",
    "lcc": "1",
    "name": "airBaltic",
    "logo": "https://images.kiwi.com/airlines/64/BT.png"
  },
  "Aurora Airlines": {
    "id": "HZ",
    "lcc": "0",
    "name": "Aurora Airlines",
    "logo": "https://images.kiwi.com/airlines/64/HZ.png"
  },
  "Peach Aviation": {
    "id": "MM",
    "lcc": "1",
    "name": "Peach Aviation",
    "logo": "https://images.kiwi.com/airlines/64/MM.png"
  },
  "Taban Airlines": {
    "id": "HH",
    "lcc": "0",
    "name": "Taban Airlines",
    "logo": "https://images.kiwi.com/airlines/64/HH.png"
  },
  "AD EuroTrans": {
    "id": "EUROTRANS",
    "lcc": "None",
    "name": "AD EuroTrans",
    "logo": "https://images.kiwi.com/airlines/64/EUROTRANS.png"
  },
  "Arriva United Kingdom": {
    "id": "ARRIVAUK",
    "lcc": "None",
    "name": "Arriva United Kingdom",
    "logo": "https://images.kiwi.com/airlines/64/ARRIVAUK.png"
  },
  "MTR Nordic": {
    "id": "MTRNORDIC",
    "lcc": "None",
    "name": "MTR Nordic",
    "logo": "https://images.kiwi.com/airlines/64/MTRNORDIC.png"
  },
  "Samoa Airways": {
    "id": "OL",
    "lcc": "0",
    "name": "Samoa Airways",
    "logo": "https://images.kiwi.com/airlines/64/OL.png"
  },
  "IZY": {
    "id": "IZY",
    "lcc": "None",
    "name": "IZY",
    "logo": "https://images.kiwi.com/airlines/64/IZY.png"
  },
  "WESTBahn": {
    "id": "5W",
    "lcc": "0",
    "name": "WESTBahn",
    "logo": "https://images.kiwi.com/airlines/64/5W.png"
  },
  "Tagkompaniet": {
    "id": "TAGKOMPANI",
    "lcc": "None",
    "name": "Tagkompaniet",
    "logo": "https://images.kiwi.com/airlines/64/TAGKOMPANI.png"
  },
  "Air Greenland": {
    "id": "GL",
    "lcc": "0",
    "name": "Air Greenland",
    "logo": "https://images.kiwi.com/airlines/64/GL.png"
  },
  "Barons Bus": {
    "id": "BARONSBUS",
    "lcc": "None",
    "name": "Barons Bus",
    "logo": "https://images.kiwi.com/airlines/64/BARONSBUS.png"
  },
  "New York Trailways": {
    "id": "NYTRAILWAY",
    "lcc": "None",
    "name": "New York Trailways",
    "logo": "https://images.kiwi.com/airlines/64/NYTRAILWAY.png"
  },
  "Ouibus": {
    "id": "OUIBUS",
    "lcc": "0",
    "name": "Ouibus",
    "logo": "https://images.kiwi.com/airlines/64/OUIBUS.png"
  },
  "LoganAir LM": {
    "id": "LM",
    "lcc": "0",
    "name": "LoganAir LM",
    "logo": "https://images.kiwi.com/airlines/64/LM.png"
  },
  "Shree Airlines": {
    "id": "SHA",
    "lcc": "None",
    "name": "Shree Airlines",
    "logo": "https://images.kiwi.com/airlines/64/SHA.png"
  },
  "Fullington Trailways": {
    "id": "FULLINGTON",
    "lcc": "None",
    "name": "Fullington Trailways",
    "logo": "https://images.kiwi.com/airlines/64/FULLINGTON.png"
  },
  "Capital - Colonial Trailways": {
    "id": "CAPITALCOL",
    "lcc": "None",
    "name": "Capital - Colonial Trailways",
    "logo": "https://images.kiwi.com/airlines/64/CAPITALCOL.png"
  },
  "Jetstar Pacific": {
    "id": "BL",
    "lcc": "0",
    "name": "Jetstar Pacific",
    "logo": "https://images.kiwi.com/airlines/64/BL.png"
  },
  "Yorkshire Tiger": {
    "id": "YORKSTIGER",
    "lcc": "None",
    "name": "Yorkshire Tiger",
    "logo": "https://images.kiwi.com/airlines/64/YORKSTIGER.png"
  },
  "First Bus": {
    "id": "FIRSTBUS",
    "lcc": "None",
    "name": "First Bus",
    "logo": "https://images.kiwi.com/airlines/64/FIRSTBUS.png"
  },
  "High Peak": {
    "id": "HIGHPEAK",
    "lcc": "None",
    "name": "High Peak",
    "logo": "https://images.kiwi.com/airlines/64/HIGHPEAK.png"
  },
  "Yellow Buses": {
    "id": "YELLOWBUS",
    "lcc": "None",
    "name": "Yellow Buses",
    "logo": "https://images.kiwi.com/airlines/64/YELLOWBUS.png"
  },
  "Bath Bus Company": {
    "id": "BATHBUS",
    "lcc": "None",
    "name": "Bath Bus Company",
    "logo": "https://images.kiwi.com/airlines/64/BATHBUS.png"
  },
  "Blekingetrafiken bus": {
    "id": "BLEKINGEB",
    "lcc": "None",
    "name": "Blekingetrafiken bus",
    "logo": "https://images.kiwi.com/airlines/64/BLEKINGEB.png"
  },
  "Spring Airlines Japan": {
    "id": "IJ",
    "lcc": "None",
    "name": "Spring Airlines Japan",
    "logo": "https://images.kiwi.com/airlines/64/IJ.png"
  },
  "VR": {
    "id": "VRRAIL",
    "lcc": "None",
    "name": "VR",
    "logo": "https://images.kiwi.com/airlines/64/VRRAIL.png"
  },
  "flybe": {
    "id": "BE",
    "lcc": "1",
    "name": "flybe",
    "logo": "https://images.kiwi.com/airlines/64/BE.png"
  },
  "OBB": {
    "id": "OBB",
    "lcc": "None",
    "name": "OBB",
    "logo": "https://images.kiwi.com/airlines/64/OBB.png"
  },
  "Slovenian Railways": {
    "id": "SLORAIL",
    "lcc": "None",
    "name": "Slovenian Railways",
    "logo": "https://images.kiwi.com/airlines/64/SLORAIL.png"
  },
  "Public Traffic Uppland train": {
    "id": "ULT",
    "lcc": "None",
    "name": "Public Traffic Uppland train",
    "logo": "https://images.kiwi.com/airlines/64/ULT.png"
  },
  "Megabus train": {
    "id": "MEGABUST",
    "lcc": "None",
    "name": "Megabus train",
    "logo": "https://images.kiwi.com/airlines/64/MEGABUST.png"
  },
  "Megabus bus": {
    "id": "MEGABUSB",
    "lcc": "None",
    "name": "Megabus bus",
    "logo": "https://images.kiwi.com/airlines/64/MEGABUSB.png"
  },
  "Cityzap": {
    "id": "CITYZAP",
    "lcc": "None",
    "name": "Cityzap",
    "logo": "https://images.kiwi.com/airlines/64/CITYZAP.png"
  },
  "Coastliner": {
    "id": "COASTLINER",
    "lcc": "None",
    "name": "Coastliner",
    "logo": "https://images.kiwi.com/airlines/64/COASTLINER.png"
  },
  "Green Line": {
    "id": "GREENLINE",
    "lcc": "None",
    "name": "Green Line",
    "logo": "https://images.kiwi.com/airlines/64/GREENLINE.png"
  },
  "Stagecoach bus": {
    "id": "STAGECOACB",
    "lcc": "None",
    "name": "Stagecoach bus",
    "logo": "https://images.kiwi.com/airlines/64/STAGECOACB.png"
  },
  "Oxford Tube": {
    "id": "OXFORDTUBE",
    "lcc": "None",
    "name": "Oxford Tube",
    "logo": "https://images.kiwi.com/airlines/64/OXFORDTUBE.png"
  },
  "Enno": {
    "id": "ENNO",
    "lcc": "None",
    "name": "Enno",
    "logo": "https://images.kiwi.com/airlines/64/ENNO.png"
  },
  "Metronom": {
    "id": "METRONOM",
    "lcc": "None",
    "name": "Metronom",
    "logo": "https://images.kiwi.com/airlines/64/METRONOM.png"
  },
  "Sud-Thuringen-Bahn": {
    "id": "SUDTHURING",
    "lcc": "None",
    "name": "Sud-Thuringen-Bahn",
    "logo": "https://images.kiwi.com/airlines/64/SUDTHURING.png"
  },
  "Vias": {
    "id": "VIAS",
    "lcc": "None",
    "name": "Vias",
    "logo": "https://images.kiwi.com/airlines/64/VIAS.png"
  },
  "Meridian, BOB, BRB": {
    "id": "MERIBOBBRB",
    "lcc": "None",
    "name": "Meridian, BOB, BRB",
    "logo": "https://images.kiwi.com/airlines/64/MERIBOBBRB.png"
  },
  "Eurobahn": {
    "id": "EUROBAHN",
    "lcc": "None",
    "name": "Eurobahn",
    "logo": "https://images.kiwi.com/airlines/64/EUROBAHN.png"
  },
  "Landerbahn": {
    "id": "LANDERBAHN",
    "lcc": "None",
    "name": "Landerbahn",
    "logo": "https://images.kiwi.com/airlines/64/LANDERBAHN.png"
  },
  "Abellio": {
    "id": "ABELLIO",
    "lcc": "None",
    "name": "Abellio",
    "logo": "https://images.kiwi.com/airlines/64/ABELLIO.png"
  },
  "Czech Rail train": {
    "id": "CZECHRAILT",
    "lcc": "None",
    "name": "Czech Rail train",
    "logo": "https://images.kiwi.com/airlines/64/CZECHRAILT.png"
  },
  "Stockholm Public Transport train": {
    "id": "SLT",
    "lcc": "None",
    "name": "Stockholm Public Transport train",
    "logo": "https://images.kiwi.com/airlines/64/SLT.png"
  },
  "Aerolineas Sosa": {
    "id": "S0",
    "lcc": "1",
    "name": "Aerolineas Sosa",
    "logo": "https://images.kiwi.com/airlines/64/S0.png"
  },
  "Aruba Airlines": {
    "id": "AG",
    "lcc": "0",
    "name": "Aruba Airlines",
    "logo": "https://images.kiwi.com/airlines/64/AG.png"
  },
  "GX airlines": {
    "id": "GX",
    "lcc": "1",
    "name": "GX airlines",
    "logo": "https://images.kiwi.com/airlines/64/GX.png"
  },
  "Philippine Airlines": {
    "id": "PR",
    "lcc": "0",
    "name": "Philippine Airlines",
    "logo": "https://images.kiwi.com/airlines/64/PR.png"
  },
  "Urumqi Airlines": {
    "id": "UQ",
    "lcc": "0",
    "name": "Urumqi Airlines",
    "logo": "https://images.kiwi.com/airlines/64/UQ.png"
  },
  "TunisAir Express": {
    "id": "UG",
    "lcc": "0",
    "name": "TunisAir Express",
    "logo": "https://images.kiwi.com/airlines/64/UG.png"
  },
  "EuroLot": {
    "id": "K2",
    "lcc": "0",
    "name": "EuroLot",
    "logo": "https://images.kiwi.com/airlines/64/K2.png"
  },
  "VE": {
    "id": "VE",
    "lcc": "0",
    "name": "VE",
    "logo": "https://images.kiwi.com/airlines/64/VE.png"
  },
  "Aeroflot-Don": {
    "id": "D9",
    "lcc": "0",
    "name": "Aeroflot-Don",
    "logo": "https://images.kiwi.com/airlines/64/D9.png"
  },
  "Tigerair Taiwan": {
    "id": "IT",
    "lcc": "0",
    "name": "Tigerair Taiwan",
    "logo": "https://images.kiwi.com/airlines/64/IT.png"
  },
  "Great Lakes Airlines": {
    "id": "ZK",
    "lcc": "0",
    "name": "Great Lakes Airlines",
    "logo": "https://images.kiwi.com/airlines/64/ZK.png"
  },
  "Hahn Airlines": {
    "id": "HR",
    "lcc": "0",
    "name": "Hahn Airlines",
    "logo": "https://images.kiwi.com/airlines/64/HR.png"
  },
  "Hainan Airlines": {
    "id": "HU",
    "lcc": "0",
    "name": "Hainan Airlines",
    "logo": "https://images.kiwi.com/airlines/64/HU.png"
  },
  "Surinam Airways": {
    "id": "PY",
    "lcc": "0",
    "name": "Surinam Airways",
    "logo": "https://images.kiwi.com/airlines/64/PY.png"
  },
  "Fly Blue Crane": {
    "id": "7B",
    "lcc": "0",
    "name": "Fly Blue Crane",
    "logo": "https://images.kiwi.com/airlines/64/7B.png"
  },
  "Mandala Airlines": {
    "id": "RI",
    "lcc": "0",
    "name": "Mandala Airlines",
    "logo": "https://images.kiwi.com/airlines/64/RI.png"
  },
  "Trans Air Congo": {
    "id": "Q8",
    "lcc": "0",
    "name": "Trans Air Congo",
    "logo": "https://images.kiwi.com/airlines/64/Q8.png"
  },
  "Corendon": {
    "id": "XC",
    "lcc": "1",
    "name": "Corendon",
    "logo": "https://images.kiwi.com/airlines/64/XC.png"
  },
  "Thai Smile": {
    "id": "WE",
    "lcc": "1",
    "name": "Thai Smile",
    "logo": "https://images.kiwi.com/airlines/64/WE.png"
  },
  "Southern Air Charter": {
    "id": "PL",
    "lcc": "0",
    "name": "Southern Air Charter",
    "logo": "https://images.kiwi.com/airlines/64/PL.png"
  },
  "Royal Air Maroc": {
    "id": "AT",
    "lcc": "0",
    "name": "Royal Air Maroc",
    "logo": "https://images.kiwi.com/airlines/64/AT.png"
  },
  "EVA Air": {
    "id": "BR",
    "lcc": "1",
    "name": "EVA Air",
    "logo": "https://images.kiwi.com/airlines/64/BR.png"
  },
  "Malaysia Airlines": {
    "id": "MH",
    "lcc": "1",
    "name": "Malaysia Airlines",
    "logo": "https://images.kiwi.com/airlines/64/MH.png"
  },
  "Orient Thai Airlines": {
    "id": "OX",
    "lcc": "1",
    "name": "Orient Thai Airlines",
    "logo": "https://images.kiwi.com/airlines/64/OX.png"
  },
  "SATA Azores Airlines": {
    "id": "S4",
    "lcc": "0",
    "name": "SATA Azores Airlines",
    "logo": "https://images.kiwi.com/airlines/64/S4.png"
  },
  "Trenitalia": {
    "id": "7T",
    "lcc": "0",
    "name": "Trenitalia",
    "logo": "https://images.kiwi.com/airlines/64/7T.png"
  },
  "Arda Tur": {
    "id": "ARDATUR",
    "lcc": "None",
    "name": "Arda Tur",
    "logo": "https://images.kiwi.com/airlines/64/ARDATUR.png"
  },
  "Magical Shuttle": {
    "id": "MAGICSHUT",
    "lcc": "None",
    "name": "Magical Shuttle",
    "logo": "https://images.kiwi.com/airlines/64/MAGICSHUT.png"
  },
  "Crnja tours": {
    "id": "CRNJAT",
    "lcc": "None",
    "name": "Crnja tours",
    "logo": "https://images.kiwi.com/airlines/64/CRNJAT.png"
  },
  "Virgin Atlantic Airways": {
    "id": "VS",
    "lcc": "0",
    "name": "Virgin Atlantic Airways",
    "logo": "https://images.kiwi.com/airlines/64/VS.png"
  },
  "GDN Express": {
    "id": "GDNEX",
    "lcc": "None",
    "name": "GDN Express",
    "logo": "https://images.kiwi.com/airlines/64/GDNEX.png"
  },
  "Global biomet ": {
    "id": "GLOBALBIO",
    "lcc": "None",
    "name": "Global biomet ",
    "logo": "https://images.kiwi.com/airlines/64/GLOBALBIO.png"
  },
  "Christian Transfers": {
    "id": "CHRISTRAN",
    "lcc": "None",
    "name": "Christian Transfers",
    "logo": "https://images.kiwi.com/airlines/64/CHRISTRAN.png"
  },
  "Yellow Transfers": {
    "id": "YELLOWTRAN",
    "lcc": "None",
    "name": "Yellow Transfers",
    "logo": "https://images.kiwi.com/airlines/64/YELLOWTRAN.png"
  },
  "Sky Express": {
    "id": "GQ",
    "lcc": "0",
    "name": "Sky Express",
    "logo": "https://images.kiwi.com/airlines/64/GQ.png"
  },
  "Deutsche Bahn": {
    "id": "2A",
    "lcc": "0",
    "name": "Deutsche Bahn",
    "logo": "https://images.kiwi.com/airlines/64/2A.png"
  },
  "Autna SL - Spain": {
    "id": "AUTNA",
    "lcc": "None",
    "name": "Autna SL - Spain",
    "logo": "https://images.kiwi.com/airlines/64/AUTNA.png"
  },
  "China Railway": {
    "id": "CHINARAIL",
    "lcc": "None",
    "name": "China Railway",
    "logo": "https://images.kiwi.com/airlines/64/CHINARAIL.png"
  },
  "OK bus": {
    "id": "OKBUS",
    "lcc": "None",
    "name": "OK bus",
    "logo": "https://images.kiwi.com/airlines/64/OKBUS.png"
  },
  "Mountain Line Transit Authority": {
    "id": "MOUNTAINLI",
    "lcc": "None",
    "name": "Mountain Line Transit Authority",
    "logo": "https://images.kiwi.com/airlines/64/MOUNTAINLI.png"
  },
  "BoltBus": {
    "id": "BOLTBUS",
    "lcc": "None",
    "name": "BoltBus",
    "logo": "https://images.kiwi.com/airlines/64/BOLTBUS.png"
  },
  "SwissTours": {
    "id": "SWISSTOURS",
    "lcc": "None",
    "name": "SwissTours",
    "logo": "https://images.kiwi.com/airlines/64/SWISSTOURS.png"
  },
  "Autolinee federico": {
    "id": "AUTOLIFEDE",
    "lcc": "None",
    "name": "Autolinee federico",
    "logo": "https://images.kiwi.com/airlines/64/AUTOLIFEDE.png"
  },
  "All Nippon Airways": {
    "id": "NH",
    "lcc": "0",
    "name": "All Nippon Airways",
    "logo": "https://images.kiwi.com/airlines/64/NH.png"
  },
  "Aerobus Barcelona": {
    "id": "AEROBUSBCN",
    "lcc": "None",
    "name": "Aerobus Barcelona",
    "logo": "https://images.kiwi.com/airlines/64/AEROBUSBCN.png"
  },
  "Roma Express": {
    "id": "ROMAEX",
    "lcc": "None",
    "name": "Roma Express",
    "logo": "https://images.kiwi.com/airlines/64/ROMAEX.png"
  },
  "Balearia": {
    "id": "BALEARIA",
    "lcc": "None",
    "name": "Balearia",
    "logo": "https://images.kiwi.com/airlines/64/BALEARIA.png"
  },
  "MAYAir": {
    "id": "5G",
    "lcc": "0",
    "name": "MAYAir",
    "logo": "https://images.kiwi.com/airlines/64/5G.png"
  },
  "Amsterdam Airlines": {
    "id": "WD",
    "lcc": "0",
    "name": "Amsterdam Airlines",
    "logo": "https://images.kiwi.com/airlines/64/WD.png"
  },
  "Ibom Air": {
    "id": "Z4",
    "lcc": "0",
    "name": "Ibom Air",
    "logo": "https://images.kiwi.com/airlines/64/Z4.png"
  },
  "Air Albania": {
    "id": "ZB",
    "lcc": "1",
    "name": "Air Albania",
    "logo": "https://images.kiwi.com/airlines/64/ZB.png"
  },
  "Air Peace Limited": {
    "id": "P4",
    "lcc": "0",
    "name": "Air Peace Limited",
    "logo": "https://images.kiwi.com/airlines/64/P4.png"
  },
  "Italo NTV": {
    "id": "ITALONTV",
    "lcc": "None",
    "name": "Italo NTV",
    "logo": "https://images.kiwi.com/airlines/64/ITALONTV.png"
  },
  "Italobus": {
    "id": "ITALOBUS",
    "lcc": "None",
    "name": "Italobus",
    "logo": "https://images.kiwi.com/airlines/64/ITALOBUS.png"
  },
  "Wings of Lebanon": {
    "id": "W7",
    "lcc": "0",
    "name": "Wings of Lebanon",
    "logo": "https://images.kiwi.com/airlines/64/W7.png"
  },
  "Air Seoul": {
    "id": "RS",
    "lcc": "0",
    "name": "Air Seoul",
    "logo": "https://images.kiwi.com/airlines/64/RS.png"
  }
};
