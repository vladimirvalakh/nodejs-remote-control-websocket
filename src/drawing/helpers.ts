import { Button, mouse, screen } from '@nut-tree/nut-js';

type ScreenParamReturn = { height: number, width: number };

export const upAndDownMouse = async (): Promise<void> => {
    await mouse.releaseButton(Button.LEFT);
    await mouse.pressButton(Button.LEFT);
}

export const getScreenParam = async (): Promise<ScreenParamReturn> => {
    const height = await screen.height();
    const width = await screen.width();

    return { height, width };
}