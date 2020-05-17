import {login, logout} from '../../actions/Authentication'

test('generating LOGIN action object', () => {
    const uid= 'abc123'
    const action = login(uid)
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    })
})

test('generating LOGOUT action object', () => {
    const action = logout()
    expect(action).toEqual({
        type: 'LOGOUT'
    })
})