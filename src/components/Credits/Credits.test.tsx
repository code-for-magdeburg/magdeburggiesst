import React from 'react';
import { render, screen } from '@testing-library/react';
import Credits from '.';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../assets/theme';

describe('component Credits', () => {
  test('should render the Code for Magdeburg logo', () => {
    render(
      <ThemeProvider theme={theme}>
        <Credits />
      </ThemeProvider>
    );
    const codeForMagdeburgImage = screen.getByAltText(/Logo Code for Magdeburg/i);
    expect(codeForMagdeburgImage).toBeInTheDocument();
    expect(codeForMagdeburgImage.getAttribute('src')).toContain('code-for-md-logo.svg');
  });
  test('should render the Netz39 logo', () => {
    render(
      <ThemeProvider theme={theme}>
        <Credits />
      </ThemeProvider>
    );
    const netz39Image = screen.getByAltText(/Logo Netz39 e.V./i);
    expect(netz39Image).toBeInTheDocument();
    expect(netz39Image.getAttribute('src')).toContain('netz39-logo.svg');
  });
});
