import { ContainerModule } from '@theia/core/shared/inversify';
import { TestwidgetWidget } from './testwidget-widget';
import { TestwidgetContribution } from './testwidget-contribution';
import { bindViewContribution, FrontendApplicationContribution, WidgetFactory } from '@theia/core/lib/browser';

import '../../src/browser/style/index.css';

export default new ContainerModule(bind => {
    bindViewContribution(bind, TestwidgetContribution);
    bind(FrontendApplicationContribution).toService(TestwidgetContribution);
    bind(TestwidgetWidget).toSelf();
    bind(WidgetFactory).toDynamicValue(ctx => ({
        id: TestwidgetWidget.ID,
        createWidget: () => ctx.container.get<TestwidgetWidget>(TestwidgetWidget)
    })).inSingletonScope();
});
