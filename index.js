/**
 * Created by michaelmalura on 18/06/16.
 */

import React, {Component} from 'react';
import {Platform} from 'react-native';
import NavigationBarStylesAndroid from 'NavigatorNavigationBarStylesAndroid';
import NavigationBarStylesIOS from 'NavigatorNavigationBarStylesIOS';

const NavigationBarStyles = Platform.OS === 'android' ? NavigationBarStylesAndroid : NavigationBarStylesIOS;

export default {
	NavigationBarHeight: NavigationBarStyles.General.TotalNavHeight
};
