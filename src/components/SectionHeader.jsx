import { TypeAnimation } from "react-type-animation";
import useTheme from "../hooks/useTheme";

const SectionHeader = ({ heading, subHeading }) => {
    const [theme] = useTheme();

    return (
        <div className="mt-10 md:mt-24 mb-6">
            <div className={`${theme === "light" ? "text-[#493E45]" : "text-slate-300"} font-[Poppins] text-center py-4 font-bold text-xl md:text-3xl lg:text-5xl `}>
                <TypeAnimation
                    sequence={[
                        `${heading}`,
                        2000,
                        `Explore our website`,
                        2000,
                        `${heading}`,
                        2000,
                        `Explore our website`,
                        2000,
                    ]}
                    speed={50}
                    repeat={Infinity}
                />
                {/* <h2 className="text-4xl mb-2">{heading}</h2> */}
                <p className="text-base md:text-lg mt-2">{subHeading}</p>
            </div>
            <div className="border-b-2 border-gray-700"></div>
        </div>
    );
};

export default SectionHeader;