import React from 'react'
import { RootState } from './redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { timerDecrement, timerReset } from './redux/timerSlice'
import { pauseDecrement, pauseReset } from './redux/pauseSlice'
import { repetitionIncrement } from './redux/repetition'

function App() {
  const [start, setStart] = React.useState<boolean>(false)
  const timer = useSelector((state: RootState) => state.timer.value)
  const pause = useSelector((state: RootState) => state.pause.value)
  const repetition = useSelector((state: RootState) => state.repetition.value)
  const dispatch = useDispatch()
  const numbersOfRepetitions = 3

  React.useEffect(() => {
    if (repetition >= numbersOfRepetitions) return
    const interval = setInterval(() => {
      if (start === true) {
        if (timer >= 1) {
          dispatch(timerDecrement())
        } else if (pause === 0) {
          dispatch(timerReset())
          dispatch(pauseReset())
          dispatch(repetitionIncrement())
        } else dispatch(pauseDecrement())
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [repetition, start, timer, pause, dispatch])

  return (
    <div className="flex justify-center items-center h-screen">
      <h2 className="p-2 rounded mr-4 text-5xl bg-green-600">TIMER {timer}</h2>
      <h2 className="p-2 rounded mr-4 text-5xl bg-red-600">PAUSE {pause}</h2>
      <button className="rounded mr-4 bg-yellow-300 p-2" onClick={() => setStart(true)}>
        START
      </button>
      <button className="rounded mr-4 bg-orange-500 p-2" onClick={() => setStart(false)}>
        STOP
      </button>
    </div>
  )
}

export default App
