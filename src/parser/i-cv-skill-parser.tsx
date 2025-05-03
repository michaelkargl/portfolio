import {CvSkill} from "../models";

export interface ICvSkillParser {
    parseList(json: string): CvSkill[];
}