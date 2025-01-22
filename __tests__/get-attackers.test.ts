import { Chess } from '../src/chess'

describe('Get Attackers', () => {
  it('Get all attackers of a square', () => {
    const output = [
      { color: 'w', type: 'p', square: 'd4' },
      { color: 'w', type: 'p', square: 'f4' },
    ]

    const chess = new Chess(
      'r4rk1/1p2bppp/p1p1pn2/4n3/2BP1P2/2N4P/PPP2P2/2KR2R1 w - - 0 15',
    )

    expect(chess.getAttackers('e5')).toStrictEqual(output)
  })
})
