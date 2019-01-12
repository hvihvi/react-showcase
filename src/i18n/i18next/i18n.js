import { reactI18nextModule } from "react-i18next";
import i18n from "i18next";
import labels from "./labels";

/**
 * You have to configure i18n
 */
i18n.use(reactI18nextModule).init(labels);

export default i18n;
