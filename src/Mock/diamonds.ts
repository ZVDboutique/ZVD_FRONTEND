import { Diamond } from '../Types/diamond.types';

export const generateMockDiamonds = (count: number = 100): Diamond[] => {
  const shapes = ['Round', 'Princess', 'Oval', 'Cushion', 'Emerald'];
  const colors = ['D', 'E', 'F', 'G', 'H', 'I', 'J'];
  const clarities = ['IF', 'VVS1', 'VVS2', 'VS1', 'VS2', 'SI1', 'SI2'];
  const grades = ['Excellent', 'Very Good', 'Good'];
  const locations = ['Mumbai', 'Surat', 'New York', 'Antwerp'];
  const labs = ['GIA', 'IGI', 'HRD'];
  const types = ['Natural', 'Lab-Grown'];
  const shades = ['None', 'Faint', 'Medium', 'Strong'];

  return Array.from({ length: count }, (_, index) => {
    const weight = Number((Math.random() * 5 + 0.3).toFixed(2));
    const pricePerCarat = Number((Math.random() * 10000 + 1000).toFixed(2));
    const disc = Number((Math.random() * 40 + 10).toFixed(2));

    return {
      id: `id-${index + 1}`,
      dna: `DNA${Math.floor(Math.random() * 1000000)}`,
      type: types[Math.floor(Math.random() * types.length)],
      lab: labs[Math.floor(Math.random() * labs.length)],
      report: `${Math.floor(Math.random() * 10000000)}`,
      location: locations[Math.floor(Math.random() * locations.length)],
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      weight,
      color: colors[Math.floor(Math.random() * colors.length)],
      clarity: clarities[Math.floor(Math.random() * clarities.length)],
      cut: grades[Math.floor(Math.random() * grades.length)],
      polish: grades[Math.floor(Math.random() * grades.length)],
      symmetry: grades[Math.floor(Math.random() * grades.length)],
      disc,
      pricePerCarat,
      amount: Number((weight * pricePerCarat * (1 - disc / 100)).toFixed(2)),
      measurement: `${(Math.random() * 5 + 3).toFixed(2)} x ${(
        Math.random() * 5 +
        3
      ).toFixed(2)} x ${(Math.random() * 3 + 2).toFixed(2)}`,
      depth: Number((Math.random() * 10 + 60).toFixed(1)),
      table: Number((Math.random() * 10 + 55).toFixed(1)),
      lwRatio: Number((Math.random() * 0.2 + 1).toFixed(2)),
      shade: shades[Math.floor(Math.random() * shades.length)],
      keyToSymbol: `KTS${Math.floor(Math.random() * 1000)}`,
      companyCode: `CC${Math.floor(Math.random() * 10000)}`,
    };
  });
};
