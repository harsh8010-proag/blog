import React from 'react'

const Spinner = () => {
    return (
        <div className="flex justify-center items-center min-h-screen gap-2">
            <div className="w-3 h-3 bg-lime-500 rounded-full animate-bounce"></div>

            <div
                className="w-3 h-3 bg-lime-500 rounded-full animate-bounce"
                style={{ animationDelay: "0.15s" }}
            ></div>

            <div
                className="w-3 h-3 bg-lime-500 rounded-full animate-bounce"
                style={{ animationDelay: "0.3s" }}
            ></div>
        </div>
    )
}

export default Spinner;