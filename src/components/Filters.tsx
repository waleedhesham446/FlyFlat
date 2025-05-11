import { 
  Box, 
  Typography, 
  Button, 
  Slider,
  Paper,
} from "@mui/material";
import { 
  RestartAlt,
} from '@mui/icons-material';

interface FiltersProps {
  minPrice: number;
  maxPrice: number;
  priceRange: number[];
  setPriceRange: (value: number[]) => void;
}

export const Filters = ({ minPrice, maxPrice, priceRange, setPriceRange }: FiltersProps) => {

  const handlePriceRangeChange = (event: Event, newValue: number[]) => {
    setPriceRange(newValue);
  };

  const handleClearFilters = () => {
    setPriceRange([minPrice, maxPrice]);
  };

  return (
    <Paper elevation={2} sx={{ p: 3, mb: 4, borderRadius: 3 }}>
      <Typography variant="h6" gutterBottom>
        Filters
      </Typography>
      <Box sx={{ width: "100%", mt: 3 }}>
        <Typography id="price-slider" gutterBottom>
          Price Range: ${priceRange[0]} - ${priceRange[1]}
        </Typography>
        <Slider
          value={priceRange}
          onChange={handlePriceRangeChange}
          valueLabelDisplay="auto"
          min={minPrice}
          max={maxPrice}
          step={100}
          aria-labelledby="price-slider"
          sx={{ maxWidth: 500 }}
        />
      </Box>
      <Button
        variant="outlined"
        startIcon={<RestartAlt />}
        onClick={handleClearFilters}
        sx={{ mt: 2 }}
      >
        Clear Filters
      </Button>
    </Paper>
  );
};
