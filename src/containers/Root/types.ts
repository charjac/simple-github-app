import { ActionCreator, Store } from 'redux'

import { ReduxAction, AppState } from 'store/types'
import { NavigationState } from 'store/navigation/types'

export interface RootActionCreators {
    bootstrap?: ActionCreator<ReduxAction>
    subscribePush?: ActionCreator<ReduxAction>
}

export interface RootConnectedProps {
    nav?: NavigationState
    appReady?: boolean
}

export interface RootProps extends RootActionCreators, RootConnectedProps {}

export interface RootState {}
