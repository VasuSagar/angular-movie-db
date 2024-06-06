import { render, screen } from '@testing-library/angular';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  it('API providers name should be visible', async () => {
    await render(FooterComponent, {});

    expect(
      screen.getByText('APIs used from TMDB (themoviedb.org)')
    ).toBeVisible();
  });
});
