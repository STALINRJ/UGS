import { useRef } from 'react';

// Content stays visible during navigation. Large sections are never hidden.
export function useReveal<T extends HTMLElement = HTMLDivElement>() { return useRef<T>(null); }
export function useStaggerReveal<T extends HTMLElement = HTMLDivElement>() { return useRef<T>(null); }
