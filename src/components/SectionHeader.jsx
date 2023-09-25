import { TypeAnimation } from "react-type-animation";
import useTheme from "../hooks/useTheme";

const SectionHeader = ({ heading, subHeading }) => {
    const [theme] = useTheme();

    return (
        <div className="mt-24 mb-6">
            <div className={theme === "light" ? "text-center py-4 font-bold" : "text-center py-4 font-bold text-white"}>
                <TypeAnimation
                    sequence={[
                        `${heading}`,
                        1000,
                        `${subHeading}`,
                        1000,
                        `${heading}`,
                        1000,
                        `${subHeading}`,
                        1000,
                    ]}
                    speed={50}
                    style={{ fontSize: '4em' }}
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