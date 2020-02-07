import { createBottomTabNavigator } from 'react-navigation-tabs';

import MainPageContainer from "../Container/MainPageContainer";
import NewsContainer from "../Container/NewsContainer";

export default BottomTabNav = createBottomTabNavigator(
    {
        Main: MainPageContainer,
        News: NewsContainer,
    },
    {
        initialRouteName: "News",
        headerRight:null,
    }
)
