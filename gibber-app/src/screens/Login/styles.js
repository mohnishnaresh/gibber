import styled from "styled-components/native";

const LoginImg = styled.Image.attrs(({theme}) => ({
  source: theme.mode === 'light' ? require('../../images/login.png') : require('../../images/login-dark.png')
}))`
  width: 250px;
  height: 210px;
  resize-mode: contain;
  margin-top: -150px;
`;

const LanguageModal = styled.View`
  display: flex;
  height: 100%;
  width: 100%;
  opacity: 0.8;
  color: white;
  background: #378fd3;
`

const CloseBtn = styled.TouchableOpacity`
  position: absolute;
  color: white;
  border: 1px solid white;
  height: 10%;
  width: 10%;
`

const FooterTextBtn = styled.TouchableOpacity`
  position: absolute;
  bottom: 10px;
  left: 0; right: 0;
`;

const FooterText = styled.Text`
  text-align: center;
  color: ${({theme}) => theme.primary};
  font-size: 16px;
`;

const ContentContainer = styled.View`
  flex: 1;
  paddingHorizontal: 20px;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.mode === 'light' ? '#fff' : 'transparent'};
`;

const TextB = styled.Text`
  color: ${({theme}) => theme.txt};
`;

export const LoadingWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export {FooterText, FooterTextBtn, LoginImg, ContentContainer, TextB, LanguageModal, CloseBtn};
