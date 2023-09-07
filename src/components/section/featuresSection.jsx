export default function Features() {

    return (

        <>

            <section className="font-medium bg-blueGray-100 rounded-3xl py-24 2xl:pt-52 2xl:pb-52">
                <div className="container px-4 mx-auto">
                    <span className="uppercase tracking-widest text-xs leading-4 mb-9 block text-center text-gray-300">New-in</span>
                    <h2 className="font-heading text-7xl md:text-7xl xl:text-5xl leading-tight mb-28 2xl:mb-32 text-center">Features</h2>
                    <div className="mb-24 md:grid md:grid-cols-2 justify-center md:gap-16 md:gap-y-20">
                        <div className="relative pt-20 pb-14 px-8 md:px-20 mb-20 md:mb-0 bg-white text-center md:text-left rounded-3xl">
                            <img className="absolute -top-8 left-20 mb-6 mx-auto md:ml-0 w-18 h-18" src="https://shuffle.dev/uinel-assets/elements/features/helpdesk.svg" alt=""/>
                                <h3 className="mb-4 font-heading text-4xl leading-tighter">Intuitive Interface</h3>
                                <p className="font-normal leading-loose text-darkBlueGray-400">Easily create and edit designs with our user-friendly interface, perfect for beginners and experts alike.</p>
                        </div>
                        <div className="relative pt-20 pb-14 px-8 md:px-20 mb-20 md:mb-0 bg-white text-center md:text-left rounded-3xl">
                            <img className="absolute -top-8 left-20 mb-6 mx-auto md:ml-0 w-18 h-18" src="https://shuffle.dev/uinel-assets/elements/features/devices.svg" alt=""/>
                                <h3 className="mb-4 font-heading text-4xl leading-tighter">Real-Time Collaboration</h3>
                                <p className="font-normal leading-loose text-darkBlueGray-400"> Collaborate seamlessly with your team in real time, making it effortless to work together on projects.</p>
                        </div>
                        <div className="relative pt-20 pb-14 px-8 md:px-20 mb-20 md:mb-0 bg-white text-center md:text-left rounded-3xl">
                            <img className="absolute -top-8 left-20 mb-6 mx-auto md:ml-0 w-18 h-18" src="https://shuffle.dev/uinel-assets/elements/features/plugin.svg" alt=""/>
                                <h3 className="mb-4 font-heading text-4xl leading-tighter">Secure Cloud Storage</h3>
                                <p className="font-normal leading-loose text-darkBlueGray-400">Safely store and access your design files from anywhere with our secure cloud storage solution..</p>
                        </div>
                        <div className="relative pt-20 pb-14 px-8 md:px-20 bg-white text-center md:text-left rounded-3xl">
                            <img className="absolute -top-8 left-20 mb-6 mx-auto md:ml-0 w-18 h-18" src="https://shuffle.dev/uinel-assets/elements/features/messages.svg" alt=""/>
                                <h3 className="mb-4 font-heading text-4xl leading-tighter">Feedback Integration</h3>
                                <p className="font-normal leading-loose text-darkBlueGray-400">Collect feedback from stakeholders and clients directly within the platform for efficient design iterations.</p>
                        </div>
                    </div>
                    <button className="block py-5 px-10 mx-auto text-xl leading-6 text-white font-medium tracking-tighter font-heading bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl" type="button">All features</button>
                </div>
            </section>

        </>

    )

}