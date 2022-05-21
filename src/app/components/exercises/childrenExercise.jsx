import React from "react";
import CollapseWrapper from "../common/collapse";
import Divider from "../common/divider";
import PropTypes from "prop-types";

const ChildrenComponent = ({ children }) => {
    const getArrayComponent = React.Children.toArray(children).map((child) => {
        return React.cloneElement(child, {
            ...child,
            num: +child.key[1] + 1
        });
    });
    return getArrayComponent;
};

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <Divider />
            <ChildrenComponent>
                <Component />
                <Component />
                <Component />
            </ChildrenComponent>
        </CollapseWrapper>
    );
};

const Component = ({ num }) => {
    return <div>{num} Компонент списка</div>;
};

ChildrenComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

Component.propTypes = {
    num: PropTypes.number
};

export default ChildrenExercise;
