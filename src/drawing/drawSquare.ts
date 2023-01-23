import { Button, down, left, mouse, right, up } from '@nut-tree/nut-js';
import { NoCorrectParamError } from '../errors';
import { DRAWING_OBJECTS, MOUSE_SPEED } from '../constants';
import { getScreenParam, upAndDownMouse } from './helpers';

export const drawSquare = async (coordinates: string[]): Promise<DRAWING_OBJECTS> => {
    const [ width ] = coordinates;
    const { height: screenHeight, width: screenWidth } = await getScreenParam();
    const { x: currentX, y: currentY } = await mouse.getPosition();

    const widthNumber = parseInt(width);

    const isSquareCanBeDrawn = width
        && (currentX + widthNumber) < screenWidth
        && (currentY + widthNumber) < screenHeight;

    if (!isSquareCanBeDrawn) {
        throw new NoCorrectParamError();
    }

    mouse.config.mouseSpeed = MOUSE_SPEED;

    await mouse.pressButton(Button.LEFT);

    await mouse.move(down(widthNumber));

    await upAndDownMouse();

    await mouse.move(right(widthNumber));

    await upAndDownMouse();

    await mouse.move(up(widthNumber));

    await upAndDownMouse();

    await mouse.move(left(widthNumber));

    await mouse.releaseButton(Button.LEFT);

    return DRAWING_OBJECTS.DRAW_SQUARE;
}