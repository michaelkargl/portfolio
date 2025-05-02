import {ALL_THEMES, React95Theme} from "../../utils/React95Theme";
import React, {ReactElement} from "react";
import {Select, SelectNative} from "react95";

export interface ThemePickerProps {
    themes: React95Theme[]
    themePicked: (theme: React95Theme) => void;
}

const ALL_THEME_OPTIONS = ALL_THEMES.map(t => ({
    value: t,
    label: t.toString()
}));

// TODO: https://github.com/React95/React95/tree/master/packages/core/.storybook/src/theme-changer/src
export const ThemePicker: React.FC<ThemePickerProps> = (props: ThemePickerProps): ReactElement => {
    return (
        <SelectNative options={ALL_THEME_OPTIONS}
                onChange={(selected, ev) => props.themePicked(selected.value)} />
    )
};