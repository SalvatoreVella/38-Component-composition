import React from "react"
import Login from "./Login"

export default class Container extends React.Component {
    render() {
        return (
            <div className="bg-white border border-red-900 m-5 p-6">
                <Login />
            </div>
        )
    }
}