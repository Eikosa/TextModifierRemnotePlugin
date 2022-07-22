import { declareIndexPlugin, ReactRNPlugin, WidgetLocation } from '@remnote/plugin-sdk';
import '../style.css';

async function onActivate(plugin: ReactRNPlugin) {
  // Register settings
  // Show a toast notification to the user.
  await plugin.app.toast("The Text Modifier plugin has been successfully added");

  await plugin.app.registerWidget(
    'text_modifier',
    WidgetLocation.SelectedTextMenu,
    {
      dimensions: {
        height: 'auto',
        width: '100%',
      },
      widgetTabIcon: 'https://cdn-icons.flaticon.com/png/512/2280/premium/2280532.png?token=exp=1657973265~hmac=c30bd881cb41f81fe10c2b04b08cf2a7',
      widgetTabTitle: 'Text Modifier',
    },
  );
}

async function onDeactivate(_: ReactRNPlugin) {}

declareIndexPlugin(onActivate, onDeactivate);
