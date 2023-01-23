import {mouse} from '@nut-tree/nut-js';
import {MOUSE_POSITIONS} from '../constants';

export const getMousePosition = async (): Promise<string> => {
    const {x, y} = await mouse.getPosition();

    return `${MOUSE_POSITIONS.MOUSE_POSITION} ${x},${y}`;
}