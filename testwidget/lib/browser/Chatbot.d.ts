import React = require("react");
import { MessageService } from "@theia/core";
export declare class Chatbot extends React.Component<any> {
    protected readonly messageService: MessageService;
    state: {
        message: string;
        messages: never[];
    };
    constructor(props: any);
    protected onChangeHandler(event: React.ChangeEvent<HTMLInputElement>): void;
    protected replaceResult(): Promise<void>;
    protected displayMessage(): void;
    render(): React.ReactNode;
}
//# sourceMappingURL=Chatbot.d.ts.map