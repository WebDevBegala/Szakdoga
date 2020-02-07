import { createAppContainer, NavigationActions } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import RegistrationContainer from "./Container/RegistrationContainer";
import LoginContainer from "./Container/LoginContainer";
import MainPageContainer from './Container/MainPageContainer';
import ChatPageContainer from "./Container/ChatPageContainer";
import BottomTabNav from './OtherNavigators/BottomTabNav';

const AppNavigator = createStackNavigator(
  {
    Login: LoginContainer,
    Registration: RegistrationContainer,
    Home: BottomTabNav,
    ChatPage: ChatPageContainer
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerLeft: 0
    }
  }
);

export default createAppContainer(AppNavigator);