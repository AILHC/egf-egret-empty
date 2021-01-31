declare global {
    interface IModuleMap {
        helloWorld: HelloWorldModule
    }
}
export class HelloWorldModule implements egf.IModule {
    key: string = "helloWorld";
    say(str?: string) {
        console.log(`hello ${str ? str : "world"}`);
    }
}