import styled from "styled-components/native";
import { TouchableOpacity } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(TouchableOpacity as any)`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};

  padding: ${RFValue(18)}px;
  border-radius: 5px;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(14)}px;
`;