import { ReadonlySignal } from '@preact/signals';

export type CanBeSignal<T> = T | ReadonlySignal<T>;
