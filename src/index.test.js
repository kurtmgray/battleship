const ship = require('./index')

test('hit function adds num to hitLocation', () => {
    const three = ship.Ship(3)
    three.hit(2)
    expect(three.hitLocation[0]).toBe(2)
})

test('hit function does not add num to hitLocation if it already exists', () => {
    const three = ship.Ship(3)
    three.hit(2)
    three.hit(2)
    three.hit(3)
    expect(three.hitLocation[1]).toBe(3)
})

test('hit function does not add num to hitLocation if it is larger than length', () => {
    const three = ship.Ship(3)
    three.hit(4)
    three.hit(2)
    expect(three.hitLocation[0]).toBe(2)
})

test('isSunk condition met, sunk set to true', () => {
    const three = ship.Ship(3)
    three.hit(1)
    three.hit(2)
    three.hit(3)
    expect(three.sunk).toBe(true)
})

test('isSunk condition met, sunk set to false', () => {
    const three= ship.Ship(3)
    three.hit(1)
    three.hit(2)
    expect(three.sunk).toBe(false)
})

test('gameboard creates board array correctly', () => {
    const sixteen = ship.Gameboard(16)
    expect(sixteen.board[5][2]).toBe('F2')
})