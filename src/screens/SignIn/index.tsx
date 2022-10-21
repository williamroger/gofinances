import React, { useContext } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

import AppleSvg from '../../assets/apple.svg';
import GoogleSvg from '../../assets/google.svg';
import LogoSvg from '../../assets/logo.svg';

import { SignInSocialButton } from '../../components/SignInSocialButton';
import { AuthContext } from '../../AuthContext';

import {
  Container,
  Header,
  TitleWrapper,
  Title,
  SignInTitle,
  Fotter,
  FooterWrapper,
} from './styles';

export function SignIn() {
  const data = useContext(AuthContext);
  console.log(data);

  return (
    <Container>
      <Header>
        <TitleWrapper>
          <LogoSvg
            width={RFValue(120)}
            height={RFValue(68)}
          />
          <Title>
            Controle suas {'\n'}
            finanças de forma {'\n'}
            muito simples.
          </Title>
        </TitleWrapper>
        <SignInTitle>
          Faça seu login com {'\n'}
          uma das contas abaixo
        </SignInTitle>
      </Header>
      <Fotter>
        <FooterWrapper>
          <SignInSocialButton svg={GoogleSvg} title='Entrar com Google' />
          <SignInSocialButton svg={AppleSvg} title='Entrar com Apple' />
        </FooterWrapper>
      </Fotter>
    </Container>
  );
}