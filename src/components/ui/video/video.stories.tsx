import Video from "@/components/ui/video/video";
import { Meta, StoryObj } from "@storybook/react-webpack5";


const meta = {
  title: 'UI/Video',
  component:Video,
  parameters:{
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: 'text',
      description: '비디오 소스 URL',
    },
  }
} satisfies Meta<typeof Video>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: '비디오 소스 URL',
  },
};