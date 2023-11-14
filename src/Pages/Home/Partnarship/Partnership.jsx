import SectionHeader from "../../../components/SectionHeader";

const Partnership = () => {

    return (
        <div className="w-11/12 mx-auto">
            <SectionHeader heading="Partners Brands"></SectionHeader>
            <div className="space-y-6">
                <div className="border border-spacing-2 border-gray-400 hover:scale-105 duration-500">
                    <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
                        <div className="md:col-span-1">
                            <img className="w-full h-full p-2 rounded-lg float-left" src="https://plus.unsplash.com/premium_photo-1682293779614-58b5ed05a8d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXVzaWNhbCUyMGluc3RydW1lbnR8ZW58MHx8MHx8fDA%3D" alt="Brand Image" />
                        </div>
                        <div className="p-4 md:col-span-2">
                            <div className="font-bold text-3xl my-2">Rocking Jack</div>
                            <p className="text-lg">Harmony Winds Co. periodically releases signature series instruments in collaboration with renowned musicians. These limited edition instruments are crafted to the exact specifications and preferences of the featured artist, offering musicians the opportunity to play on instruments inspired by their musical idols. <br />
                                By blending the strengths of multiple contributors, Harmony Winds Co. aims to create instruments that not only meet the high standards of professional musicians but also inspire a new generation of players. This collaborative approach ensures a constant flow of creativity and innovation within the wind instruments market.</p>
                        </div>
                    </div>
                </div>
                {/* stage-2 */}
                <div className="border border-spacing-2 border-gray-400 hover:scale-105 duration-500">
                    <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
                        <div className="p-4 md:col-span-2">
                            <div className="font-bold text-3xl my-2">Melborne Drums</div>
                            <p className="text-lg">Harmony Winds Co. periodically releases signature series instruments in collaboration with renowned musicians. These limited edition instruments are crafted to the exact specifications and preferences of the featured artist, offering musicians the opportunity to play on instruments inspired by their musical idols.<br />
                                By blending the strengths of multiple contributors, Harmony Winds Co. aims to create instruments that not only meet the high standards of professional musicians but also inspire a new generation of players. This collaborative approach ensures a constant flow of creativity and innovation within the wind instruments market.</p>
                        </div>
                        <div className="md:col-span-1">
                            <img className="w-full h-full p-2 rounded-lg float-left" src="https://drumhelper.com/wp-content/uploads/2018/09/Happy-Drummer-1024x683.jpg" alt="Brand Image" />
                        </div>
                    </div>
                </div>
                {/* stage-3 */}
                <div className="border border-spacing-2 border-gray-400 hover:scale-105 duration-500">
                    <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
                        <div className="md:col-span-1">
                            <img className="w-full h-full p-2 rounded-lg float-left" src="https://i0.wp.com/encoremusicians.com/blog/wp-content/uploads/2018/05/Emma-Rushworth-Violin.jpg?fit=960%2C719&ssl=1" alt="Brand Image" />
                        </div>
                        <div className="p-4 md:col-span-2">
                            <div className="font-bold text-3xl my-2">Yamaha Wind Instruments</div>
                            <p className="text-lg">Harmony Winds Co. periodically releases signature series instruments in collaboration with renowned musicians. These limited edition instruments are crafted to the exact specifications and preferences of the featured artist, offering musicians the opportunity to play on instruments inspired by their musical idols. <br />
                                By blending the strengths of multiple contributors, Harmony Winds Co. aims to create instruments that not only meet the high standards of professional musicians but also inspire a new generation of players. This collaborative approach ensures a constant flow of creativity and innovation within the wind instruments market.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partnership;