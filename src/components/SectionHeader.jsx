
const SectionHeader = ({ heading, subHeading }) => {
    return (
        <div className="mt-16 mb-4">
            <div className="divider"></div>
            <div className="text-center text-white">
                <h2 className="text-4xl mb-2">{heading}</h2>
                <p className="text-lg">{subHeading}</p>
            </div>
            <div className="divider"></div>
        </div>
    );
};

export default SectionHeader;