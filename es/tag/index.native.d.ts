import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { TagPropsType } from './PropsType';
import { ITagStyle } from './style/index.native';
export interface TagNativeProps extends TagPropsType {
    styles?: ITagStyle;
    style?: StyleProp<ViewStyle>;
}
export default class Tag extends React.Component<TagNativeProps, any> {
    static defaultProps: {
        disabled: boolean;
        small: boolean;
        selected: boolean;
        closable: boolean;
        onClose(): void;
        afterClose(): void;
        onChange(): void;
        onLongPress(): void;
        styles: {
            [x: string]: import("react-native").RegisteredStyle<any>;
        };
    };
    closeDom: View | null;
    constructor(props: TagNativeProps);
    componentWillReceiveProps(nextProps: TagNativeProps): void;
    onClick: () => void;
    handleLongPress: () => void;
    onTagClose: () => void;
    onPressIn: () => void;
    onPressOut: () => void;
    render(): JSX.Element | null;
}
