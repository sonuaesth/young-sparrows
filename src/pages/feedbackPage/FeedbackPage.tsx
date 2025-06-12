import { useTranslation } from "react-i18next";

function Feedback() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("feedback")}</h1>
      <p>{t("feedback_description")}</p> {/* добавь в перевод, если нужно */}
    </div>
  );
}

export default Feedback;
