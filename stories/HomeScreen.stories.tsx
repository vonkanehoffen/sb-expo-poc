import type { Meta, StoryObj } from "@storybook/react";
import HomeScreen from "../app/(tabs)/index";

const meta: Meta<typeof HomeScreen> = {
  title: "Example/HomeScreen",
  component: HomeScreen,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
