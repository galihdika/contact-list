import { render } from "@testing-library/react";

import SkeletonContacts from "../SkeletonContacts";

describe('test SkeletonContacts', () => {
  test('should match snapshot', () => {
    const { container } = render(<SkeletonContacts/>);

    expect(container).toMatchSnapshot();
  })
})