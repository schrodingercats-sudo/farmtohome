/// <reference types="vite/client" />
import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string;
        alt?: string;
        ar?: boolean;
        'ar-modes'?: string;
        'camera-controls'?: boolean;
        'tone-mapping'?: string;
        poster?: string;
        'shadow-intensity'?: string;
        autoplay?: boolean;
        'camera-orbit'?: string;
        'field-of-view'?: string;
        'interaction-prompt'?: string;
        style?: React.CSSProperties;
        slot?: string;
        [key: string]: any;
      };
    }
  }
}
