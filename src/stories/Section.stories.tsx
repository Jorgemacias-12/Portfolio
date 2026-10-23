import Section from "@/components/astro/Section.astro";
import { SECTION_VARIANTS } from "@/types";
import type {} from "@storybook-astro/framework";
import type { Meta, StoryObj } from "@storybook/react-vite";

/**
 *  TODO: look for a fix for the equivalent of slots in this without 
 *  breaking the story itself, not gonna lie im not going to make it.
 */
const meta = {
  title: "Components/astro/Section",
  tags: ["autodocs"],
  component: Section,
  parameters: {
    docs: {
      description: {
        component: "Calajo",
      },
    },
  },
  argTypes: {
    id: {
      control: "text",
      description: "ah yes the default id=''",
    },
    title: {
      control: "text",
      description: "yes a title",
    },
    showTitle: {
      control: "boolean",
      description: "use this to render the title",
    },
    variant: {
      control: "select",
      options: SECTION_VARIANTS,
      description: "choose which variant are going to use :P",
    },
  },
} satisfies Meta<typeof Section>;

export default meta;

type Story = StoryObj<typeof Section>;

export const Default: Story = {
  args: {
    id: "calajo",
    variant: "hero",
    title: "simple title dude",
    showTitle: true,
  },
};

export const Hero: Story = {
  args: {
    id: "calajo",
    variant: "hero",
    title: "This is the hero with the title",
    showTitle: true,
  },
};

export const Normal: Story = {
  args: {
    id: "calajo",
    variant: "normal",
    title: "This is the title",
    showTitle: true,
  },
};
