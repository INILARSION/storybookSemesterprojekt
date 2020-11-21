import React from 'react';
import "./E2.css"

function Frontpage (props) {
    const {...rest} = props
    return (
        <article className={"bodyE2"}>


            <h1>Survey Form</h1>

            <div id="formdiv">
                Let us know how we can improve freeCodeCamp
                <br/><br/>
                    <form className={"formE2"}>
                        <table className={"tableE2"}>
                            <tr>
                                <td className="label">
                                    <label classname={"labelE2"} htmlFor="t1">*Name: </label>
                                </td>
                                <td className="input">
                                    <input classname={"inputE2"} name="t1" required type="text" placeholder="Enter your name"/><br/>
                                </td>
                            </tr>

                            <tr>
                                <td className="label">
                                    <label classname={"labelE2"} htmlFor="t2">*Email:</label>
                                </td>
                                <td className="input">
                                    <input classname={"inputE2"} name="t2" required type="text" placeholder="Enter your Email"/><br/>
                                </td>
                            </tr>

                            <tr>
                                <td className="label">
                                    <label classname={"labelE2"} htmlFor="t3">*Age:</label>
                                </td>
                                <td className="input">
                                    <input classname={"inputE2"} name="t3" required type="number" placeholder="Age"/><br/>
                                </td>
                            </tr>

                            <tr>
                                <td className="label">
                                    <label classname={"labelE2"} htmlFor="t4">Which option best describes your current role?</label>
                                </td>
                                <td className="input">
                                    <select classname={"inputE2"} name="t4">
                                        <option>Student</option>
                                    </select><br/>
                                </td>
                            </tr>

                            <tr>
                                <td className="label">
                                    <label classname={"labelE2"}>*How likely is that you would recommend freeCodeCamp to a friend:</label>
                                </td>
                                <td className="input">
                                    <input classname={"inputE2"} type="radio"/><label classname={"labelE2"}>Definitely</label><br/>
                                        <input classname={"inputE2"} type="radio"/><label classname={"labelE2"}>Maybe</label><br/>
                                            <input classname={"inputE2"} type="radio" /><label classname={"labelE2"}>Not sure</label><br/>
                                </td>
                            </tr>

                            <tr>
                                <td className="label">
                                    <label classname={"labelE2"}>Wat do you like most in FCC:</label>
                                </td>
                                <td className="input">
                                    <select classname={"inputE2"}>
                                        <option>Select an option</option>
                                    </select>
                                </td>
                            </tr>

                            <tr>
                                <td className="label">
                                    <label classname={"labelE2"}>Things that should be improved in the future (Check that apply):</label>
                                </td>
                                <td className="input">
                                    <input classname={"inputE2"} type="checkbox" /><label classname={"labelE2"}>Front-end Projects</label><br/>
                                        <input classname={"inputE2"} type="checkbox" /><label classname={"labelE2"}>Back-end Projects</label><br/>
                                            <input classname={"inputE2"} type="checkbox"/><label classname={"labelE2"}>Data Visualization</label><br/>
                                </td>
                            </tr>

                        </table>

                    </form>
            </div>


        </article>
    )
}

export default Frontpage
