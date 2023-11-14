import SectionHeader from "../../../components/SectionHeader";
import { FaBehance, FaFacebook, FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa";
import useTheme from "../../../hooks/useTheme";

const Partnership = () => {
    const [theme] = useTheme();

    const socialLinks = <>
        <div>
            <h1 className="text-xl font-semibold my-2">Social Links:</h1>
            <div className="flex space-x-6">
                <FaFacebook title="Facebook" className="social-icon"></FaFacebook>
                <FaYoutube title="Youtube" className="social-icon"></FaYoutube>
                <FaLinkedin title="Linkedin" className="social-icon"></FaLinkedin>
                <FaBehance title="Behance" className="social-icon"></FaBehance>
                <FaWhatsapp title="Whatsapp" className="social-icon"></FaWhatsapp>
            </div>
        </div></>

    return (
        <div className={`${theme === "light" ? "text-black" : "text-slate-300"} w-11/12 mx-auto`}>
            {/* section title  */}
            <SectionHeader heading="Partners Brands" subHeading="Our Honorable Partners"></SectionHeader>

            <div className="space-y-6">
                <div className="border border-spacing-2 border-gray-400 hover:scale-105 duration-500">
                    <div className="w-full flex flex-col md:flex-row">
                        <div className="w-full md:w-1/3">
                            <img className="w-full h-full p-2 rounded-lg float-left" src="https://plus.unsplash.com/premium_photo-1682293779614-58b5ed05a8d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXVzaWNhbCUyMGluc3RydW1lbnR8ZW58MHx8MHx8fDA%3D" alt="Brand Image" />
                        </div>
                        <div className="p-4 w-full md:w-2/3">
                            <div className="font-bold text-3xl my-2">Rocking Jack</div>
                            <p className="text-lg">Harmony Winds Co. periodically releases signature series instruments in collaboration with renowned musicians. These limited edition instruments are crafted to the exact specifications and preferences of the featured artist, offering musicians the opportunity to play on instruments inspired by their musical idols. <br />
                                By blending the strengths of multiple contributors, Harmony Winds Co. aims to create instruments that not only meet the high standards of professional musicians but also inspire a new generation of players. This collaborative approach ensures a constant flow of creativity and innovation within the wind instruments market.Through forums, discussion boards, and live Q&A sessions, learners can connect with instructors and fellow drum enthusiasts, sharing insights, asking questions, and building a supportive network.</p>
                            {socialLinks}
                        </div>
                    </div>
                </div>
                {/* card-2 */}
                <div className="border border-spacing-2 border-gray-400 hover:scale-105 duration-500">
                    <div className="w-full flex flex-col-reverse md:flex-row">
                        <div className="p-4 w-full md:w-2/3">
                            <div className="font-bold text-3xl my-2">Melbourne Drums</div>
                            <p className="text-lg">Melbourne Drums is a dynamic and innovative online platform dedicated to music instrument learning, with a specific focus on drums. Offering a comprehensive and engaging learning experience, Melbourne Drums caters to aspiring drummers of all skill levels, from beginners to advanced players.
                                The platform boasts a user-friendly interface designed to facilitate a smooth and enjoyable learning journey. Whether you{"'"}re a novice looking to grasp the fundamentals or an experienced drummer aiming to refine your technique, Melbourne Drums provides a diverse range of lessons and resources to meet your needs.Whether you{"'"}re a drumming enthusiast or someone just starting to explore the world of percussion, Melbourne Drums aims to be your go-to destination for quality drumming education. By combining expertise, technology, and a passion for music, Melbourne Drums empowers individuals to develop their skills and express themselves through the art of drumming.</p>
                            {socialLinks}
                        </div>
                        <div className="w-full md:w-1/3">
                            <img className="w-full h-full p-2 rounded-lg float-left" src="https://drumhelper.com/wp-content/uploads/2018/09/Happy-Drummer-1024x683.jpg" alt="Brand Image" />
                        </div>
                    </div>
                </div>
                {/* card-3 */}
                <div className="border border-spacing-2 border-gray-400 hover:scale-105 duration-500">
                    <div className="w-full flex flex-col md:flex-row">
                        <div className="w-full md:w-1/3">
                            <img className="w-full h-full p-2 rounded-lg float-left" src="https://i0.wp.com/encoremusicians.com/blog/wp-content/uploads/2018/05/Emma-Rushworth-Violin.jpg?fit=960%2C719&ssl=1" alt="Brand Image" />
                        </div>
                        <div className="p-4 w-full md:w-2/3">
                            <div className="font-bold text-3xl my-2">Yamaha Wind Instruments</div>
                            <p className="text-lg">Yamaha Wind Instruments embody a harmonious convergence of craftsmanship and innovation, reflecting a legacy of over a century in the pursuit of musical excellence. Meticulously crafted by skilled artisans, these instruments seamlessly blend traditional artistry with cutting-edge technology, ensuring a standard of quality that resonates with musicians of all levels. Yamaha{"'"}s commitment to innovation has led to the development of groundbreaking technologies, enhancing playability and tonal richness. With a comprehensive range catering to diverse musical needs, from iconic saxophones to exquisite clarinets, Yamaha remains a steadfast companion for musicians seeking instruments that inspire and elevate their artistry. Beyond manufacturing, Yamaha actively promotes music education and community engagement, contributing to a vibrant and supportive musical ecosystem. Yamaha Wind Instruments stand as a testament to the enduring legacy of a brand that continues to shape the future of music with passion and unwavering dedication.</p>
                            {socialLinks}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partnership;