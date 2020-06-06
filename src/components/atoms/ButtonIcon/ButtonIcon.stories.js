import React from 'react';
import bulb from 'assets/icons/bulb.svg';
import styled from 'styled-components';
import LogoutIcon from 'assets/icons/logout.svg';
import PenIcon from 'assets/icons/pen.svg';
import PlusIcon from 'assets/icons/plus.svg';
import TwitterIcon from 'assets/icons/twitter.svg';
import ButtonIcon from './ButtonIcon';

export default {
  component: ButtonIcon,
  title: 'Atoms/ButtonIcon',
  decorators: [(storyFn) => <YellowBackground>{storyFn()}</YellowBackground>],
};

const YellowBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  background: ${({ theme }) => theme.note};
`;

export const BulbZactive = () => <ButtonIcon icon={bulb} />;
export const Logout = () => <ButtonIcon icon={LogoutIcon} />;
export const Pen = () => <ButtonIcon icon={PenIcon} />;
export const Plus = () => <ButtonIcon icon={PlusIcon} />;
export const Twitter = () => <ButtonIcon icon={TwitterIcon} />;
