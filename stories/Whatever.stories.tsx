import type { Meta, StoryObj } from "@storybook/react";
import Whatever from "../components/Whatever";

const meta: Meta<typeof Whatever> = {
  title: "Example/Whatever",
  component: Whatever,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
