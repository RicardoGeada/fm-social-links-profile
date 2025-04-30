import { render, screen } from "@testing-library/react";
import ProfileCard from "./ProfileCard";

const mockProps = {
  avatar: "/avatar.jpg",
  name: "John Doe",
  location: "Berlin, Germany",
  bio: "Full-stack developer.",
  links: [
    { name: "GitHub", link: "https://github.com/johndoe" },
    { name: "LinkedIn", link: "https://linkedin.com/in/johndoe" },
  ],
};

describe("ProfileCard component", () => {
  test("should render name, location and bio", () => {
    render(<ProfileCard {...mockProps} />);

    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Berlin, Germany")).toBeInTheDocument();
    expect(screen.getByText("Full-stack developer.")).toBeInTheDocument();
  });

  test("should render links", () => {
    render(<ProfileCard {...mockProps} />);

    expect(screen.getByText("GitHub")).toHaveAttribute("href","https://github.com/johndoe");
    expect(screen.getByText("LinkedIn")).toBeInTheDocument();
  });

  test("should render avatar with alt text", () => {
    render(<ProfileCard {...mockProps} />);
    const img = screen.getByAltText("Profile picture of John Doe");
    expect(img).toBeInTheDocument();
  });

  test("should not render link list if no links provided", () => {
    const { queryByRole } = render(
      <ProfileCard {...mockProps} links={undefined} />
    );
    expect(queryByRole("list")).not.toBeInTheDocument();
  });
});
