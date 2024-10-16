import { DIRECTIONS, OBJECT_TYPE } from './setup';

export function ghostMoves(position, direction, objectExist) {
    let dir = direction;
    let nextMovePos = position + dir.movement;
    const keys = Object.keys(DIRECTIONS);
    // let attempts = 0; 
  
    while (
      objectExist(nextMovePos, OBJECT_TYPE.WALL) ||
      objectExist(nextMovePos, OBJECT_TYPE.GHOST)
    ) {
      const key = keys[Math.floor(Math.random() * keys.length)];
      dir = DIRECTIONS[key];
      nextMovePos = position + dir.movement;
    }
  
    return { nextMovePos, direction: dir };
  }
  