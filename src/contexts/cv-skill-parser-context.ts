import {createContext} from "react";
import {ICvSkillParser} from "../parser";

export interface CvSkillParserContextProps {
    parser: ICvSkillParser;
}

export const CvSkillParserContext = createContext<CvSkillParserContextProps>({
    parser: undefined as unknown as ICvSkillParser
});