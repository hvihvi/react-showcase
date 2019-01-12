import React from "react";
import { withI18n } from "react-i18next";

/**
 * After i18n. The `withI18N` HOC injects `t`, we use it to display our message
 */
const ComponentExample = ({ t }) => <div>{t("Hello World")}</div>;

export default withI18n()(ComponentExample);
