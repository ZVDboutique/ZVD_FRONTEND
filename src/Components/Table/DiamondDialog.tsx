import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
  Box,
} from '@mui/material';
import { Diamond } from '../../Types/diamond.types';
import { useState, useEffect } from 'react';

interface DiamondDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (diamond: Partial<Diamond>) => void;
  diamond?: Diamond;
  mode: 'add' | 'edit';
}

const DiamondDialog = ({
  open,
  onClose,
  onSubmit,
  diamond,
  mode,
}: DiamondDialogProps) => {
  const [formData, setFormData] = useState<Partial<Diamond>>({
    dna: '',
    type: 'Natural',
    lab: 'GIA',
    report: '',
    location: 'Mumbai',
    shape: 'Round',
    weight: 0,
    color: 'D',
    clarity: 'IF',
    cut: 'Excellent',
    polish: 'Excellent',
    symmetry: 'Excellent',
    disc: 0,
    pricePerCarat: 0,
    amount: 0,
    measurement: '',
    depth: 0,
    table: 0,
    lwRatio: 0,
    shade: 'None',
    keyToSymbol: '',
    companyCode: '',
  });

  useEffect(() => {
    if (diamond && mode === 'edit') {
      setFormData(diamond);
    }
  }, [diamond, mode]);

  const handleChange =
    (field: keyof Diamond) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setFormData((prev) => {
        const updates: Partial<Diamond> = {
          ...prev,
          [field]: event.target.type === 'number' ? Number(value) : value,
        };

        // Calculate amount when weight, pricePerCarat, or disc changes
        if (['weight', 'pricePerCarat', 'disc'].includes(field)) {
          const weight = field === 'weight' ? Number(value) : prev.weight || 0;
          const pricePerCarat =
            field === 'pricePerCarat' ? Number(value) : prev.pricePerCarat || 0;
          const disc = field === 'disc' ? Number(value) : prev.disc || 0;
          updates.amount = Number(
            (weight * pricePerCarat * (1 - disc / 100)).toFixed(2)
          );
        }

        return updates;
      });
    };

  const handleSubmit = () => {
    onSubmit(formData);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth='md' fullWidth>
      <DialogTitle>
        {mode === 'add' ? 'Add New Diamond' : 'Edit Diamond'}
      </DialogTitle>
      <DialogContent>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 1 }}>
          <Box sx={{ flexBasis: { xs: '100%', sm: 'calc(50% - 8px)' } }}>
            <TextField
              fullWidth
              label='DNA'
              value={formData.dna}
              onChange={handleChange('dna')}
            />
          </Box>
          <Box sx={{ flexBasis: { xs: '100%', sm: 'calc(50% - 8px)' } }}>
            <TextField
              select
              fullWidth
              label='Type'
              value={formData.type}
              onChange={handleChange('type')}
            >
              <MenuItem value='Natural'>Natural</MenuItem>
              <MenuItem value='Lab-Grown'>Lab-Grown</MenuItem>
            </TextField>
          </Box>
          <Box sx={{ flexBasis: { xs: '100%', sm: 'calc(50% - 8px)' } }}>
            <TextField
              select
              fullWidth
              label='Lab'
              value={formData.lab}
              onChange={handleChange('lab')}
            >
              <MenuItem value='GIA'>GIA</MenuItem>
              <MenuItem value='IGI'>IGI</MenuItem>
              <MenuItem value='HRD'>HRD</MenuItem>
            </TextField>
          </Box>
          <Box sx={{ flexBasis: { xs: '100%', sm: 'calc(50% - 8px)' } }}>
            <TextField
              fullWidth
              label='Report'
              value={formData.report}
              onChange={handleChange('report')}
            />
          </Box>
          <Box sx={{ flexBasis: { xs: '100%', sm: 'calc(50% - 8px)' } }}>
            <TextField
              select
              fullWidth
              label='Location'
              value={formData.location}
              onChange={handleChange('location')}
            >
              <MenuItem value='Mumbai'>Mumbai</MenuItem>
              <MenuItem value='Surat'>Surat</MenuItem>
              <MenuItem value='New York'>New York</MenuItem>
              <MenuItem value='Antwerp'>Antwerp</MenuItem>
            </TextField>
          </Box>
          <Box sx={{ flexBasis: { xs: '100%', sm: 'calc(50% - 8px)' } }}>
            <TextField
              select
              fullWidth
              label='Shape'
              value={formData.shape}
              onChange={handleChange('shape')}
            >
              <MenuItem value='Round'>Round</MenuItem>
              <MenuItem value='Princess'>Princess</MenuItem>
              <MenuItem value='Oval'>Oval</MenuItem>
              <MenuItem value='Cushion'>Cushion</MenuItem>
              <MenuItem value='Emerald'>Emerald</MenuItem>
            </TextField>
          </Box>
          <Box sx={{ flexBasis: { xs: '100%', sm: 'calc(50% - 8px)' } }}>
            <TextField
              fullWidth
              type='number'
              label='Weight'
              value={formData.weight}
              onChange={handleChange('weight')}
              inputProps={{ step: 0.01 }}
            />
          </Box>
          <Box sx={{ flexBasis: { xs: '100%', sm: 'calc(50% - 8px)' } }}>
            <TextField
              select
              fullWidth
              label='Color'
              value={formData.color}
              onChange={handleChange('color')}
            >
              {['D', 'E', 'F', 'G', 'H', 'I', 'J'].map((color) => (
                <MenuItem key={color} value={color}>
                  {color}
                </MenuItem>
              ))}
            </TextField>
          </Box>
          <Box sx={{ flexBasis: { xs: '100%', sm: 'calc(50% - 8px)' } }}>
            <TextField
              select
              fullWidth
              label='Clarity'
              value={formData.clarity}
              onChange={handleChange('clarity')}
            >
              {['IF', 'VVS1', 'VVS2', 'VS1', 'VS2', 'SI1', 'SI2'].map(
                (clarity) => (
                  <MenuItem key={clarity} value={clarity}>
                    {clarity}
                  </MenuItem>
                )
              )}
            </TextField>
          </Box>
          <Box sx={{ flexBasis: { xs: '100%', sm: 'calc(50% - 8px)' } }}>
            <TextField
              select
              fullWidth
              label='Cut'
              value={formData.cut}
              onChange={handleChange('cut')}
            >
              {['Excellent', 'Very Good', 'Good'].map((cut) => (
                <MenuItem key={cut} value={cut}>
                  {cut}
                </MenuItem>
              ))}
            </TextField>
          </Box>
          <Box sx={{ flexBasis: { xs: '100%', sm: 'calc(50% - 8px)' } }}>
            <TextField
              select
              fullWidth
              label='Polish'
              value={formData.polish}
              onChange={handleChange('polish')}
            >
              {['Excellent', 'Very Good', 'Good'].map((polish) => (
                <MenuItem key={polish} value={polish}>
                  {polish}
                </MenuItem>
              ))}
            </TextField>
          </Box>
          <Box sx={{ flexBasis: { xs: '100%', sm: 'calc(50% - 8px)' } }}>
            <TextField
              select
              fullWidth
              label='Symmetry'
              value={formData.symmetry}
              onChange={handleChange('symmetry')}
            >
              {['Excellent', 'Very Good', 'Good'].map((symmetry) => (
                <MenuItem key={symmetry} value={symmetry}>
                  {symmetry}
                </MenuItem>
              ))}
            </TextField>
          </Box>
          <Box sx={{ flexBasis: { xs: '100%', sm: 'calc(50% - 8px)' } }}>
            <TextField
              fullWidth
              type='number'
              label='Disc%'
              value={formData.disc}
              onChange={handleChange('disc')}
              inputProps={{ step: 0.1 }}
            />
          </Box>
          <Box sx={{ flexBasis: { xs: '100%', sm: 'calc(50% - 8px)' } }}>
            <TextField
              fullWidth
              type='number'
              label='Price/Carat'
              value={formData.pricePerCarat}
              onChange={handleChange('pricePerCarat')}
              inputProps={{ step: 0.01 }}
            />
          </Box>
          <Box sx={{ flexBasis: { xs: '100%', sm: 'calc(50% - 8px)' } }}>
            <TextField
              fullWidth
              type='number'
              label='Amount'
              value={formData.amount}
              disabled
              inputProps={{ step: 0.01 }}
            />
          </Box>
          <Box sx={{ flexBasis: { xs: '100%', sm: 'calc(50% - 8px)' } }}>
            <TextField
              fullWidth
              label='Measurement'
              value={formData.measurement}
              onChange={handleChange('measurement')}
              placeholder='L x W x H'
            />
          </Box>
          <Box sx={{ flexBasis: { xs: '100%', sm: 'calc(50% - 8px)' } }}>
            <TextField
              fullWidth
              type='number'
              label='Depth%'
              value={formData.depth}
              onChange={handleChange('depth')}
              inputProps={{ step: 0.1 }}
            />
          </Box>
          <Box sx={{ flexBasis: { xs: '100%', sm: 'calc(50% - 8px)' } }}>
            <TextField
              fullWidth
              type='number'
              label='Table%'
              value={formData.table}
              onChange={handleChange('table')}
              inputProps={{ step: 0.1 }}
            />
          </Box>
          <Box sx={{ flexBasis: { xs: '100%', sm: 'calc(50% - 8px)' } }}>
            <TextField
              fullWidth
              type='number'
              label='L/W Ratio'
              value={formData.lwRatio}
              onChange={handleChange('lwRatio')}
              inputProps={{ step: 0.01 }}
            />
          </Box>
          <Box sx={{ flexBasis: { xs: '100%', sm: 'calc(50% - 8px)' } }}>
            <TextField
              select
              fullWidth
              label='Shade'
              value={formData.shade}
              onChange={handleChange('shade')}
            >
              {['None', 'Faint', 'Medium', 'Strong'].map((shade) => (
                <MenuItem key={shade} value={shade}>
                  {shade}
                </MenuItem>
              ))}
            </TextField>
          </Box>
          <Box sx={{ flexBasis: { xs: '100%', sm: 'calc(50% - 8px)' } }}>
            <TextField
              fullWidth
              label='Key to Symbol'
              value={formData.keyToSymbol}
              onChange={handleChange('keyToSymbol')}
            />
          </Box>
          <Box sx={{ flexBasis: { xs: '100%', sm: 'calc(50% - 8px)' } }}>
            <TextField
              fullWidth
              label='Company Code'
              value={formData.companyCode}
              onChange={handleChange('companyCode')}
            />
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit} variant='contained' color='primary'>
          {mode === 'add' ? 'Add' : 'Save'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DiamondDialog;
