import { mouse, down, up, left, right } from '@nut-tree/nut-js';
import { NoCorrectParamError, NoCommandError } from '../errors';
import { DIRECTION, MOUSE_POSITIONS } from '../constants';
import { ResolveMouseHandler } from './types';

export const moveMouse = (direction: DIRECTION): ResolveMouseHandler => {
    return async (coordinates: string[]): Promise<MOUSE_POSITIONS> => {
        const [translation] = coordinates;

        if (!parseInt(translation)) {
            throw new NoCorrectParamError();
        }

        switch (direction) {
            case DIRECTION.DOWN: {
                await mouse.move(down(parseInt(translation)));

                return MOUSE_POSITIONS.MOUSE_DOWN;
            }
            case DIRECTION.UP: {
                await mouse.move(up(parseInt(translation)));

                return MOUSE_POSITIONS.MOUSE_UP;
            }
            case DIRECTION.LEFT: {
                await mouse.move(left(parseInt(translation)));

                return MOUSE_POSITIONS.MOUSE_LEFT;
            }
            case DIRECTION.RIGHT: {
                await mouse.move(right(parseInt(translation)));
                
                return MOUSE_POSITIONS.MOUSE_RIGHT;
            }
            default:
                throw new NoCommandError();
        }
    }
}