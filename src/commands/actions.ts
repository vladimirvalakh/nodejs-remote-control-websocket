import { Commands } from './types';
import { mouseActions } from '../mouse';
import { drawingActions } from '../drawing';
import { printScreenActions } from '../print_screen';

export const actionsFromCommand: Record<Commands, Function> = {
    ...printScreenActions,
    ...mouseActions,
    ...drawingActions,
};