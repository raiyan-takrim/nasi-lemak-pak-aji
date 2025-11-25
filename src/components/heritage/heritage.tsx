import { Leaf } from "lucide-react";
import Image from "next/image";

const HeritageSection = () => (
    <section id="heritage" className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                        More Than Just Breakfast
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                        This digital menu is part of our "Thinking and Communication
                        Skills" coursework. We chose Nasi Lemak Pak Aji because food
                        is the strongest language in Malaysia. It bridges gaps between
                        cultures, ages, and backgrounds.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                        Nasi Lemak is considered the national dish of Malaysia. The
                        name literally means "oily or fatty rice," but in this
                        context, it means "rich" or "creamy". The process of soaking
                        rice in coconut milk and steaming it with pandan leaves
                        creates a fragrance that is instantly recognizable to any
                        Malaysian.
                    </p>
                    <div className="flex items-center space-x-4 pt-4">
                        <div className="flex items-center space-x-2 text-primary font-medium">
                            <Leaf />
                            <span>Pandan Infused</span>
                        </div>
                        <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                        <div className="flex items-center space-x-2 text-primary font-medium">
                            <span className="text-xl">🌶️</span>
                            <span>Authentic Sambal</span>
                        </div>
                    </div>
                </div>
                <div className="relative h-80 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-border">
                    <Image
                        src="/heritage-food.jpg"
                        alt="Malaysian Heritage Food"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        fill
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex items-end p-8">
                        <p className="text-white font-serif italic text-lg">
                            "Where culture meets cuisine."
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
export default HeritageSection;