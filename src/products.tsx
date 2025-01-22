import { 
    FaTshirt, FaShoePrints, FaClock, FaHatCowboy, 
     FaRunning, FaWallet, FaSuitcase ,
} from 'react-icons/fa';
import { RiShirtFill } from "react-icons/ri";
import { 
     BsBackpackFill ,BsSunglasses
} from 'react-icons/bs';
import { PiBaseballCapBold } from "react-icons/pi";
import { GiBelt } from "react-icons/gi";

export const products = [
    {
        id: 1,
        name: 'Classic Denim Jacket',
        icon: <FaTshirt />, // Icon for clothing
        price: 89,
    },
    {
        id: 2,
        name: 'White Sneakers',
        icon: <FaShoePrints />, // Icon for shoes
        price: 75,
    },
    {
        id: 3,
        name: 'Black Leather Backpack',
        icon: <BsBackpackFill />, // Icon for backpack
        price: 95,
    },
    {
        id: 4,
        name: 'Premium Watch',
        icon: <FaClock />, // Icon for a watch
        price: 299,
    },
    {
        id: 5,
        name: 'Summer Hat',
        icon: <FaHatCowboy />, // Icon for a cowboy hat
        price: 45,
    },
    {
        id: 6,
        name: 'Sunglasses',
        icon: <BsSunglasses />, // Icon for sunglasses
        price: 89,
    },
    {
        id: 7,
        name: 'Running Shoes',
        icon: <FaRunning />, // Icon for running
        price: 120,
    },
    {
        id: 8,
        name: 'Leather Wallet',
        icon: <FaWallet />, // Icon for wallet
        price: 55,
    },
    {
        id: 9,
        name: 'Casual Shirt',
        icon: <RiShirtFill />, // Icon for a casual shirt (HiOutlineShirt)
        price: 65,
    },
    {
        id: 10,
        name: 'Sports Cap',
        icon: <PiBaseballCapBold />, // Icon for a sports cap (BsCap)
        price: 35,
    },
    {
        id: 11,
        name: 'Canvas Shoes',
        icon: <FaShoePrints />, // Reuse icon for shoes
        price: 69,
    },
    {
        id: 12,
        name: 'Hoodie',
        icon: <FaTshirt />, // Closest match: T-shirt icon
        price: 79,
    },
    {
        id: 13,
        name: 'Belt',
        icon: <GiBelt />, // Icon for a belt
        price: 49,
    },
    {
        id: 14,
        name: 'Beanie',
        icon: <FaHatCowboy />, // Closest match: Cowboy hat
        price: 29,
    },
    {
        id: 15,
        name: 'Travel Bag',
        icon: <FaSuitcase />, // Icon for a suitcase
        price: 159,
    },
];
