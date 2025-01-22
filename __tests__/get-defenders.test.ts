import { Chess } from '../src/chess'

describe('Get Defenders', () => {
  it('Get all defenders of a square', () => {
    const output = [
      { color: 'w', type: 'p', square: 'g2' },
      { color: 'w', type: 'q', square: 'd1' },
    ]

    const chess = new Chess(
      'rn2kbnr/1pp1pppp/p1q5/8/3P2b1/2N2N1P/PPP2PP1/R1BQKB1R b KQkq - 0 6',
    )

    expect(chess.getDefenders('f3')).toStrictEqual(output)
  })
})
