import { MOUSE_POSITIONS } from '../constants';

export type ResolveMouseHandler = (coordinates: string[]) => Promise<MOUSE_POSITIONS>;