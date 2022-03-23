import {
  BottomTabHeaderProps,
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import Documents from '../Documents';
import Reader from '../Reader';
import Settings from '../Settings';
import { Ionicons } from '@expo/vector-icons';
import colors from '../../styles/colors';
import { ComponentProps } from 'react';
import core from '../../styles/core';
import NavigationHeader from '../../components/NavigationHeader';

const Tab = createBottomTabNavigator();

const screenOptions = ({
  route,
}: {
  route: RouteProp<ParamListBase>;
}): BottomTabNavigationOptions => ({
  tabBarIcon: ({
    focused,
    color,
    size,
  }: {
    focused: boolean;
    color: string;
    size: number;
  }) => {
    let icon: ComponentProps<typeof Ionicons>['name'] = 'help';

    if (route.name === 'Documents')
      return <Ionicons color={color} name="ios-folder" size={size} />;
    if (route.name === 'Reader Mode')
      return <Ionicons color={color} name="ios-bookmarks" size={size} />;
    if (route.name === 'Settings')
      return <Ionicons color={color} name="ios-settings" size={size} />;
  },

  tabBarActiveTintColor: colors.light,
  tabBarInactiveTintColor: colors.grey[500],

  tabBarStyle: {
    backgroundColor: colors.dark,
    borderTopWidth: 1,
    borderTopColor: colors.grey[500],
    paddingBottom: 2,
    paddingTop: 2,
  },

  headerStyle: {
    backgroundColor: colors.dark,
  },

  headerTitleAlign: 'center',

  headerTitleStyle: {
    color: colors.light,
  },

  header: (props: BottomTabHeaderProps) => {
    console.log(props);
    const title: string = props.route.name;
    const { params } = props.route.params;
    return <NavigationHeader title={title} params />;
  },
});

// Zonder naam -> import zonder {}

export default () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Documents" component={Documents} />
      <Tab.Screen name="Reader Mode" component={Reader} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};
