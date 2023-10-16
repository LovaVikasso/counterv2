import {useEffect, useState} from 'react';
import './App.css';
import {SetterCount} from "./components/SetterCount";
import {Counter} from "./components/Counter";

export const App = () => {
    const [maxCount, setMaxCount] = useState<number>(5)
    const [initialCount, setInitialCount] = useState<number>(0)
    const [count, setCount] = useState<number>(initialCount)
    const [info, setInfo] = useState<string | null>(null)

    const getFromLC = () => {
        let localMaxCount = localStorage.getItem('maxCount')
        if (localMaxCount) {
            setMaxCount(JSON.parse(localMaxCount))
        }

        let localInitialCount = localStorage.getItem('initCount')
        if (localInitialCount) {
            setInitialCount(JSON.parse(localInitialCount))
        }
        if (localInitialCount) {
            setCount(JSON.parse(localInitialCount))
        }
    }

    useEffect(() => {
        getFromLC()
    }, [])

    const incrementCount = () => {
        if (count < maxCount) setCount(count + 1)
    }
    const resetCount = () => {
        setCount(initialCount)
    }

    const changeMaxCount = (value: number) => {
        if (value <= initialCount) {
            setInfo('Must be more than initial count')
        } else {
            setMaxCount(value)
            setCount(initialCount)
            setInfo(null)
            localStorage.setItem("maxCount", JSON.stringify(value))
        }
    }
    const changeInitialCount = (value: number) => {
        if (value < 0) {
            setInfo('Must be positive number')
        } else if (value >= maxCount) {
            setInfo('Must be less than max count')
        } else if (value < maxCount) {
            setInitialCount(value)
            setInfo(null)
            setCount(value)
            localStorage.setItem("initCount", JSON.stringify(value))
        }
    }
    const changingCount = () => {
        setInfo("Press Set to change settings")
    }

    return (
        <div className="App">
            <SetterCount
                maxCount={maxCount}
                initialCount={initialCount}
                changeMaxCount={changeMaxCount}
                changeInitialCount={changeInitialCount}
                resetCount={resetCount}
                info={info}
                changingCount={changingCount}/>

            {info !== null ? <h4 className='Info'>{info}</h4> : <Counter
                count={count}
                maxCount={maxCount}
                incrementCount={incrementCount}
                resetCount={resetCount}/>}
        </div>
    );
}
