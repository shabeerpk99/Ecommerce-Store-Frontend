import sofaChairImg from '../assets/images/interior/1.png';
import kitchenPotImg from '../assets/images/interior/3.png';
import tableLampImg from '../assets/images/interior/6.png';
import softChairImg from '../assets/images/interior/7.png';
import kitchenDishesImg from '../assets/images/interior/9.png';
import coffeeMakerImg from '../assets/images/tech/image 23.png';
import blenderImg from '../assets/images/tech/image 29.png';
import mixerImg from '../assets/images/tech/image 32.png';

export const recommendedProducts = [
  { id: 1, title: 'T-shirts with multiple colors, for men', price: '$10.30', image: '/images/product-tshirt.png' },
  { id: 2, title: 'Jeans bag for travel\nfor men', price: '$80.95', image: '/images/product-bag.png' },
  { id: 3, title: 'Blue wallet for men\nleather metarfial', price: '$10.30', image: '/images/product-wallet.png' },
  { id: 4, title: 'Smartwatch\nsilver color modern', price: '$10.30', image: '/images/product-watch.png' },
  { id: 5, title: 'Headset for gaming\nwith mic', price: '$8.99', image: '/images/product-headset.png' },
  { id: 6, title: 'Canon camera \nblack, 100x zoom', price: '$9.99', image: '/images/product-camera.png' },
  { id: 7, title: 'Leather wallet', price: '$99.00', image: '/images/product-watch.png' },
  { id: 8, title: 'Jeans bag for travel\nfor men', price: '$34.00', image: '/images/product-bag.png' },
  { id: 9, title: 'Brown winter coat\nmedium size', price: '$12.50', image: '/images/product-coat.png' },
  { id: 10, title: 'Jeans shorts for men\nblue color', price: '$10.30', image: '/images/product-shorts.png' },
];

export const electronicsCategories = [
  { name: 'Electric kattle', price: 'From USD 240', image: '/images/cat-kettle.png' },
  { name: 'Smartphones', price: 'From USD 19', image: '/images/cat-smartphone.png' },
  { name: 'Laptops & PC', price: 'From USD 340', image: '/images/cat-laptop.png' },
  { name: 'Gaming set', price: 'From USD 35', image: '/images/cat-gaming.png' },
  { name: 'Smart watches', price: 'From USD 90', image: '/images/product-bag.png' },
  { name: 'Headphones', price: 'From USD 10', image: '/images/product-headset.png' },
  { name: 'Cameras', price: 'From USD 89', image: '/images/cat-cameras.png' },
  { name: 'Smart watches', price: 'From USD 19', image: '/images/deal-smartwatch.png' },
];

export const homeOutdoorCategories = [
  { name: 'Coffee maker', price: 'From USD 10', image: coffeeMakerImg },
  { name: 'Home appliance', price: 'From USD 19', image: mixerImg },
  { name: 'Blenders', price: 'From USD 39', image: blenderImg },
  { name: 'Kitchen mixer', price: 'From USD 100', image: tableLampImg },
  { name: 'Smart watches', price: 'From USD 19', image: sofaChairImg },
  { name: 'Kitchen dishes', price: 'From USD 19', image: kitchenDishesImg },
  { name: 'Sofa & chair', price: 'From USD 19', image: sofaChairImg },
  { name: 'Soft chairs', price: 'From USD 19', image: softChairImg },
];

export const dealItems = [
  { name: 'Smart watches', discount: '-25%', image: '/images/deal-smartwatch.png' },
  { name: 'Laptops', discount: '-15%', image: '/images/cat-laptop.png' },
  { name: 'GoPro cameras', discount: '-40%', image: '/images/cat-cameras.png' },
  { name: 'Headphones', discount: '-25%', image: '/images/cat-gaming.png' },
  { name: 'Canon camreras', discount: '-25%', image: '/images/deal-canon.png' },
];

export const services = [
  { title: 'Source from \nIndustry Hubs', image: '/images/service-source.png', icon: 'search' },
  { title: 'Customize Your Products', image: '/images/service-customize.png', icon: 'inventory' },
  { title: 'Fast, reliable shipping by ocean or air', image: '/images/service-shipping.png', icon: 'send' },
  { title: 'Product monitoring \nand inspection', image: '/images/service-security.png', icon: 'security' },
];

export const countries = [
  { name: 'Arabic Emirates', domain: 'shopname.ae', flag: '/images/flag-ae.png' },
  { name: 'Denmark', domain: 'denmark.com.dk', flag: '/images/flag-dk.png' },
  { name: 'United States', domain: 'shopname.ae', flag: '/images/flag-us.png' },
  { name: 'Arabic Emirates', domain: 'shopname.ae', flag: '/images/flag-ae.png' },
  { name: 'Australia', domain: 'shopname.ae', flag: '/images/flag-au.png' },
  { name: 'France', domain: 'shopname.com.fr', flag: '/images/flag-fr.png' },
  { name: 'Russia', domain: 'shopname.ru', flag: '/images/flag-ru.png' },
  { name: 'China', domain: 'shopname.ae', flag: '/images/flag-cn.png' },
  { name: 'Italy', domain: 'shopname.it', flag: '/images/flag-it.png' },
  { name: 'Great Britain', domain: 'shopname.co.uk', flag: '/images/flag-gb.png' },
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
