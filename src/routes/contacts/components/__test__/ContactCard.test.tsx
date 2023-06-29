import { render, screen, waitFor } from "@testing-library/react";
import { createWrapper } from "../../../../lib/utils/test-utils";

import ContactCard from "../ContactCard";

import { singleUser, otherSingleUser } from "../../../../mocks/user/data";

describe('ContactCard test', () => {
  test('should show right user data', () => {
    render(<ContactCard {...singleUser}/>, {
      wrapper: createWrapper({useQueryClient: true})
    } );

    expect(screen.getByText(singleUser.name)).toBeInTheDocument();
    expect(screen.queryByText(otherSingleUser.name)).not.toBeInTheDocument();

    expect(screen.getByText(singleUser.phone)).toBeInTheDocument();
    expect(screen.queryByText(otherSingleUser.phone)).not.toBeInTheDocument();
  })

  test('should show skeleton cover when loading, then show photo when loaded', async () => {
    const { container } = render(<ContactCard {...singleUser}/>, {
      wrapper: createWrapper({useQueryClient: true})
    } );

    expect(container.querySelector('.card-cover-skeleton')).toBeInTheDocument();
    expect(container.querySelector('img')).not.toBeInTheDocument();

    await waitFor(() => {
       expect(container.querySelector('.card-cover-skeleton')).not.toBeInTheDocument();
       expect(container.querySelector('img')).toBeInTheDocument();
       expect(screen.getByAltText(`contact-img-${singleUser.username}`)).toBeInTheDocument();
    })
  })
})