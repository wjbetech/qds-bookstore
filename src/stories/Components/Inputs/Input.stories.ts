import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "./Input";

const meta = {
  title: "Components/Inputs",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["standard", "outlined"],
      control: { type: "dropdown" },
    }
  }
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Control: Story = {
  args: {
    label: "Control Input",
    type: "text",
    placeholder: "Control Input Placeholder",
    maxLength: 15,
    minLength: 5,
  },
}

export const Standard: Story = {
  args: {
    label: "Standard Input",
    type: "text",
    placeholder: "Standard Input Placeholder",
    variant: "standard",
    maxLength: 15,
    minLength: 5,
  },
}

export const Outlined: Story = {
  args: {
    label: "Outlined Input",
    type: "text",
    placeholder: "Outlined Input Placeholder",
    variant: "outlined",
    maxLength: 15,
    minLength: 5,
  },
}