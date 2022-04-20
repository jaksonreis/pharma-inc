import React from 'react';
import { UsersProps } from '../../dtos/usersDTO';
import { dateFormatter } from '../../utils/dateFormatter';
import { genreTranslate } from '../../utils/genreTranslate';
import { Button } from '../Button';

import {
  Container,
  Avatar,
  Data,
} from './styles';

interface Props {
  data: UsersProps;
  onPress: () => void;
}

export function ListItem({ data, onPress }: Props) {
  return (
      <Container>


        <Data><Avatar src={data.picture.thumbnail} /></Data>
        <Data>{data.name.first}</Data>
        <Data>{genreTranslate(data.gender)}</Data>
        <Data>{dateFormatter(data.dob.date)}</Data>
        <Data><Button icon="FiEye" onClick={onPress} text="Ver mais" light/></Data>
      </Container>
  );
}