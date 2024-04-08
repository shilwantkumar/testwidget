import * as React from "react";
import { ReactWidget } from "@theia/core/lib/browser/widgets/react-widget";
import { MessageService } from "@theia/core";
import { Message } from "@theia/core/lib/browser";
export declare class TestwidgetWidget extends ReactWidget {
    static readonly ID = "testwidget:widget";
    static readonly LABEL = "Testwidget Widget";
    protected readonly messageService: MessageService;
    protected init(): void;
    protected doInit(): Promise<void>;
    render(): React.ReactElement;
    protected displayMessage(): void;
    protected onActivateRequest(msg: Message): void;
}
//# sourceMappingURL=testwidget-widget.d.ts.map