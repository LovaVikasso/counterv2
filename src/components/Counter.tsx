import Button from "./Button";

type CounterPropsType = {
    count: number
    maxCount: number
    incrementCount: () => void
    resetCount:()=>void
}
export const Counter = (props: CounterPropsType) => {
    return (
        <div className='Counter'>
            <p>Counter: </p>
            <p className={(props.count === props.maxCount) ? "maxCount" : ""}>{props.count}</p>
            <div>
                <Button className={(props.count < props.maxCount) ? "active" : "disabled"} callBack={props.incrementCount}
                        name={"inc"}/>
                <Button className={(props.count < props.maxCount) ? "disabled" : "active"} callBack={props.resetCount}
                        name={"reset"}/>
            </div>
        </div>
    );
};

