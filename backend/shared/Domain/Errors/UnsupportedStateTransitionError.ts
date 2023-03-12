export class UnsupportedStateTransitionError extends Error {
    constructor(currentState: any, desiredState: any) {
        super(`unsupported state transition from ${currentState} to ${desiredState}`)
    }
}