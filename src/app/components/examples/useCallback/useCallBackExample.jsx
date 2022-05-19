import React, { useCallback, useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const widthOutCallback = useRef(0);
    const widthCallback = useRef(0);
    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };

    // Without Callback
    const validateWithOutCallback = (data) => {
        console.log(data);
    };
    useEffect(() => {
        widthOutCallback.current++;
    }, [validateWithOutCallback]);

    // Width callback
    const validateWithCallback = useCallback((data) => {
        console.log(data);
    }, []);
    useEffect(() => {
        widthCallback.current++;
    }, [validateWithCallback]);

    useEffect(() => {
        validateWithOutCallback(data);
        validateWithCallback(data);
    }, [data]);
    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>Render without Callback: {widthOutCallback.current}</p>
            <p>Render with Callback: {widthCallback.current}</p>
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={data.email || ""}
                onChange={handleChange}
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
