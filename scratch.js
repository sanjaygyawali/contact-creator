let items = [
  [
    {
      type: "brands",
      _id: "6119203e43bafb3cdfb84bfa",
      name: "digicom",
      id: "6119203e43bafb3cdfb84bfa",
    },
  ],
  [
    {
      type: "colors",
      _id: "61449d289b018e208f5dc1c9",
      code: "#ff3333",
      name: "red",
    },
  ],
  [
    {
      type: "sizes",
      _id: "61449d289b018e208f5dc1c6",
      weight: 1,
      dimension: "1x1x1",
      name: "one by one",
    },
    {
      type: "sizes",
      _id: "61449d289b018e208f5dc1c7",
      weight: 2,
      dimension: "2 x 2 x2",
      name: "two by two",
    },
    {
      type: "sizes",
      _id: "61449d289b018e208f5dc1c8",
      weight: 3,
      dimension: "3 x 3x 3",
      name: "three by theree",
    },
  ],
];

let attributes = [
  [
    {
      type: "attributes",
      name: "one-four",
      value: "1",
    },
    {
      type: "attributes",
      name: "one-four",
      value: "2",
    },
    {
      type: "attributes",
      name: "one-four",
      value: "3",
    },
    {
      type: "attributes",
      name: "one-four",
      value: "4",
    },
  ],
  [
    {
      type: "attributes",
      name: "five-eight",
      value: "1",
    },
    {
      type: "attributes",
      name: "five-eight",
      value: "2",
    },
    {
      type: "attributes",
      name: "five-eight",
      value: "3",
    },
    {
      type: "attributes",
      name: "five-eight",
      value: "4",
    },
  ],
  [
    {
      type: "attributes",
      name: "five-eight",
      value: "1",
    },
    {
      type: "attributes",
      name: "five-eight",
      value: "4",
    },
  ],
];
let testItems0 = [
  [1, 2, 3],
  [4, 5],
];
//[[1,4],[1,5],[2,4],[2,5],[3,4],[3,5]];
let testItems = [
  [1, 2, 3, 5, 7, 8],
  [9, 10, 11, 12, 13],
  [14, 15, 16, 17],
];

function calculateCartesianProduct(arrayA, arrayB) {
  const finalProduct = [];

  for (let i = 0; i < arrayA.length; i++) {
    if (!arrayB) {
      finalProduct.push([arrayA[i]]);
      continue;
    }

    for (let j = 0; j < arrayB.length; j++) {
      if (Array.isArray(arrayA[i])) {
        finalProduct.push([...arrayA[i], arrayB[j]]);
      } else {
        finalProduct.push([arrayA[i], arrayB[j]]);
      }
    }
  }

  return finalProduct;
}

function cartesianProduct(...arrayOfArrays) {
  if (!Array.isArray(arrayOfArrays)) {
    throw new TypeError("Please, send an array.");
  }

  const [arrayA, arrayB, ...restOfArrays] = arrayOfArrays;
  const finalProduct = calculateCartesianProduct(arrayA, arrayB);

  if (restOfArrays.length) {
    return cartesianProduct(finalProduct, ...restOfArrays);
  }

  return finalProduct;
}

let sampleItem = [
  {
    type: "brands",
    name: "brands",
    value: [
      {
        _id: "6119203e43bafb3cdfb84bfa",
        name: "digicom",
        id: "6119203e43bafb3cdfb84bfa",
      },
      {
        _id: "6119203e43bafb3cdfb84bfa",
        name: "tplink",
        id: "6119203e43bafb3cdfb84bfa",
      },
    ],
  },
  {
    type: "colors",
    name: "colors",
    value: [
      {
        _id: "61449d289b018e208f5dc1c9",
        code: "#ff3333",
        name: "red",
      },
      {
        _id: "61449d289b018e208f5dc1c9",
        code: "#ff3333",
        name: "green",
      },
      {
        _id: "61449d289b018e208f5dc1c9",
        code: "#ff3333",
        name: "white",
      },
    ],
  },
];
let cartesianAttributes = cartesianProduct(...attributes);
console.log(cartesianAttributes.length);
let cartesianItems = cartesianProduct(...items, ...attributes);

console.log(cartesianItems);
console.log(cartesianItems.length);
