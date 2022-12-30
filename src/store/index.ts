import { configureStore } from '@reduxjs/toolkit'
import settingReducer from './modules/setting'
import {
  useSelector,
  TypedUseSelectorHook,
  useDispatch,
  shallowEqual
} from 'react-redux'
const store = configureStore({
  reducer: {
    setting: settingReducer
  }
})

type getStateFnType = typeof store.getState
type IRootState = ReturnType<getStateFnType>
type DispatchType = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
export const useAppDispatch: () => DispatchType = useDispatch
export const appShallowEqual = shallowEqual
export default store
