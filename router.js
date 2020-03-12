import { createAppContainer, NavigationActions } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import RegistrationContainer from "./Container/RegistrationContainer";
import LoginContainer from "./Container/LoginContainer";
import MainPageContainer from './Container/MainPageContainer';
import ChatPageContainer from "./Container/ChatPageContainer";
import BottomTabNav from './OtherNavigators/BottomTabNav';
import PasswordResetContainer from "./Container/PasswordResetContainer";
import ImagesHandlingContainer from "./Container/ImagesHandlingContainer";


const AppNavigator = createStackNavigator(
  {
    Login: LoginContainer,
    Registration: RegistrationContainer,
    Home: BottomTabNav,
    ChatPage: ChatPageContainer,
    PasswordReset: PasswordResetContainer,
    ImagesHandling:ImagesHandlingContainer

  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      headerLeft: 0,
      header: false
    }
  }
);

export default createAppContainer(AppNavigator);