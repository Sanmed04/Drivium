import { MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-zinc-900 text-white bottom-0 w-full z-0 mt-20">
            <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                <p className="text-center sm:text-left">
                    &copy; 2024 Drivium. All rights reserved.
                </p>
                <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">
                        Buenos Aires, Argentina
                    </span>
                </div>
            </div>
        </footer>
    );
}
