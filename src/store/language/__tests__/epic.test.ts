import configureMockStore from 'redux-mock-store'
import { createEpicMiddleware } from 'redux-observable'
import * as languageAction from '../actions'
import * as languageApi from '../api'
import getLocaleEpic from '../epic'

const epicMiddleware = createEpicMiddleware(getLocaleEpic)
const mockStore = configureMockStore([epicMiddleware])

jest.mock('store/language/api')

describe('language epic', () => {
    let store = mockStore()

    beforeEach(() => {
        store = mockStore()
    })

    afterEach(() => {
        epicMiddleware.replaceEpic(getLocaleEpic)
    })

    it('should get the device locale when GET_LOCALE_PENDING', () => {
        const spy = jest.spyOn(languageApi, 'getLanguage')
        store.dispatch(languageAction.getLocale())

        expect(spy).toHaveBeenCalled()
    })

    it('should dispatch the success action when getLocale successed', () => {
        store.dispatch(languageAction.getLocale())

        expect(store.getActions()).toEqual([
            languageAction.getLocale(),
            languageAction.getLocaleSuccess('en'),
        ])
    })
})