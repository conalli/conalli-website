import { ViewLayout } from "../../components/ViewLayout";

export const Contact: React.FC = () => {
  return (
    <ViewLayout
      top={{ linkTo: "projects" }}
      transitionBackground={{ one: "red", two: "green" }}
    >
      <div>Contact</div>
    </ViewLayout>
  );
};
