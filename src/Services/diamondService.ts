import { Diamond } from '../Types/diamond.types';

let diamonds: Diamond[] = [];

export const diamondService = {
  createDiamond: async (diamond: Omit<Diamond, 'id'>) => {
    const newDiamond = {
      ...diamond,
      id: `id-${Date.now()}`,
    };
    diamonds.push(newDiamond);
    return newDiamond;
  },

  getAllDiamonds: async () => {
    return [...diamonds];
  },

  getDiamondById: async (id: string) => {
    return diamonds.find((d) => d.id === id);
  },

  updateDiamond: async (id: string, updates: Partial<Diamond>) => {
    const index = diamonds.findIndex((d) => d.id === id);
    if (index === -1) throw new Error('Diamond not found');

    diamonds[index] = {
      ...diamonds[index],
      ...updates,
    };
    return diamonds[index];
  },

  deleteDiamond: async (id: string) => {
    const index = diamonds.findIndex((d) => d.id === id);
    if (index === -1) throw new Error('Diamond not found');

    diamonds = diamonds.filter((d) => d.id !== id);
    return true;
  },

  initializeWithMockData: (mockData: Diamond[]) => {
    diamonds = [...mockData];
  },
};
