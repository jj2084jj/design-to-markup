import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Title from './title';

const meta = {
  title: 'UI/Title',
  component: Title,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: '제목 텍스트',
    },
    description: {
      control: 'text',
      description: '설명 텍스트',
    },
    span: {
      control: 'text',
      description: '상단 뱃지 텍스트 (선택사항)',
    },
  },
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '메인 타이틀',
    description: '이것은 설명 텍스트입니다.',
  },
};

export const WithBadge: Story = {
  args: {
    span: 'NEW',
    title: '뱃지가 있는 타이틀',
    description: '상단에 뱃지가 표시되는 예시입니다.',
  },
};

export const WithoutDescription: Story = {
  args: {
    span: 'HOT',
    title: '설명 없는 타이틀',
    description: '',
  },
};
