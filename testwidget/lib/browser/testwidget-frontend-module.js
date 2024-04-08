"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("@theia/core/shared/inversify");
const testwidget_widget_1 = require("./testwidget-widget");
const testwidget_contribution_1 = require("./testwidget-contribution");
const browser_1 = require("@theia/core/lib/browser");
require("../../src/browser/style/index.css");
exports.default = new inversify_1.ContainerModule(bind => {
    (0, browser_1.bindViewContribution)(bind, testwidget_contribution_1.TestwidgetContribution);
    bind(browser_1.FrontendApplicationContribution).toService(testwidget_contribution_1.TestwidgetContribution);
    bind(testwidget_widget_1.TestwidgetWidget).toSelf();
    bind(browser_1.WidgetFactory).toDynamicValue(ctx => ({
        id: testwidget_widget_1.TestwidgetWidget.ID,
        createWidget: () => ctx.container.get(testwidget_widget_1.TestwidgetWidget)
    })).inSingletonScope();
});
//# sourceMappingURL=testwidget-frontend-module.js.map