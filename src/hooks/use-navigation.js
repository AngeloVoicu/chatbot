import { useContext } from "react";
import NavigateContext from "../components/common/context/navigation";

function useNavigation() {
    return useContext(NavigateContext)
}

export default useNavigation;