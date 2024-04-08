import * as React from "react";
import {
  injectable,
  postConstruct,
  inject,
} from "@theia/core/shared/inversify";
import { ReactWidget } from "@theia/core/lib/browser/widgets/react-widget";
import { MessageService } from "@theia/core";
import { Message } from "@theia/core/lib/browser";
import {Chatbot} from "./Chatbot";


@injectable()
export class TestwidgetWidget extends ReactWidget {
  static readonly ID = "testwidget:widget";
  static readonly LABEL = "Testwidget Widget";

  @inject(MessageService)
  protected readonly messageService!: MessageService;

  @postConstruct()
  protected init(): void {
    this.doInit();
  }

  protected async doInit(): Promise<void> {
    this.id = TestwidgetWidget.ID;
    this.title.label = TestwidgetWidget.LABEL;
    this.title.caption = TestwidgetWidget.LABEL;
    this.title.closable = true;
    this.title.iconClass = "fa fa-window-maximize"; // example widget icon.
    this.update();
  }

  render(): React.ReactElement {
    return (
      <div id="widget-container">
        <Chatbot />
      </div>
    );
  }

  protected displayMessage(): void {
    this.messageService.info(
      "Congratulations: Testwidget Widget Successfully Created!"
    );
  }

  protected onActivateRequest(msg: Message): void {
    super.onActivateRequest(msg);
    const htmlElement = document.getElementById("displayMessageButton");
    if (htmlElement) {
      htmlElement.focus();
    }
  }
}
