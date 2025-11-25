import menuItems from "@/data/menu-items";
import { Info, X } from "lucide-react";
interface MenuModalProps {
    item: typeof menuItems[0] | null;
    onClose: () => void;
}

const MenuModal = ({ item, onClose }: MenuModalProps) => {
    if (!item) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-card w-full max-w-4xl rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]">
                {/* Image Side */}
                <div className="w-full md:w-1/2 h-48 md:h-auto relative">
                    <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur text-foreground px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                        Origin Story
                    </div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col overflow-y-auto">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h3 className="text-2xl font-bold font-serif text-foreground">
                                {item.name}
                            </h3>
                            <p className="text-xl text-primary font-bold mt-1">
                                {item.price}
                            </p>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-secondary rounded-full text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <X />
                        </button>
                    </div>

                    <div className="prose prose-sm dark:prose-invert mb-6">
                        <p className="text-muted-foreground">{item.description}</p>
                    </div>

                    <div className="bg-secondary/50 rounded-lg p-5 mb-6 border border-border">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-primary mb-2 flex items-center gap-2">
                            <Info /> Historical Context
                        </h4>
                        <p className="text-sm text-foreground/80 leading-relaxed italic">
                            "{item.history}"
                        </p>
                    </div>

                    <div className="mt-auto">
                        <h4 className="font-bold text-foreground mb-3">
                            Add-on Suggestions (Sub Menu)
                        </h4>
                        <ul className="space-y-2">
                            {item.sub_menu.map((sub, idx) => (
                                <li
                                    key={idx}
                                    className="flex justify-between items-center text-sm p-3 rounded-md bg-background border border-border"
                                >
                                    <span className="text-foreground font-medium">
                                        {sub.name}
                                    </span>
                                    <span className="text-muted-foreground">
                                        {sub.price}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuModal;