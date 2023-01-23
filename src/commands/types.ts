import { DRAWING_OBJECTS } from '../drawing';
import { MOUSE_POSITIONS } from '../mouse';
import { PRINT_SCREEN_COMMANDS } from '../print_screen';


export type Commands = MOUSE_POSITIONS |
    DRAWING_OBJECTS |
    PRINT_SCREEN_COMMANDS;