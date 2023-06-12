import SectionHeader from "../../../components/SectionHeader";

const OurService = () => {
    return (
        <div className="text-white px-8">
            <SectionHeader heading="Our Services" subHeading="Explore Our Services "></SectionHeader>
            <div className="grid sm:grid-cols-1 lg:grid-cols-3 text-center pb-6 w-full">
                <div className="me-4 mb-8 p-2 border border-slate-300 rounded-lg">
                    <h3 className="text-xl font-bold text-center mb-2 mt-6">Beginner-Friendly Approach</h3>
                    <p className="mb-4"><small> If you're a beginner and have never played an instrument before, don't worry! Our beginner-friendly approach will guide you step-by-step, starting from the basics of music theory, instrument technique, and gradually building your skills. We make sure that you have a solid foundation to build upon.</small></p>
                </div>
                <div className="me-4 mb-8 p-2 border border-slate-300 rounded-lg">
                    <h3 className="text-xl font-bold text-center mb-2 mt-6">Highly Qualified Instructors</h3>
                    <p><small> Our instructors are experienced musicians and educators who are passionate about teaching. They have years of experience in their respective instruments and are dedicated to helping you develop your skills and achieve your musical goals.</small></p>
                </div>
                <div className="me-4 mb-8 border p-2 border-slate-300 rounded-lg">
                    <h3 className="text-xl font-bold text-center mb-2 mt-6">Affordable Pricing</h3>
                    <p><small> We strive to make music education accessible to everyone, which is why we offer competitive and affordable pricing options. We believe that learning an instrument shouldn't be restricted by financial constraints.</small></p>
                </div>
            </div>
        </div>
    );
};

export default OurService;