import React from "react";
import { style } from "./styles";
import { View } from 'react-native';

type Props = {
    color: string
}

export function Ball({ color }: Props) {
    return (
        <View style={[style.ball, { borderColor: color ? color : 'gray' }]} />
    );
}
