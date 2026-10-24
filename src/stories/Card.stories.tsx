import Card from '@/components/astro/Card.astro';
import type { Meta, StoryObj } from '@storybook/react-vite';

interface CardStoryArgs {
  class?: string;
  slots?: {
    default?: string;
    // [key: string]: any;
  };
  // [key: string]: any;
}

/**
 * The Card component is a generic container wrapper with hover animations,
 * flexible slot content, and surface background styling.
 */
const meta = {
  title: 'Components/astro/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A basic container card with hover transform animation and surface background styling.',
      },
    },
  },
  argTypes: {
    class: {
      control: 'text',
      description: 'Additional CSS classes to override or extend card styles.',
    },
  },
} satisfies Meta<CardStoryArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Basic card containing simple text inside the default slot.
 */
export const Default: Story = {
  args: {
    class: '',
  },
  slots: {
    default: 'This is a simple text card.',
  },
} as Story;

/**
 * Card rendering HTML tags or child components inside the slot.
 */
export const WithComplexContent: Story = {
  args: {
    class: '',
  },
  slots: {
    default: `
      <div class="flex flex-col gap-2">
        <h3 class="text-lg font-bold">Card Title</h3>
        <p class="text-sm text-gray-400">
          This card contains structured HTML elements inside the slot.
        </p>
        <button class="px-3 py-1 mt-2 text-xs font-semibold text-white bg-blue-600 rounded">
          Action Button
        </button>
      </div>
    `,
  },
} as Story;

/**
 * Card with custom container classes applied.
 */
export const CustomStyling: Story = {
  args: {
    class: 'border-blue-500 shadow-lg',
  },
  slots: {
    default: 'Card with custom blue border and extra shadow.',
  },
} as Story;
