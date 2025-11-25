interface SubMenuItem {
    name: string;
    price: string;
}
interface MenuItem {
    id: number;
    name: string;
    price: string;
    description: string;
    history: string;
    sub_menu: SubMenuItem[];
    image: string;
    tag?: string;
}

const menuItems = [
    {
        id: 1,
        name: "Nasi Lemak Bunga Raya (Classic)",
        price: "RM 3.50",
        description:
            "The original taste of heritage. Fragrant coconut rice served with our signature sweet-spicy sambal, crunchy anchovies, peanuts, cucumber, and a hard-boiled egg.",
        history:
            "This dish represents the unity of Malaysia. The 'Nasi Lemak Biasa' was traditionally a breakfast meal for farmers, providing high energy for the day. Wrapped in banana leaves to enhance aroma, it is the canvas upon which all other Nasi Lemak variations are painted.",
        sub_menu: [
            { name: "Extra Sambal", price: "RM 0.50" },
            { name: "Telur Mata (Fried Egg)", price: "RM 1.50" },
        ],
        image:
            "/nasi-lemak-bunga-raya.jpg",
        tag: "Best Seller",
    },
    {
        id: 2,
        name: "Nasi Lemak Ayam Berempah",
        price: "RM 9.50",
        description:
            "Served with a whole leg of chicken marinated in 12 different spices including lemongrass, ginger, and turmeric, then deep-fried to golden perfection.",
        history:
            "Ayam Goreng Berempah (Spiced Fried Chicken) became a popular pairing in the late 80s as Nasi Lemak transitioned from a light breakfast to a hearty lunch or dinner option. The aromatic herbs in the chicken complement the santan (coconut milk) rice perfectly.",
        sub_menu: [
            { name: "Ayam Extra Piece", price: "RM 5.00" },
            { name: "Begedil (Potato Patty)", price: "RM 1.50" },
        ],
        image:
            "/nasi-lemak-ayam-berempah.jpg",
        tag: "Chef's Kiss",
    },
    {
        id: 3,
        name: "Nasi Lemak Sambal Sotong",
        price: "RM 8.00",
        description:
            "Tender squid rings slow-cooked in a deep, rich dried chili paste until soft and flavorful.",
        history:
            "Originating from the coastal Malay communities, preserving squid in spicy sambal allowed fishermen to enjoy their catch with rice. Our recipe uses 'Sotong Kering' (dried squid) which is rehydrated for 24 hours to achieve that distinct chewy yet tender texture adored by locals.",
        sub_menu: [
            { name: "Extra Sotong", price: "RM 4.00" },
            { name: "Teh Tarik Ikat Tepi", price: "RM 2.50" },
        ],
        image:
            "/nasi-lemak-sambal-sotong.jpg",
        tag: "Spicy",
    },
    {
        id: 4,
        name: "Nasi Lemak Rendang Daging",
        price: "RM 10.50",
        description:
            "Beef cubes simmered for hours in coconut milk and 'kerisik' (toasted coconut paste) until nearly dry and incredibly tender.",
        history:
            "Rendang is a Minangkabau dish that found a permanent home in Malaysian cuisine. Traditionally reserved for festivities like Hari Raya, we bring this celebration to your plate daily. The combination of rich, nutty Rendang gravy with Nasi Lemak is a testament to cultural integration.",
        sub_menu: [
            { name: "Extra Kuah Rendang", price: "RM 1.00" },
            { name: "Paru Goreng (Beef Lungs)", price: "RM 3.00" },
        ],
        image:
            "/nasi-lemak-rendang-daging.jpg",
        tag: "Heritage",
    },
];

export default menuItems;
export type { MenuItem, SubMenuItem };