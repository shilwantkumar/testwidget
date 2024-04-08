"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const core_1 = require("@theia/core");
const inversify_1 = require("@theia/core/shared/inversify");
const testwidget_widget_1 = require("./testwidget-widget");
const react_1 = require("@testing-library/react");
describe('TestwidgetWidget', () => {
    let widget;
    beforeEach(async () => {
        const module = new inversify_1.ContainerModule(bind => {
            bind(core_1.MessageService).toConstantValue({
                info(message) {
                    console.log(message);
                }
            });
            bind(testwidget_widget_1.TestwidgetWidget).toSelf();
        });
        const container = new inversify_1.Container();
        container.load(module);
        widget = container.resolve(testwidget_widget_1.TestwidgetWidget);
    });
    it('should render react node correctly', async () => {
        const element = (0, react_1.render)(widget.render());
        expect(element.queryByText('Display Message')).toBeTruthy();
    });
    it('should inject \'MessageService\'', () => {
        const spy = jest.spyOn(widget, 'displayMessage');
        widget['displayMessage']();
        expect(spy).toBeCalled();
    });
});
//# sourceMappingURL=testwidget-widget.test.js.map