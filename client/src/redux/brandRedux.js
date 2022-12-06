//selectors

export const getBrands = ({ brands }) => brands;

export const initialState = [
  {
    id: 'brand1',
    name: 'Brand 1',
  },
  {
    id: 'brand2',
    name: 'Brand 2',
  },
  {
    id: 'brand3',
    name: 'Brand 3',
  },
  {
    id: 'brand4',
    name: 'Brand 4',
  },
  {
    id: 'brand5',
    name: 'Brand 5',
  },
  {
    id: 'brand6',
    name: 'Brand 6',
  },
  {
    id: 'brand7',
    name: 'Brand 7',
  },
  {
    id: 'brand8',
    name: 'Brand 8',
  },
];

const brandsReducer = (statePart = initialState, action = {}) => {
  switch (action.type) {
    default:
      return statePart;
  }
};

export default brandsReducer;
