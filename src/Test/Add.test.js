const add = (a,b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`

test('Test Add', () => {
    const result = add(3,4);
    expect(result).toBe(7)
} )

test('Test Greeting', () => {
    const result= generateGreeting('Sujeet')
    expect(result).toBe('Hello Sujeet!')
})

test('Test Greeting', () => {
    const result= generateGreeting()
    expect(result).toBe('Hello Anonymous!')
})