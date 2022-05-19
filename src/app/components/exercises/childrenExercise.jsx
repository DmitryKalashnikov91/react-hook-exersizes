import React from "react";
import CollapseWrapper from "../common/collapse";
import Divider from "../common/divider";

const ChildrenComponent = ({ children }) => {
    const component = <Component />;
    return React.Children.map(children, (child) => (
        <>
            <ol>
                <li>{React.cloneElement(component, children)}</li>
            </ol>
        </>
    ));
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

const Component = () => {
    return <div>Компонент списка</div>;
};

export default ChildrenExercise;
