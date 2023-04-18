import { fireEvent, render, screen } from '@testing-library/react';
import { Projects } from '../../src/components/Projects';

describe('Project Component', () => {
    test('Should match the snapshot', () => {
        const { container } = render(<Projects />);

        expect(container).toMatchSnapshot();
    })

    test('Should change description project wiht click', () => {
        render(<Projects />);

        fireEvent.click(screen.getByTestId('project1'));
        expect(screen.getByTestId('project1').innerHTML).toContain('click')

        fireEvent.click(screen.getByTestId('project1'));
        expect(screen.getByTestId('project1').innerHTML).toContain('project')
    })
})