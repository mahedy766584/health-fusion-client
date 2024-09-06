import { useEffect, useState } from "react";

export const useThemes = () =>{
    const [mode, setMode] = useState("light");

    function changeTheme() {
        const html = document.documentElement

        if (mode === "light") {
            html.classList.remove("light")
            html.classList.add("dark")
            setMode("dark")
            localStorage.setItem("mode", "dark")
        } else {
            html.classList.remove("dark")
            html.classList.add("light")
            setMode("light")
            localStorage.setItem("mode", "light")
        }
    }

    useEffect(() => {
        const currentMode = localStorage.getItem("mode") || "light"
        setMode(currentMode)
        const html = document.documentElement
        html.classList.add(currentMode)
        // if (currentMode) {
        //     setMode(currentMode)
        // }
        // // else{
        // //     setMode("light")
        // // }
    }, [])

    return {changeTheme, mode}
}