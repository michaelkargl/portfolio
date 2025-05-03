import {CvSkill} from "../models";
import {InvalidFormatException} from "../exceptions";

export class JsonCvSkillParser {
    public parseList(json: string): CvSkill[] {
        if (!json.startsWith('[')) {
            throw new InvalidFormatException("The json document is not an array.", "parseList.json");
        }
        try {
            const skills = JSON.parse(json) as CvSkill[]
            // to turn this into a pure function
            return skills
                .sort((last, current) => current.percent - last.percent);

        } catch (e) {
            throw new InvalidFormatException("The json document is unparseable.", "parseList.json");
        }
    }
}