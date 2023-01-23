import {DIRECTION, MOUSE_POSITIONS} from '../constants';
import {getMousePosition} from './getMousePosition';
import {moveMouse} from './moveMouse';

export const mouseActions: Record<MOUSE_POSITIONS, Function> = {
    [MOUSE_POSITIONS.MOUSE_UP]: moveMouse(DIRECTION.UP),
    [MOUSE_POSITIONS.MOUSE_DOWN]: moveMouse(DIRECTION.DOWN),
    [MOUSE_POSITIONS.MOUSE_LEFT]: moveMouse(DIRECTION.LEFT),
    [MOUSE_POSITIONS.MOUSE_RIGHT]: moveMouse(DIRECTION.RIGHT),
    [MOUSE_POSITIONS.MOUSE_POSITION]: getMousePosition,
};