import { Diamond } from '../Types/diamond.types';

export const generateMockDiamonds = (): Diamond[] => {
  const mockDiamonds: Diamond[] = Array.from({ length: 200 }, (_, index) => ({
    id: `id-${index + 1}`,
    dna: `DNA-${100000 + index}`,
    type: ['Natural', 'Lab-Grown'][Math.floor(Math.random() * 2)],
    lab: ['GIA', 'IGI', 'HRD'][Math.floor(Math.random() * 3)],
    report: `${Math.floor(10000000 + Math.random() * 90000000)}`,
    location: ['Mumbai', 'Surat', 'New York', 'Antwerp'][
      Math.floor(Math.random() * 4)
    ],
    shape: ['Round', 'Princess', 'Oval', 'Cushion', 'Emerald'][
      Math.floor(Math.random() * 5)
    ],
    weight: Number((0.3 + Math.random() * 2.7).toFixed(2)),
    color: ['D', 'E', 'F', 'G', 'H', 'I', 'J'][Math.floor(Math.random() * 7)],
    clarity: ['IF', 'VVS1', 'VVS2', 'VS1', 'VS2', 'SI1', 'SI2'][
      Math.floor(Math.random() * 7)
    ],
    cut: ['Excellent', 'Very Good', 'Good'][Math.floor(Math.random() * 3)],
    polish: ['Excellent', 'Very Good', 'Good'][Math.floor(Math.random() * 3)],
    symmetry: ['Excellent', 'Very Good', 'Good'][Math.floor(Math.random() * 3)],
    price: Number((1000 + Math.random() * 19000).toFixed(2)),
    totalWeight: 0,
  }));

  mockDiamonds.forEach((diamond) => {
    diamond.totalWeight = diamond.weight;
  });

  return mockDiamonds;
};
