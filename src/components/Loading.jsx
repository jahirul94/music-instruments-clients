import { BallTriangle } from "react-loader-spinner";
import useTheme from "../hooks/useTheme";

const Loading = () => {
    const [theme] = useTheme();

    return <div className="min-h-screen fixed top-1/2 right-1/2">
        <BallTriangle
            height={200}
            width={200}
            radius={5}
            color={`${theme === "dark" ? "#ffffff" : "black"}`}
            ariaLabel="ball-triangle-loading"
            wrapperClass={{}}
            wrapperStyle=""
            visible={true}
        />
    </div>

};

export default Loading;