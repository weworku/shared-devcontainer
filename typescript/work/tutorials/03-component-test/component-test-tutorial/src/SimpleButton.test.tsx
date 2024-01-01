// FILEPATH: /workspaces/typescript/work/tutorials/03-component-test/component-test-tutorial/src/SimpleButton.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SimpleButton } from './SimpleButton';

describe('SimpleButton', () => {
    it('renders with initial state OFF', () => {
        render(<SimpleButton />);
        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toHaveTextContent('OFF');
    });

    it('toggles state to ON when clicked', async () => {
        render(<SimpleButton />);
        const buttonElement = screen.getByRole('button');
        await userEvent.click(buttonElement);
        expect(buttonElement).toHaveTextContent('ON');
    });

    it('toggles state back to OFF when clicked again', async () => {
        render(<SimpleButton />);
        const buttonElement = screen.getByRole('button');
        await userEvent.click(buttonElement);
        expect(buttonElement).toHaveTextContent('ON');
        await userEvent.click(buttonElement);
        expect(buttonElement).toHaveTextContent('OFF');
    });

    test("描画されてすぐはOFFと表示されている", () => {
        const view = render(<SimpleButton />);
        expect(view.container).toMatchSnapshot();
    });
});