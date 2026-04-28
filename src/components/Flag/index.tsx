import React from "react";
import { style } from "./styles";
import { Text, View } from 'react-native';

type Props = {
    caption: string,
    color: string,
    selected?: boolean
}

export function Flag({ caption, color, selected }: Props) {
    return (
        <View
            style={[style.container,
            { backgroundColor: color },
            selected && { borderWidth: 2 }
            ]}
        >
            <Text style={style.caption}>{caption}</Text>
        </View>
    );
}
