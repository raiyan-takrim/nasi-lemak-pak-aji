import menuItems from "@/data/menu-items";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";



const MenuSection = () => {
    return (
        <section
            id="menu"
            className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
            <div className="text-center mb-12">
                <span className="text-primary font-semibold tracking-wider uppercase text-sm">
                    Authentic Selection
                </span>
                <h2 className="text-4xl font-bold font-serif text-foreground mt-2">
                    The Pak Aji Menu
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {menuItems.map((item) => (
                    <div
                        key={item.id}
                        className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 flex flex-col"
                    >
                        <Link href={`/menu-item/${item.id}`} className="relative block">
                        <div className="relative h-48 overflow-hidden">
                            <Image
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                fill
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300"></div>
                            {item.tag && (
                                <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded">
                                    {item.tag}
                                </span>
                            )}
                        </div>
                        <div>
                            <div className="p-5 flex-1 flex flex-col">
                                <h3 className="font-bold text-lg text-foreground mb-2 line-clamp-1">
                                    {item.name}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                                    {item.description}
                                </p>
                                <div className="mt-auto flex justify-between items-center">
                                    <span className="text-lg font-bold text-primary">
                                        {item.price}
                                    </span>
                                    <span
                                        className="text-xs text-muted-foreground group-hover:text-primary transition-colors flex items-center">
                                        View More <ChevronRight />
                                    </span>
                                </div>
                            </div>
                        </div>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    )
};
export default MenuSection;