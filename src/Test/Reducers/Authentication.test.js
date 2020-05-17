import authenticationReducer from '../../reducers/Authentication'

test('set UID for LOGIN', () => {
    const action = {
        type: 'LOGIN',
        uid:'abc123'
    }
    const state = authenticationReducer({}, action)
    expect(state.uid).toBe(action.uid)
})

test('clear UID for LOGOUT', () => {
    const action = {
        type: 'LOGOUT'
    }
    const state = authenticationReducer({uid: 'anything'}, action)
    expect(state).toEqual({})
})

