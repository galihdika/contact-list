import { render } from "@testing-library/react";

import SkeletonCard from "../SkeletonCard";

describe('test SkeletonCard', () => {
  test('should match snapshot', () => {
    const { container } = render(<SkeletonCard/>);

    expect(container).toMatchSnapshot();
  })
})