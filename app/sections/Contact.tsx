export const Contact = () => {

    return (
        <div className="py-16 max-w-[1200px] mx-auto" id="contact">
            <div className="flex items-center justify-between flex-col md:flex-row">
                <div>
                    <h2 className="md:text-7xl text-4xl font-bold mb-10 text-black/40  dark:text-white/50">Book <span className="dark:text-sky-300 text-black">Appointment</span></h2>
                    
                </div>

                <div className="dark:text-white/50 text-black mt-12">
                    <div className="mb-8">
                        <p className="text-lg mb-1">Phone</p>
                        <a href="+990788979999" className="text-2xl font-semibold underline dark:decoration-sky-400 decoration-black decoration-2
                                    underline-offset-4 hover:decoration-gray-400 transition duration-300">
                            +99 (0) 78 897 9999
                        </a>
                    </div>

                    <div className="text-lg mb-8">
                        <p className="font-bold">Office</p>
                        <p>Street 98 98987</p>
                        <p>London</p>
                        <p>United Kingdom</p>
                    </div>

                </div>
            </div>

            <form method="POST" action="https://getform.io/f/bkkynonb" id="form" className="max-w-[1200px] mx-auto flex flex-wrap justify-between">
                <div className="md:w-[48%] w-full px-12 space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-black dark:text-sky-300 mb-2">name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            required
                            className="w-full px-4 py-3 bg-transparent border  border-black dark:border-white/20 rounded-lg focus:outline-none
                                        focus:ring-2 focus:ring-sky-200"   
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-black dark:text-sky-300 mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="your@email.com"
                            required
                            className="w-full px-4 py-3 bg-transparent border  border-black dark:border-white/20 rounded-lg focus:outline-none
                                        focus:ring-2 focus:ring-sky-200"   
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-black dark:text-sky-300 mb-2">Phone Number</label>
                        <input
                            type="phone"
                            id="phone"
                            name="phone"
                            placeholder="Your number"
                            required
                            className="w-full px-4 py-3 bg-transparent border  border-black dark:border-white/20 rounded-lg focus:outline-none
                                        focus:ring-2 focus:ring-sky-200"   
                        />
                    </div>
                    
                </div>

                <div className="md:w-[48%] w-full px-12 space-y-6">
                <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-black dark:text-sky-300 mb-2">Date</label>
                        <input
                            type="date"
                            id="phone"
                            name="date"
                            placeholder="Appointment Date"
                            required
                            className="w-full px-4 py-3 bg-transparent border  border-black dark:border-white/20 rounded-lg focus:outline-none
                                        focus:ring-2 focus:ring-sky-200"   
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-black dark:text-sky-300 mb-2">Time</label>
                        <input
                            type="time"
                            id="phone"
                            name="time"
                            placeholder="Appointment Time"
                            required
                            className="w-full px-4 py-3 bg-transparent border  border-black dark:border-white/20 rounded-lg focus:outline-none
                                        focus:ring-2 focus:ring-sky-200"   
                        />
                    </div>
                    
                </div>

                <div className="md:w-[48%] w-full px-12 mt-6 md:mt-4 md:text-right">
                    <button type="submit" className="inline-block w-16 h-16 bg-transparent border border-sky-400 text-sky-400
                                        font-medium rounded-lg hover:bg-sky-700 hover:text-white transition duration-300 ease-in-out
                                        transform hover:scale-105">
                        →
                    </button>
                </div>
            </form>




        </div>
    )
}