import { Chess, BLACK } from '../src/chess'

describe('Get Trapped Pieces', () => {
  it('Find all trapped pieces for a side', () => {
    const output = [{ color: 'b', type: 'b', square: 'h2' }]

    const chess = new Chess('8/pp2k1p1/4pp2/1P6/7p/P3P1P1/5PKb/2B5 w - - 0 1')

    expect(chess.getTrappedPieces(BLACK)).toStrictEqual(output)
  })
})
