import { carBrands, carModels } from "../data/cars";

const generateArrItem = (arr: string[]) => {
    return arr[Math.floor(Math.random() * arr.length)];
};

const generateRandomHEXColor = () => {
    const n = (Math.random() * 0xfffff * 1000000).toString(16);
    return `#${n.slice(0, 6)}`;
};

const generateCarItem = () => {
    return {
        name: `${generateArrItem(carBrands)} ${generateArrItem(carModels)}`,
        color: `${generateRandomHEXColor()}`,
    };
};

export default generateCarItem;
