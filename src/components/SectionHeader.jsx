import { TypeAnimation } from "react-type-animation";
import useTheme from "../hooks/useTheme";

const SectionHeader = ({ heading, subHeading }) => {
    const [theme] = useTheme();

    return (
        <div className="mt-24 mb-6">
            <div className={theme === "light" ? "text-center py-4 font-bold" : "text-center py-4 font-bold text-slate-300"}>
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
                    style={{ fontSize: '3em' }}
                    repeat={Infinity}
                />
                {/* <h2 className="text-4xl mb-2">{heading}</h2> */}
                <p className="text-lg mt-2">{subHeading}</p>
            </div>
            <div className="border-b-2 border-gray-700"></div>
        </div>
    );
};

export default SectionHeader;