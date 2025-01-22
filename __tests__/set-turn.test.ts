import { Chess, WHITE, BLACK } from '../src/chess'

describe('Set Turn', () => {
  it('Sets or switches the side to move', () => {
    const chess = new Chess()

    expect(chess.turn()).toBe(WHITE)

    chess.setTurn()
    expect(chess.turn()).toBe(BLACK)

    chess.setTurn(BLACK)
    expect(chess.turn()).toBe(BLACK)

    chess.setTurn(WHITE)
    expect(chess.turn()).toBe(WHITE)
  })
})
