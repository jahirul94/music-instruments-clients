import { TypeAnimation } from "react-type-animation";
import useTheme from "../hooks/useTheme";

const SectionHeader = ({ heading, subHeading }) => {
    const [theme] = useTheme();

    return (
        <div className="mt-10 md:mt-24 mb-6">
            <div className={`${theme === "light" ? "text-[#493E45]" : "text-slate-300"} text-center py-4 font-bold `}>
                <h2 className="font-[Poppins] text-2xl md:text-3xl lg:text-5xl">{heading}</h2>

                <p className="text-base md:text-xl my-2">
                    <TypeAnimation
                        sequence={[
                            `${subHeading}`,
                            2000,
                            `Explore our website`,
                            2000,
                            `${subHeading}`,
                            2000,
                            `Explore our website`,
                            2000,
                        ]}
                        speed={50}
                        repeat={Infinity}
                    />
                </p>
            </div>
            <div className="border-b-2 border-gray-700"></div>
        </div>
    );
};

export default SectionHeader;