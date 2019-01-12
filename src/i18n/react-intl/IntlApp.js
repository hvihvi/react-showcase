import React from "react";
import { IntlProvider, FormattedMessage } from "react-intl";
import labels from "./labels.json";

/**
 * Wrap your App in IntlProvider
 */
export const IntlApp = () => (
  <IntlProvider locale="fr">
    <ExampleComponent />
  </IntlProvider>
);

/**
 * Example without the i18n lib
 */
const ExampleComponentWithoutIntl = () => <div>Hello world!</div>;

/**
 * Example with react-intl lib
 */
const ExampleComponent = () => (
  <div>
    <FormattedMessage id="hello" defaultMessage={labels.home.hello} />
  </div>
);
