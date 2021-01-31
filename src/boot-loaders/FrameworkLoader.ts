import { HelloWorldModule } from "../HelloWorldModule";


export class FrameworkLoader implements egf.IBootLoader {
    onBoot(app: egf.IApp, bootEnd: egf.BootEndCallback): void {
        const helloWorld = new HelloWorldModule();
        app.loadModule(helloWorld);
        bootEnd(true);
    }

}