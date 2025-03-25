import { Chess, PAWN, BLACK } from '../src/chess'

describe('findPiece', () => {
  it('Finds all pieces matching the description', () => {
    const output = ['a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7']

    const chess = new Chess()

    expect(
      chess.findPiece({ type: PAWN, color: BLACK }).map((a) => a.square),
    ).toStrictEqual(output)
  })
})
