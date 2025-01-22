import { Chess } from '../src/chess'

describe('Truncate', () => {
  it('Truncates a game to the specified number of moves', () => {
    const output = ['e4', 'e5', 'Nf3']

    const chess = new Chess()
    chess.loadPgn('1. e4 e5 2. Nf3 Nf6 3. Nc3')

    expect(chess.truncate(3).history()).toStrictEqual(output)
  })
})
