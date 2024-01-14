import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "./Input";

const meta = {
  title: "Components/Inputs",
  component: Input,
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Control: Story = {
  args: {
    label: "Control Input",
    type: "text",
    value: "control",
    placeholder: "Control Input Placeholder",
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.value)
    },
    disabled: false,
    required: true,
    maxLength: 15,
  }
}