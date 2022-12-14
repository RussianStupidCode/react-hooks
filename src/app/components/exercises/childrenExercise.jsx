import React from "react";
import CollapseWrapper from "../common/collapse";
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
            <OrderedList>
                <Component />
                <Component />
                <Component />
            </OrderedList>
        </CollapseWrapper>
    );
};

const OrderedList = ({ children }) => {
    return React.Children.map(children, (child, i) => (
        <div key={i} className="d-flex flex-row w-50 my-2">
            <span className="badge bg-warning mx-3">{i + 1}</span>
            {child}
        </div>
    ));
};

const Component = () => {
    return <div>Компонент списка</div>;
};

export default ChildrenExercise;
