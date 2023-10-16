import {ChangeEvent} from 'react';
import Button from "./Button";
import {NumberInput} from "./NumberInput";

type SetterPropsType = {
    maxCount: number
    initialCount: number
    changeMaxCount: (value: number) => void
    changeInitialCount: (value: number) => void
    resetCount: () => void
    info: string | null
    changingCount: () => void
}

export const SetterCount = (props: SetterPropsType) => {
    const onClickHandler = () => {
        props.changeMaxCount(props.maxCount)
        props.changeInitialCount(props.initialCount)
        props.resetCount()
    }
    const onChangeMaxHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.changeMaxCount(Number(event.currentTarget.value))
    }
    const onChangeInitialHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.changeInitialCount(Number(event.currentTarget.value))
    }
    const onBlurHandler = () => {
        props.changingCount()
    }
    // const buttonClass = (props.info) ? "disabled" : "active"
    return (
        <div className='SetterCount'>
            <div >
                <h4>Max value:</h4>
                <NumberInput value={props.maxCount} onChange={onChangeMaxHandler}  onFocus={onBlurHandler}/>
            </div>
            <div >
                <h4>Start value:</h4>
                <NumberInput value={props.initialCount} onChange={onChangeInitialHandler} onFocus={onBlurHandler}/>
            </div>
            <Button name={'Set value'} callBack={onClickHandler} className={'active'}/>
        </div>
    );
};


