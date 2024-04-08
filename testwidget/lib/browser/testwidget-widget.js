"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var TestwidgetWidget_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestwidgetWidget = void 0;
const React = require("react");
const inversify_1 = require("@theia/core/shared/inversify");
const react_widget_1 = require("@theia/core/lib/browser/widgets/react-widget");
const core_1 = require("@theia/core");
const Chatbot_1 = require("./Chatbot");
let TestwidgetWidget = TestwidgetWidget_1 = class TestwidgetWidget extends react_widget_1.ReactWidget {
    init() {
        this.doInit();
    }
    async doInit() {
        this.id = TestwidgetWidget_1.ID;
        this.title.label = TestwidgetWidget_1.LABEL;
        this.title.caption = TestwidgetWidget_1.LABEL;
        this.title.closable = true;
        this.title.iconClass = "fa fa-window-maximize"; // example widget icon.
        this.update();
    }
    render() {
        return (React.createElement("div", { id: "widget-container" },
            React.createElement(Chatbot_1.Chatbot, null)));
    }
    displayMessage() {
        this.messageService.info("Congratulations: Testwidget Widget Successfully Created!");
    }
    onActivateRequest(msg) {
        super.onActivateRequest(msg);
        const htmlElement = document.getElementById("displayMessageButton");
        if (htmlElement) {
            htmlElement.focus();
        }
    }
};
TestwidgetWidget.ID = "testwidget:widget";
TestwidgetWidget.LABEL = "Testwidget Widget";
__decorate([
    (0, inversify_1.inject)(core_1.MessageService),
    __metadata("design:type", core_1.MessageService)
], TestwidgetWidget.prototype, "messageService", void 0);
__decorate([
    (0, inversify_1.postConstruct)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TestwidgetWidget.prototype, "init", null);
TestwidgetWidget = TestwidgetWidget_1 = __decorate([
    (0, inversify_1.injectable)()
], TestwidgetWidget);
exports.TestwidgetWidget = TestwidgetWidget;
//# sourceMappingURL=testwidget-widget.js.map