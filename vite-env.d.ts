/// <reference types="vite/client" />

import * as React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string;
        alt?: string;
        poster?: string;
        ar?: boolean;
        'ar-modes'?: string;
        'tone-mapping'?: string;
        'shadow-intensity'?: string | number;
        autoplay?: boolean;
        'camera-orbit'?: string;
        'field-of-view'?: string;
        'interaction-prompt'?: string;
        [key: string]: any;
      };
    }
  }
}
