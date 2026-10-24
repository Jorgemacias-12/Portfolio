import type { Meta, StoryObj } from "@storybook/react-vite";
import { Modal } from "@/components/react/Modal";

const meta = {
  title: "Components/react/Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: {
    renderer: "react",
    docs: {
      description: {
        component: "",
      },
    },
  },

  argTypes: {
    open: {
      control: { type: "boolean" },
      description: "",
    },
    children: {
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: true,
    children: <>Abuelita</>,
    title: "Example modal",
  },
};
