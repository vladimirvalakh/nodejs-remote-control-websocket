import { PRINT_SCREEN_COMMANDS } from '../constants';
import { makePrintScreen } from './makePrintScreen';

export const printScreenActions: Record<PRINT_SCREEN_COMMANDS, Function> = {
    [PRINT_SCREEN_COMMANDS.PRINT_SCREEN]: makePrintScreen,
};