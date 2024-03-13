const SiteFooter = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto flex flex-col md:flex-row pl-8">
                <div className="mb-8 md:mb-0 md:w-1/3">
                    <h2 className="text-2xl font-bold mb-4">Your Ecommerce Store</h2>
                    <p className="text-gray-400">Welcome to Your Ecommerce Store. Discover the best deals and top-quality products for all your needs.</p>
                </div>
                <div className="flex flex-col md:flex-row md:w-2/3 ">
                    <div className="quickLinks mr-8 mb-4 md:mb-0 md:w-1/2 md:pl-8">
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul>
                            <li className="mb-2"><p className="text-gray-400 hover:text-white transition duration-300">Home</p></li>
                            <li className="mb-2"><p className="text-gray-400 hover:text-white transition duration-300">Shop</p></li>
                            <li className="mb-2"><p className="text-gray-400 hover:text-white transition duration-300">About</p></li>
                            <li className="mb-2"><p className="text-gray-400 hover:text-white transition duration-300">Contact</p></li>
                        </ul>
                    </div>
                    <div className="Connect mr-8 mb-4 md:mb-0 md:w-1/2">
                        <h3 className="text-lg font-semibold mb-4">Connect</h3>
                        <ul>
                            <li className="mb-2"><p className="text-gray-400 hover:text-white transition duration-300">Facebook</p></li>
                            <li className="mb-2"><p className="text-gray-400 hover:text-white transition duration-300">Twitter</p></li>
                            <li className="mb-2"><p className="text-gray-400 hover:text-white transition duration-300">Instagram</p></li>
                            <li className="mb-2"><p className="text-gray-400 hover:text-white transition duration-300">LinkedIn</p></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                <p className="text-gray-500">© {new Date().getFullYear()} Your Ecommerce Store. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default SiteFooter;
