import Link from "@/components/astro/Link.astro";
import { LINK_TYPES } from "@/types";
import type { Meta, StoryObj } from "@storybook/react-vite";
import type { LinkComponentProps } from "@/types";

const meta = {
  title: "Components/astro/Link",
  component: Link,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A versatile link component supporting icons, targets, and custom variants.",
      },
    },
  },
  argTypes: {
    icon: {
      control: "object",
      description:
        "Can be a string identifier (e.g. 'lucide:x') or an object config ({ name: '...', size: 20 }).",
    },
    label: { control: "text" },
    class: { control: "text" },
    variant: { control: "select", options: LINK_TYPES },
    url: { control: "text" },
  },
} satisfies Meta<LinkComponentProps>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Default Link presentation using default type "link".
 */
export const Default: Story = {
  args: {
    label: "Go to my link",
    url: "https://example.com",
    variant: "link",
  },
};

/**
 * Menu type that supports #id to focus and go to the element.
 */
export const Menu: Story = {
  args: {
    label: "Projects",
    url: "#projects",
    variant: "menu",
  },
};

/**
 * Iconified type allow to use an Icon using a string identifier.
 */
export const Iconified: Story = {
  args: {
    label: "Go to my blog",
    url: "https://jorgemacias.dev/blog",
    variant: "iconified",
    icon: "lucide:x",
  },
};

/**
 * CTA type allow to use an Icon passing an object configuration.
 */
export const CTA: Story = {
  args: {
    label: "Go to my blog",
    url: "https://jorgemacias.dev/blog",
    variant: "cta",
    target: "_blank",
    icon: {
      name: "lucide:arrow-right",
      size: 20,
    },
  },
};
