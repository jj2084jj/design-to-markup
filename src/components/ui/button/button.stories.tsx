import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Button from './button';

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'tab', 'dot', 'language'],
      description: '버튼 타입',
    },
    active: {
      control: 'boolean',
      description: '활성화 상태 (tab, dot에서 사용)',
    },
    children: {
      control: 'text',
      description: '버튼 내부',
    },
    onClick: {
      action: 'clicked',
      description: '클릭 이벤트 핸들러',
    },
    iconLeft: {
      control: 'text',
      description: '(번역) 왼쪽 아이콘 경로',
    },
    iconRight: {
      control: 'text',
      description: '(번역) 오른쪽 아이콘 경로',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// 버튼 (기본 버튼)
export const Default: Story = {
  args: {
    children: 'Login',
    variant: 'default',
    onClick: () => console.log('button'),
  },
};
// Primary 버튼
export const Primary: Story = {
  args: {
    children: 'Login',
    variant: 'primary',
    onClick: () => console.log('Primary button clicked'),
  },
};

// Tab 버튼
export const Tab: Story = {
  args: {
    children: 'Tab 1',
    variant: 'tab',
    active: false,
    onClick: () => console.log('Tab clicked'),
  },
};

// Tab 그룹
export const TabGroup: Story = {
  args: {},
  render: () => (
    <div style={{ display: 'flex', gap: '20px' }}>
      <Button variant='tab' active={true}>
        Tab 1
      </Button>
      <Button variant='tab' active={false}>
        Tab 2
      </Button>
      <Button variant='tab' active={false}>
        Tab 3
      </Button>
    </div>
  ),
};

// Dot 버튼 (슬라이더 사용)
export const Dot: Story = {
  args: {
    children: '',
    variant: 'dot',
    active: false,
    onClick: () => console.log('Dot clicked'),
  },
};

// Dot 그룹
export const DotGroup: Story = {
  args: {},
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <Button variant='dot' active={true} />
      <Button variant='dot' active={false} />
      <Button variant='dot' active={false} />
      <Button variant='dot' active={false} />
    </div>
  ),
};

// Language 버튼
export const Language: Story = {
  args: {
    children: '한글',
    variant: 'language',
    iconLeft: '/images/common/icon/earth-icon.svg',
    iconRight: '/images/common/icon/icon.svg',
    onClick: () => console.log('Language button clicked'),
  },
};

