import sofaChairImg from '../assets/images/interior/sofa-chair.png';
import tableLampImg from '../assets/images/interior/table-lamp.png';
import coffeeMakerImg from '../assets/images/tech/coffee-maker.png';
import blenderImg from '../assets/images/tech/blender.png';
import airMattressImg from '../assets/images/tech/air-mattress.png';
import dragonTreeImg from '../assets/images/tech/dragon-tree.png';
import kitchenMixerImg from '../assets/images/tech/kitchen-mixer.png';
import electricKettleImg from '../assets/images/tech/electric-kettle.png';
import productTshirtImg from '../assets/images/products/tshirt.png';
import productBagImg from '../assets/images/products/bag.png';
import productWalletImg from '../assets/images/products/wallet.png';
import productWatchImg from '../assets/images/products/watch.png';
import productHeadsetImg from '../assets/images/products/headset.png';
import productCameraImg from '../assets/images/products/camera.png';
import productCoatImg from '../assets/images/products/coat.png';
import productShortsImg from '../assets/images/products/shorts.png';
import categoryKettleImg from '../assets/images/categories/kettle.png';
import categorySmartphoneImg from '../assets/images/categories/smartphone.png';
import categoryLaptopImg from '../assets/images/categories/laptop.png';
import categoryGamingImg from '../assets/images/categories/gaming.png';
import categoryCamerasImg from '../assets/images/categories/cameras.png';
import dealSmartwatchImg from '../assets/images/deals/smartwatch.png';
import dealCanonImg from '../assets/images/deals/canon.png';
import serviceSourceImg from '../assets/images/services/source.png';
import serviceCustomizeImg from '../assets/images/services/customize.png';
import serviceShippingImg from '../assets/images/services/shipping.png';
import serviceSecurityImg from '../assets/images/services/security.png';
import flagAeImg from '../assets/images/flags/ae.png';
import flagDkImg from '../assets/images/flags/dk.png';
import flagUsImg from '../assets/images/flags/us.png';
import flagAuImg from '../assets/images/flags/au.png';
import flagFrImg from '../assets/images/flags/fr.png';
import flagRuImg from '../assets/images/flags/ru.png';
import flagCnImg from '../assets/images/flags/cn.png';
import flagItImg from '../assets/images/flags/it.png';
import flagGbImg from '../assets/images/flags/gb.png';


export const recommendedProducts = [
  { id: 1, title: 'T-shirts with multiple colors, for men', price: '$10.30', image: productTshirtImg },
  { id: 2, title: 'Jeans bag for travel\nfor men', price: '$80.95', image: productBagImg },
  { id: 3, title: 'Blue wallet for men\nleather metarfial', price: '$10.30', image: productWalletImg },
  { id: 4, title: 'Smartwatch\nsilver color modern', price: '$10.30', image: productWatchImg },
  { id: 5, title: 'Headset for gaming\nwith mic', price: '$8.99', image: productHeadsetImg },
  { id: 6, title: 'Canon camera \nblack, 100x zoom', price: '$9.99', image: productCameraImg },
  { id: 7, title: 'Leather wallet', price: '$99.00', image: productWatchImg },
  { id: 8, title: 'Jeans bag for travel\nfor men', price: '$34.00', image: productBagImg },
  { id: 9, title: 'Brown winter coat\nmedium size', price: '$12.50', image: productCoatImg },
  { id: 10, title: 'Jeans shorts for men\nblue color', price: '$10.30', image: productShortsImg },
];

export const electronicsCategories = [
  { name: 'Mobile Phones', price: 'From USD 240', image: categoryKettleImg },
  { name: 'Smartphones', price: 'From USD 19', image: categorySmartphoneImg },
  { name: 'Laptops & PC', price: 'From USD 340', image: categoryLaptopImg },
  { name: 'Gaming set', price: 'From USD 35', image: categoryGamingImg },
  { name: 'E Kettle', price: 'From USD 90', image: productBagImg },
  { name: 'Headphones', price: 'From USD 10', image: productHeadsetImg },
  { name: 'Cameras', price: 'From USD 89', image: categoryCamerasImg },
  { name: 'Smart watches', price: 'From USD 19', image: dealSmartwatchImg },
];

export const homeOutdoorCategories = [
  { name: 'sofa chair', price: 'From USD 10', image: sofaChairImg },
  { name: 'Table lamp', price: 'From USD 19', image: tableLampImg },
  { name: 'Air mattress', price: 'From USD 39', image: airMattressImg },
  { name: 'Dragon tree', price: 'From USD 100', image: dragonTreeImg },
  { name: 'Electric kettle', price: 'From USD 19', image: electricKettleImg },
  { name: 'Kitchen mixer', price: 'From USD 19', image: kitchenMixerImg },
  { name: 'Coffee maker', price: 'From USD 19', image: coffeeMakerImg },
  { name: 'Blender', price: 'From USD 49', image: blenderImg },
];

export const dealItems = [
  { name: 'Smart watches', discount: '-25%', image: dealSmartwatchImg },
  { name: 'Laptops', discount: '-15%', image: categoryLaptopImg },
  { name: 'GoPro cameras', discount: '-40%', image: categoryCamerasImg },
  { name: 'Headphones', discount: '-25%', image: categoryGamingImg },
  { name: 'Canon cameras', discount: '-25%', image: dealCanonImg },
];

export const services = [
  { title: 'Source from \nIndustry Hubs', image: serviceSourceImg, icon: 'search' },
  { title: 'Customize Your Products', image: serviceCustomizeImg, icon: 'inventory' },
  { title: 'Fast, reliable shipping by ocean or air', image: serviceShippingImg, icon: 'send' },
  { title: 'Product monitoring \nand inspection', image: serviceSecurityImg, icon: 'security' },
];

export const countries = [
  { name: 'Arabic Emirates', domain: 'shopname.ae', flag: flagAeImg },
  { name: 'Denmark', domain: 'denmark.com.dk', flag: flagDkImg },
  { name: 'United States', domain: 'shopname.ae', flag: flagUsImg },
  { name: 'Arabic Emirates', domain: 'shopname.ae', flag: flagAeImg },
  { name: 'Australia', domain: 'shopname.ae', flag: flagAuImg },
  { name: 'France', domain: 'shopname.com.fr', flag: flagFrImg },
  { name: 'Russia', domain: 'shopname.ru', flag: flagRuImg },
  { name: 'China', domain: 'shopname.ae', flag: flagCnImg },
  { name: 'Italy', domain: 'shopname.it', flag: flagItImg },
  { name: 'Great Britain', domain: 'shopname.co.uk', flag: flagGbImg },
];

export const sidebarCategories = [
  'Automobiles',
  'Clothes and wear',
  'Home interiors',
  'Computer and tech',
  'Tools, equipments',
  'Sports and outdoor',
  'Animal and pets',
  'Machinery tools',
  'More category',
];

export const navbarLinks = [
  'All category',
  'Hot offers',
  'Gift boxes',
  'Projects',
  'Menu item',
  'Help',
];
