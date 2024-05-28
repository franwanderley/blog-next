import { ReactElement } from "react";
import { RenderOptions, render } from '@testing-library/react';

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'whapper'>) => render(ui, { ...options });

export * from '@testing-library/react';
export { customRender as render }