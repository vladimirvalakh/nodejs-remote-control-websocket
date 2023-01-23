import { mouse, screen, Region } from '@nut-tree/nut-js';
import Jimp from 'jimp';
import { PRINT_SCREEN_COMMANDS } from '../constants';

const SCREENSHOT_WIDTH = 200;
const SCREENSHOT_HEIGHT = 200;

export const makePrintScreen = async (): Promise<string> => {
    const { x: currentPosX, y: currentPosY } = await mouse.getPosition();

    const screenshotRegion = new Region(
        Math.max(0, currentPosX - SCREENSHOT_WIDTH / 2),
        Math.max(0, currentPosY - SCREENSHOT_HEIGHT / 2),
        SCREENSHOT_WIDTH,
        SCREENSHOT_HEIGHT
    );

    await screen.highlight(screenshotRegion);

    const screenshot = await (await screen.grabRegion(screenshotRegion)).toRGB();

    const image = new Jimp({
        data: screenshot.data,
        width: SCREENSHOT_WIDTH,
        height: SCREENSHOT_HEIGHT}
    );

    const imageBase64 = (await image.getBase64Async(Jimp.MIME_PNG)).slice(22);
    
    return `${PRINT_SCREEN_COMMANDS.PRINT_SCREEN} ${imageBase64}`;
};