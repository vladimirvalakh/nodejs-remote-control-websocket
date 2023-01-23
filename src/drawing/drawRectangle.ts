import { Button, down, left, mouse, right, up } from '@nut-tree/nut-js';
import { NoCorrectParamError } from '../errors';
import { DRAWING_OBJECTS, MOUSE_SPEED } from '../constants';
import { getScreenParam, upAndDownMouse } from './helpers';

export const drawRectangle = async (coordinates: string[]): Promise<DRAWING_OBJECTS> => {
    const [ width, height ] = coordinates;
    const { height: screenHeight, width: screenWidth } = await getScreenParam();
    const { x: currentX, y: currentY } = await mouse.getPosition();

    if (!width) {
        throw new NoCorrectParamError();
    }

    const widthNumber = parseInt(width);
    const heightNumber = parseInt(height);

    const isRectangleCanBeDrawn = width && heightNumber
        && (currentX + widthNumber) < screenWidth
        && (currentY + heightNumber) < screenHeight;

    if (!isRectangleCanBeDrawn) {
        throw new NoCorrectParamError();
    }

    mouse.config.mouseSpeed = MOUSE_SPEED;

    await mouse.pressButton(Button.LEFT);

    await mouse.move(down(heightNumber));

    await upAndDownMouse();

    await mouse.move(right(widthNumber));

    await upAndDownMouse();

    await mouse.move(up(heightNumber));

    await upAndDownMouse();

    await mouse.move(left(widthNumber));

    await mouse.releaseButton(Button.LEFT);

    return DRAWING_OBJECTS.DRAW_RECTANGLE;
}