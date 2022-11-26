import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { TypeRootState } from '../store/store'

export const useStore: TypedUseSelectorHook<TypeRootState> = useSelector
