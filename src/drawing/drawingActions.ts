import { DRAWING_OBJECTS } from '../constants';
import { drawCircle } from './drawCircle';
import { drawRectangle } from './drawRectangle';
import { drawSquare } from './drawSquare';

export const drawingActions: Record<DRAWING_OBJECTS, Function> = {
    [DRAWING_OBJECTS.DRAW_CIRCLE]: drawCircle,
    [DRAWING_OBJECTS.DRAW_SQUARE]: drawSquare,
    [DRAWING_OBJECTS.DRAW_RECTANGLE]: drawRectangle,
};