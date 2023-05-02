import { MenuItem } from "src/model.ts/menu-item";

var defaultQuantity = 0;
export const menuItems : MenuItem[] = [
    { 
        id : 0, name: 'Black Coffee', 
        desc: 'Bitter, unsweetened coffee without milk or cream', 
        price: 4, quantity: 
        defaultQuantity
    },
    { 
        id : 1, name: 'Seasoned Fries', 
        desc: 'Deliciously crispy seasoned fries with the perfect blend of spices.', 
        price: 7, 
        quantity: defaultQuantity
    },
    { 
        id : 2, 
        name: 'Nasi Lemak', 
        desc: 'Famous Malaysian dish with coconut rice, sambal, peanuts, and anchovies.', 
        price: 11, 
        quantity: defaultQuantity},
    { 
        id : 3, 
        name: 'Macchiato', 
        desc: 'Bold espresso topped with a dollop of frothed milk; rich and aromatic Italian classic.', 
        price: 5, 
        quantity: defaultQuantity},
    { 
        id : 4, 
        name: "Uncle Iroh's Jasmine White Tea", 
        desc: 'Delicate and aromatic white tea infused with sweet jasmine flowers for a soothing and refreshing experience.', 
        price: 6, 
        quantity: defaultQuantity},
]