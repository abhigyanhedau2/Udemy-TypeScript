enum Cost {
    LOW,
    MEDIUM,
    HIGH,
}

// LOW recieves 0, MEDIUM recieves 1 and HIGH recieves 2

const product: {
    id: string;
    price: number;
    tags: string[];
    details: {
        title: string;
        description: string;
    };
    cost: Cost;
} = {
    id: "abc1",
    price: 12.99,
    tags: ["great-offer", "hot-and-new"],
    details: {
        title: "Red Carpet",
        description: "A great carpet - almost brand new!",
    },
    cost: Cost.LOW,
};

console.log(product);
