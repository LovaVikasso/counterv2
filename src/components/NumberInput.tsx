import {ChangeEvent} from 'react';

type InputPropsType = {
    value: number
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    onFocus:()=>void
}
export const NumberInput = (props: InputPropsType) => {
    return (
        <div>
            <input className='input' type="number" value={props.value} onChange={props.onChange} onFocus={props.onFocus}/>
        </div>
    );
};
