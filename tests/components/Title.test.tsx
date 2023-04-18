import { render, screen } from '@testing-library/react';
import { Title } from '../../src/components/Title';

describe('Title Component', () => {
    const title = "Title Test";
    test('Should match the snapshot', () => {

        const { container } = render(<Title title={title} />);

        expect(container).toMatchSnapshot();
    })

    test('Should show logo', async () => {
        render(<Title title={title} />);

        expect(screen.getByText(title)).toBeTruthy();

        const imgLogo = screen.getByRole('img')
        expect(imgLogo.className).toContain('logo')
    })
})