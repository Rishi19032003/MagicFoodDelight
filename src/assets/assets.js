import logo2 from './logo2.png'
import menu_icon from './menu_icon.png'
import dropdown_icon from './dropdown_icon.png'
import shrimp from './shrimp.png'
import Tilapia from './Tilapia.png'
import Cuttlefish from './Cuttlefish.png'
import FlyingSquid from './FlyingSquid.png'
import SeaTigerShrimp from './SeaTigerShrimp.png'
//similarly do for all

// Then export it

//For images
export const assets = {
    logo2,
    menu_icon,
    dropdown_icon,
    shrimp,
    Tilapia,
    Cuttlefish,
    FlyingSquid,
    SeaTigerShrimp
}


//For product details
export const products = [
    {
        _id: "aaaa",
        name: "something",
        image: [logo2]
    }
]

export const Products = () => {
    const products = [
        {
            id: 1,
            name: "Fresh Shrimp",
            description: "High-quality shrimp caught sustainably from coastal waters.",
            image: shrimpImage,
        },
        {
            id: 2,
            name: "Tilapia",
            description: "Farm-raised tilapia with a mild flavor, perfect for grilling or baking.",
            image: tilapiaImage,
        },
        {
            id: 3,
            name: "Cuttlefish",
            description: "Tender and flavorful cuttlefish, ideal for a variety of seafood dishes.",
            image: cuttlefishImage,
        },
    ];
}