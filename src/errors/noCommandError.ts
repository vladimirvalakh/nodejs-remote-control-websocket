export class NoCommandError extends Error {
    constructor(message = 'There is no such command') {
        super(message);
        this.name = 'NoCommandError';
    }
}