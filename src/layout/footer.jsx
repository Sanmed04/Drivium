import { MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-zinc-900 text-white fixed bottom-0 w-full">
            <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                <p className="text-center sm:text-left">
                    &copy; 2023 CarRent. All rights reserved.
                </p>
                <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">
                        123 Car Street, Auto City, AC 12345
                    </span>
                </div>
            </div>
        </footer>
    );
}
