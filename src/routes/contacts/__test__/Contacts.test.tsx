import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { createWrapper } from "../../../lib/utils/test-utils";

import { users } from "../../../mocks/user/data";

import ContactsPage from "..";

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: 'contacts',
  })
}));

describe('ContactsPage test', () => {
  test('should show skeleton when loading, then show cards when loaded', async () => {
    render(<ContactsPage/>, {
      wrapper: createWrapper({ useMemoryRouter: true, useQueryClient: true }),
    } );

    expect(screen.getAllByTestId('skeleton-card').length).toBe(10);
    expect(screen.queryAllByTestId('contact-card').length).toBe(0);

    await waitFor(() => {
      expect(screen.queryAllByTestId('skeleton-card').length).toBe(0);
      expect(screen.queryAllByTestId('contact-card').length).toBe(users.length);
    })
  })

  test('should be able to filter contacts', async () => {
    const FILTER_VALUE = 'lea';

    const {container} = render(<ContactsPage/>, {
      wrapper: createWrapper({ useMemoryRouter: true, useQueryClient: true }),
    } );

    act(() => {
      fireEvent.change(container.querySelector('input') as HTMLInputElement, {target: { value: FILTER_VALUE}});
    })

    await waitFor(() => {
      expect(screen.queryAllByTestId('contact-card').length).toBe(users.filter(({name}) => name.toLowerCase().includes(FILTER_VALUE.toLowerCase())).length);
    })
  })
})