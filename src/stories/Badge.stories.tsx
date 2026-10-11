import type { Meta, StoryObj } from "@storybook/react";
import { BADGE_TYPES } from "@/types";
import Badge from "@/components/astro/Badge.astro";

/**
 * The Badge component is used to highlight status, achievements, or categories.
 * It supports multiple visual variants and dynamically adapts to the application theme.
 */
const meta = {
  title: "Components/astro/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A flexible badge UI element designed for display within user profiles, card headers, and status lists. Supports dynamic icons via Iconify.",
      },
    },
  },
  argTypes: {
    type: {
      control: { type: "select" },
      options: BADGE_TYPES,
      description: "Visual variant style of the badge",
    },
    name: {
      control: "text",
      description: "Text label displayed inside the badge",
    },
    class: {
      control: "text",
      description: "Additional CSS classes to customize layout or styling",
    },
    icon: {
      control: "text",
      description:
        "Icon identifier based on the installed Iconify set (e.g., 'devicon:html5')",
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Default badge presentation rendered without a specific type override.
 */
export const Default: Story = {
  args: {
    type: "normal",
    name: "Example text",
    class: "",
    icon: "",
  },
};

/**
 * Displays the badge with an inline icon using Iconify syntax.
 * Pass any valid icon identifier available in `@iconify-json/*`.
 *
 * @see https://www.npmjs.com/package/@iconify/json
 */
export const Iconified: Story = {
  args: {
    type: "normal",
    name: "Now with icon",
    class: "",
    icon: "devicon:html5",
  },
};

/**
 * Badge variant highlighting a completed educational degree or milestone.
 */
export const Graduated: Story = {
  args: {
    type: "graduated",
    name: "Graduated",
  },
};

/**
 * Badge variant indicating a completed project, task, or course.
 */
export const Completed: Story = {
  args: {
    type: "completed",
    name: "Completed",
  },
};

/**
 * Badge variant for items or tasks currently in progress.
 */
export const Ongoing: Story = {
  args: {
    type: "ongoing",
    name: "In Progress",
  },
};

/**
 * Featured badge variant used for highlighting key accomplishments or starred items.
 */
export const Star: Story = {
  args: {
    type: "star",
    name: "Featured",
  },
};
