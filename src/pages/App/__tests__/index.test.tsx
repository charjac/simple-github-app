import React from 'react'
import 'react-native'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'

const mockStore = configureStore()

import initialState from '../../../store/initialState'
import App from '../index'

describe('App', () => {
    let store = mockStore(initialState)

    beforeEach(() => {
        store = mockStore(initialState)
    })

    it('renders correctly', () => {
        const tree = renderer.create(
            <Provider store={store}>
                <App />
            </Provider>,
        )
        expect(tree).toBeDefined()
    })
})
