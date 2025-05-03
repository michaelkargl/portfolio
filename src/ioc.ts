import {JsonCvSkillParser} from "./parser";
import {ResourceNotFoundException} from "./exceptions";


type ValueProviderFunc<T = unknown> = (c: Container) => T;
type Container = Map<string, ValueProviderFunc>


export enum IoCSymbol {
    CvSkillParser = 'CvSkillParser',
}

export class IocModule {
    public transientContainer: Container = new Map<IoCSymbol, ValueProviderFunc>();

    private register<T>(key: IoCSymbol, value: T | ValueProviderFunc): IocModule {
        if ( typeof value !== 'function' ) {
            value = () => value;
        }
        this.transientContainer.set(key, value as ValueProviderFunc);
        return this;
    }

    public resolveRequired<T>(key: IoCSymbol): T  {
        const provider = this.transientContainer.get(key)
        if (typeof provider !== 'function') {
            throw new ResourceNotFoundException('No resource has been registered with the container.', key);
        }

        const value = provider(this.transientContainer);
        if(!value) {
            throw new ResourceNotFoundException('Expected the value provider to return a value instead it was nil.', key);
        }

        return value as T;
    }

    public registerCvSkillParser(): IocModule {
        return this.register(IoCSymbol.CvSkillParser, () => new JsonCvSkillParser())
    }
}