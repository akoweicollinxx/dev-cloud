export const Services = () => {

    const services = [
        { id: '01', title: 'Soft Top Cleaning', description: 'We specialise in cleaning and sanitisation of ambulances. We use steam cleaning specialist equipment to kill all bacteria and leave the surfaces germ-free. Please call for further information and prices.' },
        { id: '02', title: 'Steam Cleaning', description: 'We carry out steam cleaning of interior and exterior of vehicles. Steam cleaning kills all breathing bacteria and kills all unwelcome smells. So whether you have bought a car and want to make sure it is clean or you are a fleet operator, if your vehicles need steam cleaning please call for more information or to make a booking.' },
        { id: '03', title: 'Ambulance Cleaning', description: 'We specialise in ambulance cleaning and sanitising and can provide a tailor-made service to suit the vehicle. We use steam cleaning specialist equipment which kills all living bacteria and leaves the surfaces free from germs and any bacteria.' },
        { id: '04', title: 'Advanced Detailing', description: '2 bucket wash system, clay bar, stage 2 machine polish, wax and sealant.' },
        { id: '05', title: 'Advanced Paintwork Correction', description: '2 bucket wash system, clay barx2, stage 3 machine polish, wax and sealant.' },
        { id: '06', title: 'Engine Bay Detailing', description: 'Engine bay carefully cleaned and protected.' }
    ]

    return (
        <div className="py-20 text-white container mx-auto flex flex-col md:flex-row" id="services">
            <div className="w-1/4 pr-8">
                <h2 className="text-6xl text-black dark:text-sky-300 font-extrabold sticky top-20">SERVICES</h2>
            </div>

            <div className="w-3/4">
                {services.map(service => (
                    <div key={service.id} className="mb-16 flex items-start">
                        <div className="text-black dark:text-sky-300 font-bold text-5xl mr-6">{service.id}</div>
                        <div>
                            <h3 className="dark:text-gray-400 text-black text-2xl font-bold mb-2">{service.title}</h3>
                            <p className="dark:text-gray-400 text-black">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}