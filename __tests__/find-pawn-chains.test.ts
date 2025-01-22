import { Chess, BLACK } from '../src/chess'

describe('Find Pawn Chains', () => {
  it('Finds all pawn chains for a color', () => {
    const output = [
      [
        { square: 'f7', type: 'p', color: 'b' },
        { square: 'e6', type: 'p', color: 'b' },
        { square: 'd5', type: 'p', color: 'b' },
      ],
    ]

    const chess = new Chess(
      'r2qr2k/ppp2p2/2nbp2p/3p3P/PP1P1P2/2PbP3/5K1R/R1BQ2N1 w - - 0 18',
    )

    expect(chess.findPawnChains(BLACK)).toStrictEqual(output)
  })
})
